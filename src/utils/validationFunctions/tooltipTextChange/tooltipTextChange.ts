import IIsValidationFunction from '../../../model/utils/validationFunctions/isValidationFunction';

const changeTooltipText = (value: string, validationFunc: IIsValidationFunction): string => {
  const result = validationFunc(value);
  return !result.status ? `${result.text}` : '';
};

export default changeTooltipText;
