import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface UniversalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  additionalClass?: string;
}

const UniversalButton = ({
  text,
  additionalClass,
  ...props
}: UniversalButtonProps): JSX.Element => {
  return (
    <button className={`btn ${additionalClass}`} {...props}>
      {text}
    </button>
  );
};

export default UniversalButton;
