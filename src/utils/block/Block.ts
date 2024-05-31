import { v4 as uuidv4 } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus.ts';

class Block<PropsType extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  protected props: PropsType;

  // eslint-disable-next-line no-use-before-define
  public children: Record<string, Block | Block[]>;

  private eventBus: () => EventBus;

  private readonly id: string;

  private _element: HTMLElement | null = null;

  private readonly _meta: { props: PropsType; tagName: string };

  constructor(tagName = 'div', propsWithChildren: PropsType) {
    const eventBus = new EventBus();
    const { children, props } = this._getChildren(propsWithChildren);
    this.id = uuidv4();
    this._meta = {
      tagName,
      props: props as PropsType,
    };
    this.children = children;
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  // eslint-disable-next-line max-len
  private _getChildren(propsWithChildren: PropsType): {children: Record<string, Block | Block[]>, props: PropsType } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(propsWithChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return {
      props: props as PropsType,
      children,
    };
  }

  _addEvents() {
    const { events = {} } = this.props as PropsType & { events: Record<string, () => void> };
    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props as PropsType & { events: Record<string, () => void> };
    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _init() {
    this._createResources();
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((c) => c.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate() {
    if (this.componentDidUpdate()) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate() {
    return true;
  }

  setProps = (nextProps: PropsType) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
    this._removeEvents();
    this._element!.innerHTML = '';
    this._element!.append(fragment);

    this._addEvents();
  }

  protected compile(template: string) {
    const propsAndStubs = { ...this.props } as Record<string, any>;
    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = child.map((block) => `<div data-id="${block.id}"></div>`);
      } else {
        propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
      }
    });

    const html = Handlebars.compile(template)(propsAndStubs);
    const templateElement = document.createElement('template');
    templateElement.innerHTML = html;

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        const stubs = component.map((block) => templateElement.content.querySelector(`[data-id="${block.id}"]`));
        if (!stubs.length) {
          return;
        }
        stubs.forEach((stub, index) => {
          component[index].getContent()?.append(...Array.from(stub!.childNodes));
          stub!.replaceWith(component[index].getContent()!);
        });
      } else {
        const stub = templateElement.content.querySelector(`[data-id="${component.id}"]`);
        if (!stub) {
          return;
        }
        component.getContent()?.append(...Array.from(stub.childNodes));

        stub.replaceWith(component.getContent()!);
      }
    });

    return templateElement.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: PropsType) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, val) {
        target[prop as keyof PropsType] = val;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
