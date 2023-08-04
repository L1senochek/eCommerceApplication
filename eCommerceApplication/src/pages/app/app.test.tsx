import  React, { ReactElement } from 'react';
import { expect, test } from 'vitest'
import App from './app';


test('App: render App component is not to be null', () => {
  // render(<App />);
  expect(<App />).not.toBeNull();
});
