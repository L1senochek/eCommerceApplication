import React, { ReactElement } from 'react';
import IconGithub from '../IconGithub/IconGithub';
import './footer.scss';
import { Link } from 'react-router-dom';
import { GITHUB_PAGE } from '../../utils/constants/paths';

const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item year">2023</li>
        <li className="footer__item github">
          <Link to={GITHUB_PAGE} target="_blank">
            <IconGithub />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
