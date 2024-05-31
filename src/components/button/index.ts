import styles from './style.module.scss';
import Block from '../../utils/block/Block.ts';

export interface ButtonProps {
  events?: {
    click: () => void;
  };
  text: string;
  type: 'button' | 'submit';
  variant: string;
}
export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init() {
    const element = this.element as HTMLButtonElement;
    element.className = `${styles.button} ${styles[this.props.variant]}`;
    element.type = this.props.type;
  }

  render() {
    return this.compile('{{text}}');
  }
}
