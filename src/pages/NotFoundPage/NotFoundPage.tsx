import React from 'react';
import Footer from '../../components/Footer/Footer';
import NotFound from '../../components/NotFound/NotFound';
import Header from '../../components/Header/HeaderComponent';

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <NotFound />
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
