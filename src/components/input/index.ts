import Block from '../../utils/block/Block.ts';
import styles from './style.module.scss';

interface InputProps {
  events?: {
    blur?: (event: FocusEvent) => void;
  };
  name: string;
  placeholder?: string;
  type: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  init() {
    const element = this.element as HTMLInputElement;
    element.type = this.props.type;
    element.name = this.props.name;
    if (this.props.placeholder) {
      element.placeholder = this.props.placeholder;
    }
    if (this.props.type === 'file') {
      element.classList.add(styles.file);
      element.id = this.props.name;
    }
    if (this.props.name === 'search') {
      element.className = styles.search;
    }
    if (this.props.name === 'message') {
      element.classList.add(styles.message);
    }
  }

  render() {
    return this.compile('');
  }
}
