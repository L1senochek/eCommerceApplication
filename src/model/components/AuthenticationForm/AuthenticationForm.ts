import { FormEvent, ReactNode } from 'react';

interface IAuthenticationFormProps {
  titleText: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export default IAuthenticationFormProps;
