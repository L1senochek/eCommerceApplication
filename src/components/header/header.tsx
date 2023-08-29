import React, { ChangeEvent, ReactElement, useContext, useState } from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';
import {
  ABOUT_PAGE,
  BASKET_PAGE,
  HOME_PAGE,
  MENU_PAGE,
  SIGN_IN_PAGE,
} from '../../utils/constants/paths';
import { SignInContext } from '../SignInContext/SignInContext';

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
  const context = useContext(SignInContext);
  context?.setSignIn(true);
  console.log('isSignIn', context);
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className={({ isActive }): string => `main-logo link ${isActive ? 'active' : ''}`}
                to={HOME_PAGE}
              >
                <span className="main-logo__img logo"></span> Logo
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={({ isActive }): string => `menu link ${isActive ? 'active' : ''}`}
                to={MENU_PAGE}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={({ isActive }): string => `about link ${isActive ? 'active' : ''}`}
                to={ABOUT_PAGE}
              >
                about
              </NavLink>
            </li>
            <li className="nav__item">
              <Search />
            </li>
            <li className="nav__item">
              <NavLink
                className={({ isActive }): string => `basket link ${isActive ? 'active' : ''}`}
                to={BASKET_PAGE}
              >
                basket
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={({ isActive }): string => `login link ${isActive ? 'active' : ''}`}
                to={SIGN_IN_PAGE}
              >
                Sign in
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
