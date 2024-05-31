import { Button } from '../../components/button/index.ts';
import { Link } from '../../components/link/index.ts';
import { LoginForm } from '../../modules/login-form/index.ts';
import Block from '../../utils/block/Block.ts';
import { InputField } from '../../components/input-field/index.ts';

export class Login extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.loginForm = new LoginForm({
      headerText: 'Login',
      inputs: [
        new InputField({
          variant: 'primary',
          name: 'login',
          type: 'text',
          label: 'Login',
        }),
        new InputField({
          variant: 'primary',
          name: 'password',
          type: 'password',
          label: 'Password',
        }),
      ],
      LoginBtn: new Button({
        variant: 'contained',
        type: 'submit',
        text: 'Login',
      }),
      RegisterLink: new Link({
        variant: 'outlined',
        to: '/register',
        text: 'Register',
      }),
    });
  }

  render() {
    return this.compile('{{{loginForm}}}');
  }
}
