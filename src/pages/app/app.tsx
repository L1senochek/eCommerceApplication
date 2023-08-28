import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SigninPage from '../SigninPage/SigninPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/items">
        <Route path=":id" element={item} />
      </Route> */}
    </Routes>
  );
};

export default App;
