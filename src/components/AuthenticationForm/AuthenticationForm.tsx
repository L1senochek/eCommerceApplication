import React from 'react';
import LinkTo from '../LinkTo/LinkTo';
import IAuthenticationFormProps from '../../model/components/AuthenticationForm/AuthenticationForm';

const AuthenticationForm = ({
  titleText,
  onSubmit,
  children,
}: IAuthenticationFormProps): JSX.Element => {
  return (
    <div className="authentication-form">
      <form className="authentication-form__wrapper" onSubmit={onSubmit}>
        <LinkTo to="/" text="" additionalClass={'authentication-form__logo logo'} />
        <h2 className="authentication-form__title">{titleText}</h2>
        {children}
      </form>
    </div>
  );
};

export default AuthenticationForm;
