import { ReactNode } from 'react';

export interface ISignInContextProps {
  isSignIn: boolean;
  setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISignInProvider {
  children: ReactNode;
}
