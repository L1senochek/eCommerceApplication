import React from 'react';
import { FormEvent, ReactNode } from 'react';
import LinkTo from '../LinkTo/LinkTo';

interface AuthenticationFormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  titleText: string;
}

const AuthenticationForm = ({
  children,
  onSubmit,
  titleText,
}: AuthenticationFormProps): JSX.Element => {
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
