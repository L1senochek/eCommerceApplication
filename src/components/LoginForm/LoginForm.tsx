import { useState, FormEvent } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import UserEmailInput from '../UserEmailInput/UserEmailInput';
import LinkTo from '../LinkTo/LinkTo';
import ForgotPasswordLink from '../ForgotPasswordLink/ForgotPasswordLink';
import Button from '../Button/Button';
import LinkToWithTextInWrapper from '../LinkToWithTextInWrapper/LinkToWithTextInWrapper';
import PasswordInput from '../PasswordInput/PasswordInput';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import './LoginForm.scss';

const LoginForm = (): JSX.Element => {
  const [showError, setShowError] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
    setShowError(true);
  };

  return (
    <AuthenticationForm onSubmit={submit} titleText="Sign in your account">
      <LabelInput htmlFor="userEmail">Email</LabelInput>
      <UserEmailInput showError={showError} />
      <LabelInput htmlFor="password">Password</LabelInput>
      <PasswordInput placeholder="Password" showError={showError} />
      <ForgotPasswordLink />
      <Button type="submit" text="Sign in" className="authentication-form__submit btn" />
      <LinkToWithTextInWrapper text="Dont`n have an account? ">
        <LinkTo to={'/registrationForm'} text={'Register here'} />
      </LinkToWithTextInWrapper>
    </AuthenticationForm>
  );
};

export default LoginForm;
