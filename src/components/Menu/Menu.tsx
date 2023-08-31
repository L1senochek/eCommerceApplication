import Categories from '../Categories/Categories';
import ProductType from '../ProductType/ProductType';
import './menu.scss';

const Menu = (): JSX.Element => {
  return (
    <div className="menu">
      <Categories />
      <ProductType />
      {/* <Products /> */}
    </div>
  );
};

export default Menu;
