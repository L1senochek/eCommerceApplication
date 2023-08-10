import React, { ReactElement } from 'react';
import TestApi from './testApi';

const Main = (): ReactElement => {
  return (
    <div>
      <h1>App</h1>
      <TestApi />
    </div>
  );
};

export default Main;
