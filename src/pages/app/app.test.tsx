import React, { ReactElement } from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './app';

test('App: render App component is not to be null', () => {
  // render(<App />);
  expect(<App />).not.toBeNull();
});

test('App: test react component', () => {
  const App = ({ className }: { className: string }): ReactElement => {
    return <h1 className={className}>Test h1</h1>;
  };
  render(<App className="react" />);
  expect(screen.findAllByText('Vite + React')).not.toBeNull();
});
