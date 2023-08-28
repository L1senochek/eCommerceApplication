import { useState, FormEvent, useEffect } from 'react';
import LinkTo from '../LinkTo/LinkTo';
import ForgotPasswordLink from '../ForgotPasswordLink/ForgotPasswordLink';
import Button from '../Button/Button';
import LinkToWithTextInWrapper from '../LinkToWithTextInWrapper/LinkToWithTextInWrapper';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import './loginForm.scss';
import UniversalInputWithError from '../UniversalInputWithError/UniversalInputWithError';
import isEmailValid from '../../utils/validationFunctions/isEmailValid/isEmailValid';
import isPasswordValid from '../../utils/validationFunctions/isPasswordValid/isPasswordValid';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { loginUserWithPassApi } from '../../api/loginUserWithPass';
import { useNavigate } from 'react-router-dom';
import { FAILED_TO_LOGGED_IN } from '../../utils/constants/constants';

const LoginForm = (): JSX.Element => {
  const [showErrors, setShowErrors] = useState(false);
  const [showErrorSignIn, setShowErrorSignIn] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);

  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setShowErrors(true);
    if (!showErrorEmail && !showErrorPassword && userEmail && password) {
      const responseLoginUser = await loginUserWithPassApi(userEmail, password);
      console.log('Response LoginUser:', responseLoginUser);
      if (responseLoginUser) {
        setShowErrorSignIn(false);
        navigation('/');
        // <Navigate to="/" />;
      } else {
        setShowErrorSignIn(true);
      }
    }
  };

  useEffect(() => {
    if (!showErrors && !showErrorEmail && !showErrorPassword && !userEmail && !password) {
      setShowErrorEmail(true);
      setShowErrorPassword(true);
    }
  }, [password, showErrors, showErrorEmail, showErrorPassword, userEmail]);

  return (
    <AuthenticationForm onSubmit={handleSubmit} titleText="Sign in your account">
      <UniversalInputWithError
        onChange={setEmail}
        changeError={setShowErrorEmail}
        showError={showErrorEmail}
        value={userEmail}
        validationFunction={isEmailValid}
        placeholder="User@example.com"
        labelText="Email"
        labelFor="userEmail"
        type="text"
        classNameInput="authentication-form__input input useremail"
      />
      <UniversalInputWithError
        onChange={setPassword}
        changeError={setShowErrorPassword}
        showError={showErrorPassword}
        value={password}
        validationFunction={isPasswordValid}
        placeholder="Password"
        labelText="Password"
        labelFor="password"
        type="password"
        isPassword={true}
        classNameWrapperPass="authentication-form__input input"
        classNameInputPass="authentication-form__input_form password"
        classNameBtnPass="authentication-form__input_btn"
      />
      <ForgotPasswordLink />
      <Button type="submit" text="Sign in" className="authentication-form__submit btn" />
      {showErrorSignIn && (
        <ErrorMessage conditionError={showErrorSignIn} valueTag={FAILED_TO_LOGGED_IN} />
      )}
      <LinkToWithTextInWrapper text="Dont`n have an account? ">
        <LinkTo to={'/registrationForm'} text={'Register here'} />
      </LinkToWithTextInWrapper>
    </AuthenticationForm>
  );
};

export default LoginForm;
