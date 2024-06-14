import { tpl } from './change-password.tpl.ts';
import Image from '../../../../assets/images/avatar.jpg';
import Block from '../../../../utils/block/Block.ts';
import { Avatar } from '../../../../components/avatar/index.ts';
import { Button } from '../../../../components/button/index.ts';
import { ChangePasswordForm } from '../../../../modules/change-password-form/index.ts';
import { InputField } from '../../../../components/input-field/index.ts';

export class ChangePassword extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.Avatar = new Avatar({ url: Image, size: 'big' });
    this.children.ChangePasswordForm = new ChangePasswordForm({
      inputs: [
        new InputField({
          variant: 'primary',
          name: 'oldPassword',
          type: 'password',
          label: 'Old password',
        }),
        new InputField({
          variant: 'primary',
          name: 'newPassword',
          type: 'password',
          label: 'New password',
        }),
      ],
      SaveBtn: new Button({
        variant: 'contained',
        type: 'submit',
        text: 'Change password',
      }),
    });
  }

  render() {
    return this.compile(tpl);
  }
}
