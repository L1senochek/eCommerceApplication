import React from 'react';
import { FormEvent, ReactNode } from 'react';
// import { Link } from 'react-router-dom';
import LinkTo from '../LinkTo/LinkTo';

interface AuthenticationFormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  // titleClassName: string;
  titleText: string;
}
// form
const AuthenticationForm = ({
  children,
  onSubmit,
  // titleClassName,
  titleText,
}: AuthenticationFormProps): JSX.Element => {
  // const clonedChildren = React.Children.map(children, (child) => {
  //   if (React.isValidElement(child)) {
  //     return cloneElement(child);
  //   }
  //   return child;
  // });

  return (
    <div className="authentication-form">
      <form className="authentication-form__wrapper" onSubmit={onSubmit}>
        {/* <Link className="registration-form__logo logo" to="/"></Link> */}
        <LinkTo to="/" text="" additionalClass={'authentication-form__logo logo'} />
        <h2 className="authentication-form__title">{titleText}</h2>
        {/* {clonedChildren} */}
        {children}
      </form>
    </div>
  );
};

export default AuthenticationForm;
