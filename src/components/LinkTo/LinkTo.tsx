import React from 'react';
import { Link } from 'react-router-dom';
import ILinkToProps from '../../model/components/LinkTo/LinkTo';

const LinkTo = ({ to, text, additionalClass }: ILinkToProps): JSX.Element => (
  <Link className={`${additionalClass} link`} to={to}>
    {text}
  </Link>
);

export default LinkTo;
