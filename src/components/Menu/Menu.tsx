import Categories from '../Categories/Categories';
import ProductType from '../ProductType/ProductType';
import './menu.scss';

const Menu = (): JSX.Element => {
  return (
    <div className="menu">
      <div className="left-side-bar">
        <Categories />
        <ProductType />
      </div>
      <div className="right-side-bar">items</div>
      {/* <Products /> */}
    </div>
  );
};

export default Menu;
