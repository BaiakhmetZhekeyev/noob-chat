import Block from './utils/block/Block.ts';
import { Login } from './pages/loginPage/index.ts';
import { Register } from './pages/registerPage/index.ts';
import { Profile } from './pages/profilePage/index.ts';
import { ChangePassword } from './pages/profilePage/modules/changePassword/index.ts';
import { ChangeProfileInfo } from './pages/profilePage/modules/changeProfileInfo/index.ts';
import { Chat } from './pages/chatPage/index.ts';
import { ErrorPage } from './pages/errorPage/index.ts';
import { NavigationPage } from './pages/navigationPage/index.ts';
import './style.scss';

const routes: Record<string, Block> = {
  '/': new NavigationPage(),
  '/login': new Login(),
  '/register': new Register(),
  '/profile': new Profile(),
  '/change-password': new ChangePassword(),
  '/change-user-info': new ChangeProfileInfo(),
  '/chat': new Chat(),
  '/404': new ErrorPage({
    ErrorCode: '404',
    ErrorMessage: 'Page Not Found',
  }),
  '/500': new ErrorPage({
    ErrorCode: '500',
    ErrorMessage: 'Fixing',
  }),
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root') as HTMLElement;
  const currentPage = routes[window.location.pathname];
  if (root) {
    root.innerHTML = '';
    root.append(currentPage.getContent()!);
  }

  currentPage.dispatchComponentDidMount();
});
