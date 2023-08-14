import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const UserEmailRegister = (): ReactElement => <></>;

const PasswordRegister = (): ReactElement => <></>;

const ConfirmPasswordRegister = (): ReactElement => <></>;

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
  return (
    <div className="registration-form">
      <form className="registration-form__wrapper">
        <Link className="registration-form__logo logo" to="/"></Link>
        <h2 className="registration-form__title">Create a new account</h2>
        <label className="registration-form__label" htmlFor="userEmailRegister">
          Email
        </label>
        <UserEmailRegister />
        <label className="registration-form__label">Password</label>
        <PasswordRegister />
        <label className="registration-form__label">Confirm Password</label>
        <ConfirmPasswordRegister />
        <div className="registration-form__user-actions">
          <ForgotPasswordLink />
        </div>
        <SubmitBtnRegister />
      </form>
    </div>
  );
};

export default RegistrationForm;
