import React, { ReactElement } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = (): ReactElement => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/main">
            <div className="logo__img"></div>
            <div className="logo__title">fdfdsf</div>
          </Link>
        </div>
        Header
        <ul>
          <li>Menu</li>
          <li>About</li>
        </ul>
        <input type="search" />
        <button className="login btn">
          <Link to="/loginForm">login</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
