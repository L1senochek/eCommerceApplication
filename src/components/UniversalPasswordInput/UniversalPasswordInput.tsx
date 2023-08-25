import { useState, ChangeEvent } from 'react';
// import './PasswordInput.scss';
import isPasswordValid from '../../utils/isPasswordValid/isPasswordValid';
import LabelInput from '../LabelInput/LabelInput';

interface IPasswordInputProps {
  onChange: (value: string) => void;
  changeError: (error: boolean) => void;
  showError: boolean;
  value: string;
  placeholder: string;
  labelText: string;
  labelFor: string;
  isConfirmPassword?: boolean;
  isPasswordsMatch?: boolean;
}

const PasswordInput = ({
  onChange,
  changeError,
  showError,
  value,
  placeholder,
  labelText,
  labelFor,
  isConfirmPassword = false,
  isPasswordsMatch,
}: IPasswordInputProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const passwordValue = event.target.value;
    onChange(passwordValue);
    if (isPasswordValid(passwordValue).status) {
      showError = false;
      changeError(showError);
    } else {
      showError = true;
      changeError(showError);
    }
  };

  return (
    <>
      <LabelInput htmlFor={labelFor}>{labelText}</LabelInput>
      <div
        className={`authentication-form__input input ${
          (isPasswordsMatch || showError) && !isConfirmPassword ? 'input-error' : ''
        } ${isConfirmPassword ? 'confirm-password' : ''}`}
      >
        <input
          type={showPassword ? 'text' : 'password'}
          className="authentication-form__input_form password"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <button
          type="button"
          className="authentication-form__input_btn"
          onClick={(): void => setShowPassword(!showPassword)}
        ></button>
      </div>
      {showError && !isConfirmPassword && (
        <p className="authentication-form__error-message error-message password">
          {isPasswordValid(value).text}
        </p>
      )}
      {!isPasswordsMatch && isConfirmPassword && (
        <p className="authentication-form__error-message error-message confirm-password">
          Passwords don`t match
        </p>
      )}
    </>
  );
};

export default PasswordInput;
