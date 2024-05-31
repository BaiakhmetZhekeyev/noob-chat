import { tpl } from './sidebar-chat.tpl.ts';
import Block from '../../utils/block/Block.ts';
import { Avatar } from '../../components/avatar/index.ts';

interface SidebarChatProps {
  avatarUrl: string;
  message: string;
  name: string;
  numberOfMessages?: number;
  time: string;
  url: string;
}

export class SidebarChat extends Block {
  constructor(props: SidebarChatProps) {
    super('li', props);
  }

  init() {
    this.children.Avatar = new Avatar({ url: this.props.avatarUrl, size: 'small' });
  }

  render() {
    return this.compile(tpl);
  }
}
