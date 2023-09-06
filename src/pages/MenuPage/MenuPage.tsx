import Footer from '../../components/Footer/FooterComponent';
import Header from '../../components/Header/HeaderComponent';
import Menu from '../../components/Menu/Menu';
import { SearchResultsProvider } from '../../components/SearchResContext/SearchResContext';

const MenuPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <SearchResultsProvider>
          <Menu />
        </SearchResultsProvider>
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
