import Block from '../../utils/block/Block.ts';
import { tpl } from './register-form.tpl.ts';
import styles from './style.module.scss';
import { validateForm } from '../../utils/validation/validate.ts';

interface RegisterFormProps {
    LoginLink: Block;
    RegisterBtn: Block;
    headerText: string;
    inputs: Block[];
}
export class RegisterForm extends Block {
  constructor(props: RegisterFormProps) {
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
    element.className = styles.registerContainer;
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tpl);
  }
}
