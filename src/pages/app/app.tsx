import React, { ReactElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';
import Header from '../../components/header/header';
import Main from '../main/main';
import RegistrationForm from '../../components/registration-form/registration-form';

const App = (): ReactElement => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/loginForm" element={<LoginForm />} />
            <Route path="/registrationForm" element={<RegistrationForm />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </main>
        <footer>footer</footer>
      </div>
    </Router>
  );
};

export default App;
