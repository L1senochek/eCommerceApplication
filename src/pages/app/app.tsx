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
            <>
              <main className="main">
                <LoginForm />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/registrationForm"
          element={
            <>
              <main className="main">
                <RegistrationForm />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/main"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
