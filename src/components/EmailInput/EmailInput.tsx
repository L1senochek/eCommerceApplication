import { ChangeEvent } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import isEmailValid from '../../utils/validationFunctions/isEmailValid/isEmailValid';

interface IEmailInputProps {
  onChange: (email: string) => void;
  changeError: (error: boolean) => void;
  showError: boolean;
  value: string;
}

export const EmailInput = ({
  onChange,
  changeError,
  showError,
  value,
}: IEmailInputProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const emailValue = event.target.value;
    onChange(emailValue);

    if (isEmailValid(emailValue).status) {
      showError = false;
      changeError(showError);
    } else {
      showError = true;
      changeError(showError);
    }
  };

  return (
    <>
      <LabelInput htmlFor="userEmail">Email</LabelInput>
      <input
        id="userEmail"
        type="text"
        placeholder="User@example.com"
        className={`authentication-form__input input useremail ${showError ? 'input-error' : ''}`}
        onChange={handleChange}
        value={value}
      />
      {showError && (
        <p className="authentication-form__error-message error-message email">
          {isEmailValid(value).text}
        </p>
      )}
    </>
  );
};

export default EmailInput;
