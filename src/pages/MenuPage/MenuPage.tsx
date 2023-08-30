import { getAllCategoriesApi } from '../../api/getAllCategories';
import Footer from '../../components/Footer/FooterComponent';
import Header from '../../components/Header/HeaderComponent';

const MenuPage = (): JSX.Element => {
  const res = async (): Promise<void> => {
    const responseArr = await getAllCategoriesApi();
    console.log(responseArr);
  };

  res();
  return (
    <>
      <Header />
      <main className="main">{/* <Menu /> */}</main>
      <Footer />
    </>
  );
};

export default MenuPage;
