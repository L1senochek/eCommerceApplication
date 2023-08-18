import React from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
  to: string;
  text: string;
  additionalClass?: string;
}

const LinkTo = ({ to, text, additionalClass }: LinkProps): JSX.Element => (
  <Link className={`${additionalClass} link`} to={to}>
    {text}
  </Link>
);

export default LinkTo;
