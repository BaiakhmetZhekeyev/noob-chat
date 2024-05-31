import Block from '../block/Block.ts';

enum INPUTNAMES {
  DISPLAY_NAME = 'display_name',
  EMAIL = 'email',
  FIRST_NAME = 'first_name',
  LOGIN = 'login',
  MESSAGE = 'message',
  NEW_PASSWORD = 'newPassword',
  OLD_PASSWORD = 'oldPassword',
  PASSWORD = 'password',
  PHONE = 'phone',
  REPEAT_PASSWORD = 'repeat_password',
  SECOND_NAME = 'second_name',
}

const validateLogin = (value: string) => {
  const loginRegex = /^(?![-_])(?!.*[-_]{2})[a-zA-Z0-9_-]{3,20}(?<![-_])$/;
  if (!loginRegex.test(value)) {
    return 'Invalid login';
  }
  return '';
};

const validateEmail = (value: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(value)) {
    return 'Invalid email';
  }
  return '';
};

const validateName = (value: string) => {
  const nameRegex = /^(?:[А-ЯЁA-Z][а-яёa-z]*)(?:-[А-ЯЁA-Z][а-яёa-z]*)*$/;
  if (!nameRegex.test(value)) {
    return 'Invalid name';
  }
  return '';
};

const validateSecondName = (value: string) => {
  const nameRegex = /^(?:[А-ЯЁA-Z][а-яёa-z]*)(?:-[А-ЯЁA-Z][а-яёa-z]*)*$/;
  if (!nameRegex.test(value)) {
    return 'Invalid second name';
  }
  return '';
};

const validatePhone = (value: string) => {
  const phoneRegex = /^\+?\d+$/;
  if (value.length < 10) {
    return 'Too short';
  }
  if (value.length > 15) {
    return 'Too long';
  }
  if (!phoneRegex.test(value)) {
    return 'Invalid phone number';
  }

  return '';
};

const validatePassword = (value: string) => {
  if (value.length < 8) {
    return 'Too short';
  }
  if (value.length > 40) {
    return 'Too long';
  }

  if (!/[A-Z]/.test(value)) {
    return 'Must contain a capital letter';
  }

  if (!/[a-z]/.test(value)) {
    return 'Must contain a lowercase letter';
  }

  if (!/\d/.test(value)) {
    return 'Must contain a digit';
  }

  return '';
};

const validateMessage = (value: string) => {
  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    return 'Empty message';
  }

  return '';
};

export const validate = (input: Record<string, string>) => {
  const errorList: Record<string, string> = {};
  Object.entries(input).forEach(([key, value]) => {
    switch (key) {
      case INPUTNAMES.LOGIN:
        errorList[key] = validateLogin(value);
        break;
      case INPUTNAMES.EMAIL:
        errorList[key] = validateEmail(value);
        break;
      case INPUTNAMES.FIRST_NAME:
        errorList[key] = validateName(value);
        break;
      case INPUTNAMES.SECOND_NAME:
        errorList[key] = validateSecondName(value);
        break;
      case INPUTNAMES.PASSWORD:
        errorList[key] = validatePassword(value);
        break;
      case INPUTNAMES.REPEAT_PASSWORD:
        if (input[INPUTNAMES.PASSWORD]) {
          if (value !== input[INPUTNAMES.PASSWORD]) {
            errorList[key] = 'Passwords don\'t match';
          }
        }
        break;
      case INPUTNAMES.OLD_PASSWORD:
        errorList[key] = validatePassword(value);
        break;
      case INPUTNAMES.NEW_PASSWORD:
        errorList[key] = validatePassword(value);
        if (value === input[INPUTNAMES.OLD_PASSWORD]) {
          errorList[key] = 'The new password cannot be the old password';
        }
        break;
      case INPUTNAMES.PHONE:
        errorList[key] = validatePhone(value);
        break;
      case INPUTNAMES.MESSAGE:
        errorList[key] = validateMessage(value);
        break;
      case INPUTNAMES.DISPLAY_NAME:
        errorList[key] = validateLogin(value);
        break;
      default:
        break;
    }
  });
  return errorList;
};

export const validateForm = (form: HTMLFormElement, inputs: Block[]) => {
  const formData = new FormData(form);
  const inputList: Record<string, string> = {};

  formData.forEach((value, name) => {
    if (typeof value === 'string') {
      inputList[name] = value;
    }
  });
  const isChatForm = Object.keys(inputList).includes('message');
  const errorList: Record<string, string> = validate(inputList);
  const validInputs = Object.values(errorList).every((value) => !value);

  if (validInputs) {
    console.log(inputList);
  } else {
    inputs.forEach((input) => {
      if (!isChatForm) {
        (input.children.ErrorSpan as Block).setProps({
          // eslint-disable-next-line max-len
          validationText: input.element && input.element.dataset.name ? errorList[input.element.dataset.name] : undefined,
        });
      }
    });
  }
};
