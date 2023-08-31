import React from 'react';
import Footer from '../../components/Footer/FooterComponent';
import LoginForm from '../../components/LoginForm/LoginForm';

const SigninPage = (): JSX.Element => {
  return (
    <>
      <main className="main">
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default SigninPage;
