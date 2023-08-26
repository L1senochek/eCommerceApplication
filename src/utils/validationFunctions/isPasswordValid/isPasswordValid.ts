import IIsValidationFunction from '../../../model/utils/validationFunctions/isValidationFunction';

const isPasswordValid: IIsValidationFunction = (value: string) => {
  if (!value) {
    return {
      status: false,
      text: 'Shouldn`t be empty',
    };
  } else if (value.length < 8) {
    return {
      status: false,
      text: 'Should be at least 8 characters long',
    };
  } else if (!/[A-Z]/.test(value)) {
    return {
      status: false,
      text: 'Should contain at least one capital letter',
    };
  } else if (!/[a-z]/.test(value)) {
    return {
      status: false,
      text: 'Should contain at least one lowercase letter',
    };
  } else if (!/[0-9]/.test(value)) {
    return {
      status: false,
      text: 'Should contain at least one digit',
    };
  } else if (value.trim() === value) {
    return {
      status: true,
      text: '',
    };
  } else {
    return {
      status: false,
      text: 'Shouldn`t contain trailing spaces',
    };
  }
};

export default isPasswordValid;
