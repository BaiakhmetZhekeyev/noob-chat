import styles from './style.module.scss';
import Block from '../../utils/block/Block.ts';

export interface ErrorSpanProps {
  validationText: string;
}
export class ErrorSpan extends Block {
  constructor(props: ErrorSpanProps) {
    super('span', props);
  }

  init() {
    const element = this.element as HTMLSpanElement;
    element.className = styles.validationText;
  }

  render() {
    return this.compile('{{validationText}}');
  }
}
