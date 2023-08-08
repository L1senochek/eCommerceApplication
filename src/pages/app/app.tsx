import React, { ReactElement } from 'react';
import LoginForm from '../../components/login-form/login-form';

const App = (): ReactElement => {
  return (
    <div className="wrapper">
      <header>Header</header>
      <main>
        <LoginForm />
        <h1>App</h1>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
