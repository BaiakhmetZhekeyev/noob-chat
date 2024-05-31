import styles from './style.module.scss';
import Block from '../../utils/block/Block.ts';

interface AvatarProps {
  size: 'small' | 'normal' | 'big';
  url: string;
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super('img', props);
  }

  init() {
    const element = this.element as HTMLImageElement;
    element.className = `${styles.userAvatar} ${styles[this.props.size]}`;
    element.src = this.props.url;
  }

  render() {
    return this.compile('');
  }
}
