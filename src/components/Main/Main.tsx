import React from 'react';
import './main.scss';
import { Link } from 'react-router-dom';
import { MENU_PAGE } from '../../utils/constants/paths';
// import TestApi from './testApi';

const Main = (): JSX.Element => {
  return (
    <main className="main">
      <div className="container-slider">
        <div className="container-slider__logo">
          <div className="container-slider__logo_img"></div>
        </div>
        <button className="container-slider__btn btn">
          <Link to={MENU_PAGE} className="container-slider__link link">
            Order now
          </Link>
        </button>
        <div className="container-slider__first-img"></div>
      </div>
    </main>
  );
};

export default Main;
