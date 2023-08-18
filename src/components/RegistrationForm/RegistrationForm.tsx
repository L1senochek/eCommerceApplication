import { useState, FormEvent } from 'react';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import LabelInput from '../LabelInput/LabelInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import UserEmailInput from '../UserEmailInput/UserEmailInput';
import Button from '../Button/Button';
import LinkTo from '../LinkTo/LinkTo';
import LinkToWithTextInWrapper from '../LinkToWithTextInWrapper/LinkToWithTextInWrapper';
import './RegistrationForm.scss';

const RegistrationForm = (): JSX.Element => {
  const [showError, setShowError] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
    setShowError(true);
  };

  return (
    <AuthenticationForm onSubmit={submit} titleText="Create a new account">
      <LabelInput htmlFor="userEmail">Email</LabelInput>
      <UserEmailInput showError={showError} />
      <LabelInput htmlFor="password">Password</LabelInput>
      <PasswordInput placeholder="Password" showError={showError} />
      <LabelInput htmlFor="confirmPassword">Confirm Password</LabelInput>
      <PasswordInput placeholder="Password" showError={showError} confirmPassword={true} />
      <Button type="submit" text="Sign in" className="authentication-form__submit btn" />
      <LinkToWithTextInWrapper text="Already have an account? ">
        <LinkTo to={'/loginForm'} text={'Login here'} />
      </LinkToWithTextInWrapper>
    </AuthenticationForm>
  );
};

export default RegistrationForm;
