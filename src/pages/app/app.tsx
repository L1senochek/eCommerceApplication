import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SigninPage from '../SigninPage/SigninPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import {
  HOME_PAGE,
  NOT_FOUND_PAGE,
  REGISTRATION_PAGE,
  SIGN_IN_PAGE,
} from '../../utils/constants/paths';
import { SignInProvider } from '../../components/SignInContext/SignInContext';

const App = (): ReactElement => {
  return (
    <SignInProvider>
      <Routes>
        <Route path={HOME_PAGE} element={<MainPage />} />
        <Route path={SIGN_IN_PAGE} element={<SigninPage />} />
        <Route path={REGISTRATION_PAGE} element={<RegistrationPage />} />
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
        {/* <Route path="/items">
        <Route path=":id" element={item} />
      </Route> */}
      </Routes>
    </SignInProvider>
  );
};

export default App;
