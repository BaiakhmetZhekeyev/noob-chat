import Block from '../../utils/block/Block.ts';
import { tpl } from './chat.tpl.ts';
import { Avatar } from '../../components/avatar/index.ts';
import Image from '../../assets/images/avatar.jpg';
import { SidebarChat } from '../../modules/sidebar-chat/index.ts';
import { Link } from '../../components/link/index.ts';
import { Input } from '../../components/input/index.ts';
import { ChatMessage } from '../../modules/chat-message/index.ts';
import { SendMessageForm } from '../../modules/send-message-form/index.ts';

export class Chat extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.Avatar = new Avatar({ url: Image, size: 'small' });
    this.children.ProfileLink = new Link({
      text: 'Profile >',
      to: '/profile',
      variant: 'default',
    });
    this.children.SearchInput = new Input({
      name: 'search',
      type: 'text',
      placeholder: 'Search...',
    });
    this.children.chats = [
      new SidebarChat({
        url: '#',
        name: 'Aisultan',
        avatarUrl: Image,
        message: 'What city are you in now? How is your family doing?',
        numberOfMessages: 2,
        time: '13:47',
      }),
      new SidebarChat({
        url: '#',
        name: 'Malika',
        avatarUrl: Image,
        message: 'Good morning! Did you sleep well?',
        numberOfMessages: 1,
        time: '08:46',
      }),
      new SidebarChat({
        url: '#',
        name: 'Zhasulan',
        avatarUrl: Image,
        message: 'Hello! Any plans for the weekend?',
        numberOfMessages: 13,
        time: '15:25',
      }),
    ];
    this.children.messages = [
      new ChatMessage({
        text: 'Hi,Baiakhmet! Long time no see. How have you been?',
        time: '13:45',
      }),
      new ChatMessage({
        text: 'What city are you in now? How is your family doing?',
        time: '13:47',
      }),
      this.children.SendMessageForm = new SendMessageForm({
        inputs: [
          new Input({
            placeholder: 'Type message...',
            name: 'message',
            type: 'text',
          }),
          new Input({
            name: 'file',
            type: 'file',
          }),
        ],
      }),
    ];
  }

  render() {
    return this.compile(tpl);
  }
}
