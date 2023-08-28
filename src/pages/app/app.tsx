import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../main/main';
import Footer from '../../components/footer/footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Header from '../../components/Header/Header';
import NotFound from '../../components/NotFound/NotFound';

const App = (): ReactElement => {
  return (
    <Routes>
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
        path="*"
        element={
          <>
            <Header />
            <NotFound />
            <Footer />
          </>
        }
      />
      {/* <Route path="/items">
        <Route path=":id" element={item} />
      </Route> */}
    </Routes>
  );
};

export default App;
