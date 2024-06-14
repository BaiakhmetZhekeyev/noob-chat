import Block from '../../utils/block/Block.ts';
import { tpl } from './login-form.tpl.ts';
import styles from './style.module.scss';
import { validateForm } from '../../utils/validation/validate.ts';

interface LoginFormProps {
    LoginBtn: Block;
    RegisterLink: Block;
    headerText: string;
    inputs: Block[];
}
export class LoginForm extends Block {
  constructor(props: LoginFormProps) {
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
    element.className = styles.loginContainer;
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tpl);
  }
}
