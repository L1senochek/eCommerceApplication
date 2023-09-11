import { createContext, useState } from 'react';
import {
  ISignInContextProps,
  ISignInProvider,
} from '../../model/components/SignInContext/SignInContext';

export const SignInContext = createContext<ISignInContextProps | undefined>(undefined);

export const SignInProvider = ({ children }: ISignInProvider): JSX.Element => {
  // const [isSignIn, setSignIn] = useState(false);
  const [isSignIn, setSignIn] = useState(() => {
    return localStorage.getItem('accessToken') ? true : false;
  });

  return (
    <SignInContext.Provider value={{ isSignIn, setSignIn }}>{children}</SignInContext.Provider>
  );
};
