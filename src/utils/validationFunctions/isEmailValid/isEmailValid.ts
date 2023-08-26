import IIsValidationFunction from '../../../model/utils/validationFunctions/isValidationFunction';

const isEmailValid: IIsValidationFunction = (value: string) => {
  if (!value) {
    return {
      status: false,
      text: 'Shouldn`t be empty',
    };
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return {
      status: false,
      text: 'Invalid email format',
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

export default isEmailValid;
