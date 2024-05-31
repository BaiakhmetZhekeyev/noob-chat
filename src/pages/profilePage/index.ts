import Block from '../../utils/block/Block.ts';
import { Avatar } from '../../components/avatar/index.ts';
import Image from '../../assets/images/avatar.jpg';
import { Link } from '../../components/link/index.ts';
import { Button } from '../../components/button/index.ts';
import { tpl } from './profile.tpl.ts';

export class Profile extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.Avatar = new Avatar({ url: Image, size: 'big' });
    this.children.ChangeUserInfoLink = new Link({
      variant: 'contained',
      to: '/change-user-info',
      text: 'Change user info',
    });
    this.children.ChangePasswordLink = new Link({
      variant: 'contained',
      to: '/change-password',
      text: 'Change password',
    });
    this.children.LogoutBtn = new Button({
      variant: 'warning',
      type: 'submit',
      text: 'Log out',
    });
  }

  render() {
    return this.compile(tpl);
  }
}
