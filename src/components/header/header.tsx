import React, { ChangeEvent, ReactElement, useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

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
              <Link className="main-logo link" to="/">
                <span className="main-logo__img logo"></span>logo
              </Link>
            </li>
            <li className="nav__item">
              <Link className="menu link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav__item">
              <Link className="about link" to="/about">
                about
              </Link>
            </li>
            <li className="nav__item">
              <Search />
            </li>
            <li className="nav__item">
              <Link className="basket link" to="/basket">
                basket
              </Link>
            </li>
            <li className="nav__item">
              <Link className="login link" to="/loginForm">
                Sign in
              </Link>
            </li>
          </ul>
          {/* <Link className="main-logo link" to="/">
            <span className="main-logo__img logo"></span>logo
          </Link> */}
          {/* <Link className="menu link" to="/menu">
            Menu
          </Link> */}
          {/* <Link className="about link" to="/about">
            about
          </Link> */}
          {/* <Search /> */}
          {/* <Link className="basket link" to="/basket">
            basket
          </Link> */}
          {/* <Link className="login link" to="/loginForm">
            Sign in
          </Link> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
