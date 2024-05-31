import styles from './style.module.scss';
import { tpl } from './input-field.tpl.ts';
import Block from '../../utils/block/Block.ts';
import { ErrorSpan } from '../errorSpan/index.ts';
import { Input } from '../input/index.ts';
import { validate } from '../../utils/validation/validate.ts';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  variant: string;
}

export class InputField extends Block {
  constructor(props: InputFieldProps) {
    super('div', props);
    console.log('props', props);
  }

  init() {
    this.children.ErrorSpan = new ErrorSpan({
      validationText: '',
    });
    this.children.Input = new Input({
      ...this.props,
      events: {
        blur: (event) => {
          const target = event.target as HTMLInputElement;
          const errors = validate({
            [this.props.name]: target.value,
          });
          (this.children.ErrorSpan as Block).setProps({
            validationText: errors[this.props.name],
          });
        },
      },
    });
    const element = this.element as HTMLDivElement;
    element.className = `${styles.input} ${styles[this.props.variant]}`;
    element.dataset.name = this.props.name;
  }

  render() {
    return this.compile(tpl);
  }
}
