import Account from '../../components/Account/Account';
import Footer from '../../components/Footer/FooterComponent';
import Header from '../../components/Header/HeaderComponent';

const AccountPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <Account />
      </main>
      <Footer />
    </>
  );
};

export default AccountPage;
