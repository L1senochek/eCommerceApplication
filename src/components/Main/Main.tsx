import React from 'react';
import './main.scss';
// import TestApi from './testApi';

const Main = (): JSX.Element => {
  return (
    <main className="main">
      <div className="container-slider">
        <div className="container-slider__logo">
          <div className="container-slider__logo_img"></div>
        </div>
        <div className="container-slider__first-img"></div>
      </div>
    </main>
  );
};

export default Main;
