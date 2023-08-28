import React, { ChangeEvent, ReactElement, useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import {
  ABOUT_PAGE,
  BASKET_PAGE,
  HOME_PAGE,
  MENU_PAGE,
  SIGN_IN_PAGE,
} from '../../utils/constants/paths';

const Search = (): ReactElement => {
  const [search, setSearch] = useState('');

  const searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="search input">
      <button className="search__loupe"></button>
      <input
        type="search"
        className="search__input"
        placeholder="Search..."
        id="search"
        value={search}
        onChange={searchChange}
      />
    </div>
  );
};

const Header = (): ReactElement => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="main-logo link" to={HOME_PAGE}>
                <span className="main-logo__img logo"></span>logo
              </Link>
            </li>
            <li className="nav__item">
              <Link className="menu link" to={MENU_PAGE}>
                Menu
              </Link>
            </li>
            <li className="nav__item">
              <Link className="about link" to={ABOUT_PAGE}>
                about
              </Link>
            </li>
            <li className="nav__item">
              <Search />
            </li>
            <li className="nav__item">
              <Link className="basket link" to={BASKET_PAGE}>
                basket
              </Link>
            </li>
            <li className="nav__item">
              <Link className="login link" to={SIGN_IN_PAGE}>
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
