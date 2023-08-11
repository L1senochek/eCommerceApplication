import React, { ReactElement } from 'react';
import TestApi from './testApi';

const Main = (): ReactElement => {
  return (
    <main className="main">
      <h1>App</h1>
      <TestApi />
    </main>
  );
};

export default Main;
