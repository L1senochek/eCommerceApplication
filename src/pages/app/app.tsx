import React, { ReactElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../main/main';
import Footer from '../../components/footer/footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

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
          path="/"
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
