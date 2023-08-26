import IIsValidationFunction from '../../../model/utils/validationFunctions/isValidationFunction';

const isTextInputValid: IIsValidationFunction = (value: string) => {
  if (!value) {
    return {
      status: false,
      text: 'Shouldn`t be empty',
    };
  } else if (value.match(/[0-9]/g)) {
    return {
      status: false,
      text: 'Shouldn`t contain numbers',
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

export default isTextInputValid;
