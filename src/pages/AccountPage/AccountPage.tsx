import Account from '../../components/Account/Account';
import { AccountProvider } from '../../components/AccountContext/AccountContext';
import Footer from '../../components/Footer/FooterComponent';
import Header from '../../components/Header/HeaderComponent';

const AccountPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <AccountProvider>
          <Account />
        </AccountProvider>
      </main>
      <Footer />
    </>
  );
};

export default AccountPage;
