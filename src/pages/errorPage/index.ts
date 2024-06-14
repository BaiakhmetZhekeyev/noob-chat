import { tpl } from './error.tpl.ts';
import Block from '../../utils/block/Block.ts';
import styles from './style.module.scss';
import { Link } from '../../components/link/index.ts';

interface ErrorPageProps {
  ErrorCode: string;
  ErrorMessage: string;
}

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super('div', props);
  }

  init() {
    const element = this.element as HTMLDivElement;
    element.className = styles.error;

    this.children.BackToChatBtn = new Link({
      variant: 'contained',
      text: 'Back to chat',
      to: '/',
    });
  }

  render() {
    return this.compile(tpl);
  }
}
