import { tpl } from './navigation.tpl.ts';
import Block from '../../utils/block/Block.ts';
import styles from './style.module.scss';
import { Link } from '../../components/link/index.ts';

export class NavigationPage extends Block {
  constructor() {
    super('nav', {});
  }

  init() {
    const element = this.element as HTMLElement;
    element.className = styles.navigation;

    this.children.LoginLink = new Link({
      variant: 'contained',
      text: 'Login',
      to: '/login',
    });
    this.children.RegisterLink = new Link({
      variant: 'contained',
      text: 'Register',
      to: '/register',
    });
    this.children.ProfileLink = new Link({
      variant: 'contained',
      text: 'Profile',
      to: '/profile',
    });
    this.children.ChangePasswordLink = new Link({
      variant: 'contained',
      text: 'Change Password',
      to: '/change-password',
    });
    this.children.ChangeUserInfoLink = new Link({
      variant: 'contained',
      text: 'Change Profile Info',
      to: '/change-user-info',
    });
    this.children.ChatLink = new Link({
      variant: 'contained',
      text: 'Chat',
      to: '/chat',
    });
    this.children.Error404Link = new Link({
      variant: 'contained',
      text: 'Error 404',
      to: '/404',
    });
    this.children.Error500Link = new Link({
      variant: 'contained',
      text: 'Error 500',
      to: '/500',
    });
  }

  render() {
    return this.compile(tpl);
  }
}
