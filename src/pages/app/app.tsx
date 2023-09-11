import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SigninPage from '../SigninPage/SigninPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import {
  ACCOUNT_PAGE,
  HOME_PAGE,
  MENU_PAGE,
  NOT_FOUND_PAGE,
  REGISTRATION_PAGE,
  SIGN_IN_PAGE,
} from '../../utils/constants/paths';
import { SignInProvider } from '../../components/SignInContext/SignInContext';
import MenuPage from '../MenuPage/MenuPage';
import AccountPage from '../AccountPage/AccountPage';

const App = (): ReactElement => {
  return (
    <SignInProvider>
      <Routes>
        <Route path={HOME_PAGE} element={<MainPage />} />
        <Route path={SIGN_IN_PAGE} element={<SigninPage />} />
        <Route path={REGISTRATION_PAGE} element={<RegistrationPage />} />
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
        <Route path={MENU_PAGE} element={<MenuPage />} />
        <Route path={ACCOUNT_PAGE} element={<AccountPage />} />
        {/* <Route path="/items">
        <Route path=":id" element={item} />
      </Route> */}
      </Routes>
    </SignInProvider>
  );
};

export default App;
