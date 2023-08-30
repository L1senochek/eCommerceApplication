import React, { useContext } from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import {
  ABOUT_PAGE,
  ACCOUNT_PAGE,
  BASKET_PAGE,
  HOME_PAGE,
  MENU_PAGE,
  SIGN_IN_PAGE,
} from '../../utils/constants/paths';
import { SignInContext } from '../SignInContext/SignInContext';
import Search from '../Search/Search';
import IconAccount from '../IconAccount/IconAccount';
import IconExit from '../IconExit/IconExit';
import IconBasket from '../IconBasket/IconBasket';

const HeaderComponent = (): JSX.Element => {
  const context = useContext(SignInContext);
  console.log('isSignIn', context?.isSignIn);
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
                <span className="main-logo__img logo"></span> Purrfect Sushi
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
              <Link className="basket" to={BASKET_PAGE}>
                <IconBasket />
              </Link>
            </li>
            {!context?.isSignIn ? (
              <li className="nav__item">
                <Link className="login link" to={SIGN_IN_PAGE}>
                  Sign in
                </Link>
              </li>
            ) : (
              <>
                <li className="nav__item">
                  <Link className="personal-account" to={ACCOUNT_PAGE}>
                    <IconAccount />
                  </Link>
                  <Link className="exit" to={HOME_PAGE}>
                    <IconExit />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
