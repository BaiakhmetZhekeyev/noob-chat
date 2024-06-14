import styles from './style.module.scss';
import Block from '../../utils/block/Block.ts';
import { tpl } from './chat-message.tpl.ts';

interface ChatMessageProps {
  text: string;
  time: string;
}

export class ChatMessage extends Block {
  constructor(props: ChatMessageProps) {
    super('li', props);
  }

  init() {
    const element = this.element as HTMLLIElement;
    element.className = styles.chatMessage;
  }

  render() {
    return this.compile(tpl);
  }
}
