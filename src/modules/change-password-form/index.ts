import Block from '../../utils/block/Block.ts';
import { tpl } from './change-password-form.tpl.ts';
import styles from './style.module.scss';
import { validateForm } from '../../utils/validation/validate.ts';

interface ChangePasswordFormProps {
    SaveBtn: Block;
    inputs: Block[];
}
export class ChangePasswordForm extends Block {
  constructor(props: ChangePasswordFormProps) {
    super('form', {
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          validateForm(event.target as HTMLFormElement, this.children.inputs as Block[]);
        },
      },
    });
  }

  init() {
    const element = this.element as HTMLFormElement;
    element.className = styles.changePasswordForm;
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tpl);
  }
}
