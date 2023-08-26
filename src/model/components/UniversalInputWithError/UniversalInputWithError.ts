import IIsValidationFunction from '../../utils/validationFunctions/isValidationFunction';

interface IUniversalInputWithErrorProps {
  value: string;
  onChange: (value: string) => void;
  showError: boolean;
  changeError: (error: boolean) => void;
  validationFunction: IIsValidationFunction;
  labelText: string;
  labelFor: string;
  type: string;
  placeholder?: string;
  classNameLabel?: string;
  classNameInput?: string;
  classNameWrapperPass?: string;
  classNameInputPass?: string;
  classNameBtnPass?: string;
  isPassword?: boolean;
  isConfirmPassword?: boolean;
  isPasswordsMatch?: boolean;
}

export default IUniversalInputWithErrorProps;
