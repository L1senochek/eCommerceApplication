import { FormEvent, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { Password, UserEmail } from '../login-form/login-form';

// const UserEmailRegister = (): ReactElement => <></>;

// const PasswordRegister = (): ReactElement => <></>;

// const ConfirmPasswordRegister = (): ReactElement => <></>;

const ForgotPasswordLink = (): ReactElement => (
  <Link className="relocation-login-form link" to="/loginForm">
    Already have an account?
  </Link>
);

const SubmitBtnRegister = (): ReactElement => (
  <button className="login-form__submit btn" type="submit">
    Sign up
  </button>
);

const RegistrationForm = (): ReactElement => {
  const [showError, setShowError] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
    setShowError(true);
  };

  return (
    <div className="registration-form">
      <form className="registration-form__wrapper" onSubmit={submit}>
        <Link className="registration-form__logo logo" to="/"></Link>
        <h2 className="registration-form__title">Create a new account</h2>
        <label className="registration-form__label" htmlFor="userEmailRegister">
          Email
        </label>
        <UserEmail showError={showError} />
        <label className="registration-form__label">Password</label>
        <Password showError={showError} />
        <label className="registration-form__label">Confirm Password</label>
        <Password showError={showError} />
        <div className="registration-form__user-actions">
          <ForgotPasswordLink />
        </div>
        <SubmitBtnRegister />
      </form>
    </div>
  );
};

export default RegistrationForm;
