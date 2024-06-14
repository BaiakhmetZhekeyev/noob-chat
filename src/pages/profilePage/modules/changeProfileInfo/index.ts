import { tpl } from './changeProfileInfo.tpl.ts';
import Image from '../../../../assets/images/avatar.jpg';
import Block from '../../../../utils/block/Block.ts';
import { Avatar } from '../../../../components/avatar/index.ts';
import { Button } from '../../../../components/button/index.ts';
import { InputField } from '../../../../components/input-field/index.ts';
import { ChangeProfileForm } from '../../../../modules/change-profile-form/index.ts';

export class ChangeProfileInfo extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.Avatar = new Avatar({ url: Image, size: 'big' });
    this.children.ChangeProfileForm = new ChangeProfileForm({
      inputs: [
        new InputField({
          variant: 'secondary',
          name: 'email',
          type: 'email',
          label: 'Email',
        }),
        new InputField({
          variant: 'secondary',
          name: 'loginPage',
          type: 'text',
          label: 'Login',
        }),
        new InputField({
          variant: 'secondary',
          name: 'first_name',
          type: 'text',
          label: 'First name',
        }),
        new InputField({
          variant: 'secondary',
          name: 'second_name',
          type: 'text',
          label: 'Second name',
        }),
        new InputField({
          variant: 'secondary',
          name: 'display_name',
          type: 'text',
          label: 'Display name',
        }),
        new InputField({
          variant: 'secondary',
          name: 'phone',
          type: 'text',
          label: 'Phone',
        }),
      ],
      SaveBtn: new Button({
        variant: 'contained',
        type: 'submit',
        text: 'Save changes',
      }),
    });
  }

  render() {
    return this.compile(tpl);
  }
}
