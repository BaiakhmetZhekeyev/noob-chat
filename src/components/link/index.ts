import styles from './style.module.scss';
import Block from '../../utils/block/Block.ts';

interface LinkProps {
  text: string;
  to: string;
  variant?: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super('a', props);
  }

  init() {
    const element = this.element as HTMLLinkElement;
    element.className = `${styles.link} ${styles[this.props.variant]}`;
    element!.href = this.props.to;
  }

  render() {
    return this.compile('{{text}}');
  }
}
