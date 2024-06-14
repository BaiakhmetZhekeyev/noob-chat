import Block from '../../utils/block/Block.ts';
import { tpl } from './change-profile-form.tpl.ts';
import styles from './style.module.scss';
import { validateForm } from '../../utils/validation/validate.ts';

interface ChangeProfileFormProps {
    SaveBtn: Block;
    inputs: Block[];
}
export class ChangeProfileForm extends Block {
  constructor(props: ChangeProfileFormProps) {
    super('form', {
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          validateForm(event.target as HTMLFormElement, this.children.inputs as Block[]);
        },
      },
    });
  }

  init() {
    const element = this.element as HTMLFormElement;
    element.className = styles.changeProfileInfoForm;
    this.children.inputs = this.props.inputs;
  }

  render() {
    return this.compile(tpl);
  }
}
