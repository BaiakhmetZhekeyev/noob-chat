import Block from '../../utils/block/Block.ts';
import styles from './style.module.scss';
import { tpl } from './send-message-form.tpl.ts';
import { validateForm } from '../../utils/validation/validate.ts';

interface SendMessageFormProps {

}

export class SendMessageForm extends Block {
  constructor(props: SendMessageFormProps) {
    super('form', {
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          validateForm(event.target as HTMLFormElement, this.children.input as Block[]);
        },
      },
    });
  }

  init() {
    const element = this.element as HTMLFormElement;
    element.className = styles.form;
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tpl);
  }
}
