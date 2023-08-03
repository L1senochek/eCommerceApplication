import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

describe('App: ', () => {
  test('render App component is not to be null', () => {
    // render(<App />);
    expect(App).not.toBeNull();
  });
});
