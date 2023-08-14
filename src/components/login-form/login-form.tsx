import React, { ReactElement, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import './login-form.scss';
import { Link } from 'react-router-dom';

export const UserEmail = ({ showError }: { showError: boolean }): ReactElement => {
  const [userEmail, setUserEmail] = useState('');
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
    setUserEmail(valueEmail);
    if (showError) {
      const error = validateEmail(valueEmail);
      setEmailError(error);
    }
  };

  useEffect(() => {
    if (showError) {
      const error = validateEmail(userEmail);
      setEmailError(error);
    }
  }, [showError, userEmail]);

  return (
    <>
      <input
        type="text"
        className="login-form__input input useremail"
        placeholder="User@example.com"
        id="userEmail"
        value={userEmail}
        onChange={userEmailChange}
      />
      {showError && emailError && (
        <p className="login-form__error-message error-message email">{emailError}</p>
      )}
    </>
  );
};

export const Password = ({ showError }: { showError: boolean }): ReactElement => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

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
    setPassword(valuePassword);

    if (showError && showPassword) {
      const error = validatePassword(valuePassword);
      setPasswordError(error);
    }
  };

  const passwordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (showError) {
      const error = validatePassword(password);
      setPasswordError(error);
    }
  }, [showError, showPassword, password]);

  return (
    <>
      <div className="login-form__input input">
        <input
          type={showPassword ? 'text' : 'password'}
          className="login-form__input_form password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={passwordChange}
        />
        <button
          type="button"
          className="login-form__input_btn"
          onClick={passwordVisibility}
        ></button>
      </div>
      {showError && passwordError && (
        <p className="login-form__error-message error-message password">{passwordError}</p>
      )}
    </>
  );
};

const RegistrationLink = (): ReactElement => (
  <Link className="link" to="/registrationForm">
    Register here
  </Link>
);

const ForgotPasswordLink = (): ReactElement => (
  <Link className="password-reset link" to="/passwordReset">
    Forgot your passord?
  </Link>
);

const SubmitBtn = (): ReactElement => (
  <button className="login-form__submit btn" type="submit">
    Sign in
  </button>
);

const LoginForm = (): ReactElement => {
  const [showError, setShowError] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
    setShowError(true);
  };

  return (
    <div className="login-form">
      <form className="login-form__wrapper" onSubmit={submit}>
        <Link className="login-form__logo logo" to="/"></Link>
        <h2 className="login-form__title">Sign in your account</h2>
        <label className="login-form__label" htmlFor="userEmail">
          Email
        </label>
        <UserEmail showError={showError} />
        <label className="login-form__label">Password</label>
        <Password showError={showError} />
        <div className="login-form__user-actions">
          <ForgotPasswordLink />
        </div>
        <SubmitBtn />
        <h4 className="login-form__link-to-register">
          Dont`n have an account? <RegistrationLink />
        </h4>
      </form>
    </div>
  );
};

export default LoginForm;
