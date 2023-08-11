import React, { ReactElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';
import Header from '../../components/header/header';
import Main from '../main/main';
import RegistrationForm from '../../components/registration-form/registration-form';
import Footer from '../../components/footer/footer';

const App = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route
          path="/loginForm"
          element={
            <div className="wrapper">
              <LoginForm />
              <Footer />
            </div>
          }
        />
        <Route
          path="/registrationForm"
          element={
            <div className="wrapper">
              <RegistrationForm />
              <Footer />
            </div>
          }
        />
        <Route
          path="/main"
          element={
            <div className="wrapper">
              <Header />
              <Main />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
