import { useState, ChangeEvent, useEffect } from 'react';
import './PasswordInput.scss';

interface PasswordInputProps {
  placeholder: string;
  showError: boolean;
  confirmPassword?: boolean;
}

const PasswordInput = ({
  placeholder,
  showError,
  confirmPassword = false,
}: PasswordInputProps): JSX.Element => {
  const [password, setPasswordInState] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validatePassword = (password: string): string => {
    if (!password.trim()) {
      return "Shouldn't be empty";
    } else if (password.length < 8) {
      return 'Should be at least 8 characters long';
    } else if (!/[A-Z]/.test(password)) {
      return 'Should contain at least one capital letter';
    } else if (!/[a-z]/.test(password)) {
      return 'Should contain at least one lowercase letter';
    } else if (!/[0-9]/.test(password)) {
      return 'Should contain at least one digit';
    } else {
      return '';
    }
  };

  const passwordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const valuePassword = event.target.value;
    setPasswordInState(valuePassword);
    console.log(valuePassword);

    if (showError && showPassword) {
      const error = validatePassword(valuePassword);
      setPasswordError(error);
    }

    if (confirmPassword) {
      const confirmPasswordError = password !== valuePassword ? "Passwords don't match" : '';
      setConfirmPasswordError(confirmPasswordError);
    }
  };

  useEffect(() => {
    if (showError) {
      const error = validatePassword(password);
      setPasswordError(error);
    }
  }, [showError, password]);

  const passwordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="authentication-form__input input">
        <input
          type={showPassword ? 'text' : 'password'}
          className="authentication-form__input_form password"
          placeholder={placeholder}
          value={password}
          onChange={passwordChange}
        />
        <button
          type="button"
          className="authentication-form__input_btn"
          onClick={passwordVisibility}
        ></button>
      </div>
      {showError && passwordError && <p className="error-message password">{passwordError}</p>}
      {showError && confirmPasswordError && (
        <p className="error-message password">{confirmPasswordError}</p>
      )}
    </>
  );
};

export default PasswordInput;
