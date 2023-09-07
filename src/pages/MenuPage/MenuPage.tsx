import Footer from '../../components/Footer/FooterComponent';
import Header from '../../components/Header/HeaderComponent';
import Menu from '../../components/Menu/Menu';

const MenuPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <Menu />
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
