import { useState, ChangeEvent, useEffect } from 'react';

interface UserEmailInputProps {
  showError: boolean;
  onEmailChange: (email: string) => void;
  value: string;
}

export const UserEmailInput = ({
  showError,
  onEmailChange,
  value,
}: UserEmailInputProps): JSX.Element => {
  // const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return "Can't be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Invalid email format';
    } else {
      return '';
    }
  };

  const userEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const valueEmail = event.target.value;
    console.log(valueEmail);
    onEmailChange(valueEmail);
    // setUserEmail(valueEmail);
    if (showError) {
      const error = validateEmail(valueEmail);
      setEmailError(error);
    }
  };

  useEffect(() => {
    if (showError) {
      // const error = validateEmail(value);
      setEmailError(validateEmail(value));
    }
    // onEmailChange(value);
  }, [showError, value]);

  return (
    <>
      <input
        type="text"
        className={`authentication-form__input input useremail ${
          showError && emailError ? 'input-error' : ''
        }`}
        placeholder="User@example.com"
        id="userEmail"
        value={value}
        onChange={userEmailChange}
      />
      {showError && emailError && (
        <p className="authentication-form__error-message error-message email">{emailError}</p>
      )}
    </>
  );
};

export default UserEmailInput;
