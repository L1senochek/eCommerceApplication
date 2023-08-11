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
    <header className="header">
      <nav className="nav">
        <Link className="main-logo link" to="/main">
          <span className="main-logo__img logo"></span>
          <span className="main-logo__title">logo</span>
        </Link>
        <Link className="menu link" to="/menu">
          Menu
        </Link>
        <Link className="about link" to="/about">
          about
        </Link>
        <Search />
        <Link className="basket link" to="/basket">
          basket
        </Link>
        <Link className="login link" to="/loginForm">
          Sign in
        </Link>
      </nav>
    </header>
  );
};

export default Header;
