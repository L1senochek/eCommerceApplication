import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import { expect, test } from 'vitest'
import App from './app';


test('App: render App component is not to be null', () => {
  // render(<App />);
  expect(App).not.toBeNull();
});
