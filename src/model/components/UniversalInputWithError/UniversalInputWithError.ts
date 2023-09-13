// import { Customer } from '@commercetools/platform-sdk';
import IIsValidationFunction from '../../utils/validationFunctions/isValidationFunction';

interface IUniversalInputWithErrorProps {
  value: string | undefined;
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
  classNameError?: string;
  isPassword?: boolean;
  isConfirmPassword?: boolean;
  isPasswordsMatch?: boolean;
  disabled?: boolean;
  // isEditing?: boolean;
  // fieldName?: string;
  // userProfile?: Customer | null;
  // setUserProfile?: (value: React.SetStateAction<Customer | null>) => void;
}

export default IUniversalInputWithErrorProps;
