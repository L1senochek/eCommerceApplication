import { ButtonHTMLAttributes } from 'react';

interface IUniversalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  additionalClass?: string;
}

export default IUniversalButtonProps;
