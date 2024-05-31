import { Button } from '../../components/button/index.ts';
import { Link } from '../../components/link/index.ts';
import Block from '../../utils/block/Block.ts';
import { RegisterForm } from '../../modules/register-form/index.ts';
import { InputField } from '../../components/input-field/index.ts';

export class Register extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.registerForm = new RegisterForm({
      headerText: 'Register',
      inputs: [
        new InputField({
          variant: 'primary',
          name: 'email',
          type: 'email',
          label: 'Email',

        }),
        new InputField({
          variant: 'primary',
          name: 'login',
          type: 'text',
          label: 'Login',
        }),
        new InputField({
          variant: 'primary',
          name: 'second_name',
          type: 'text',
          label: 'Second name',
        }),
        new InputField({
          variant: 'primary',
          name: 'phone',
          type: 'text',
          label: 'Phone',
        }),
        new InputField({
          variant: 'primary',
          name: 'password',
          type: 'password',
          label: 'Password',
        }),
        new InputField({
          variant: 'primary',
          name: 'repeat_password',
          type: 'password',
          label: 'Repeat password',
        }),
      ],
      RegisterBtn: new Button({
        variant: 'contained',
        type: 'submit',
        text: 'Register',
      }),
      LoginLink: new Link({
        variant: 'outlined',
        to: '/login',
        text: 'Login',
      }),
    });
  }

  render() {
    return this.compile('{{{registerForm}}}');
  }
}
