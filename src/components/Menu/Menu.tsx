import Categories from '../Categories/Categories';
import ProductType from '../ProductType/ProductType';
import Products from '../Products/Products';
import './menu.scss';

const Menu = (): JSX.Element => {
  return (
    <div className="menu-bar">
      <div className="left-side-bar">
        <Categories />
        <ProductType />
      </div>
      <div className="right-side-bar">
        <Products />
      </div>
    </div>
  );
};

export default Menu;
