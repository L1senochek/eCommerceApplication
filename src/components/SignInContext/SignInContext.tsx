import { ReactNode, createContext, useState } from 'react';

interface ISignInContextProps {
  isSignIn: boolean;
  setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ISignInProvider {
  children: ReactNode;
}

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
