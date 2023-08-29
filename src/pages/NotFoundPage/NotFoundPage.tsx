import React from 'react';
import Footer from '../../components/Footer/Footer';
import NotFound from '../../components/NotFound/NotFound';
import Header from '../../components/Header/HeaderComponent';

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <NotFound />
      <Footer />
    </>
  );
};

export default NotFoundPage;
