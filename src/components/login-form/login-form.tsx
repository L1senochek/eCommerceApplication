import React, { ReactElement, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import './login-form.scss';
import { Link } from 'react-router-dom';

const UserEmail = ({ showError }: { showError: boolean }): ReactElement => {
  const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return "Email address can't be empty";
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
      {showError && emailError && <p className="error-message_email">{emailError}</p>}
    </>
  );
};

const Password = (): ReactElement => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const passwordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form__input input">
      <input
        type={showPassword ? 'text' : 'password'}
        className="login-form__input_form password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={passwordChange}
      />
      <button type="button" className="login-form__input_btn" onClick={passwordVisibility}></button>
    </div>
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
        <Link className="login-form__img logo" to="/"></Link>
        <h2 className="login-form__title">Sign in your account</h2>
        <label className="login-form__label" htmlFor="userEmail">
          Email
        </label>
        <UserEmail showError={showError} />
        <label className="login-form__label">Password</label>
        <Password />
        <div className="login-form__user-actions">
          <ForgotPasswordLink />
        </div>
        <button className="login-form__submit btn" type="submit">
          Login
        </button>
        <h4 className="login-form__link-to-register">
          Dont`n have an account? <RegistrationLink />
        </h4>
      </form>
    </div>
  );
};

export default LoginForm;
