import React from 'react';
import Footer from '../../components/Footer/FooterComponent';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = (): JSX.Element => {
  return (
    <>
      <main className="main">
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
};

export default RegistrationPage;
