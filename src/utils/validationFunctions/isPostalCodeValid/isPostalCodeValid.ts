import IIsValidationFunction from '../../../model/utils/validationFunctions/isValidationFunction';

const isPostalCodeValid: IIsValidationFunction = (code: string) => {
  const usaValid = /^\d{5}(?:-\d{4})?$/;
  const canadaValid = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/;

  if (usaValid.test(code) || canadaValid.test(code)) {
    return {
      status: true,
      text: '',
    };
  } else {
    return {
      status: false,
      text: 'Should contain valid postal code',
    };
  }
};

export default isPostalCodeValid;
