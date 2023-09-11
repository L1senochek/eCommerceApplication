import Categories from '../Categories/Categories';
import ProductType from '../ProductType/ProductType';
import Products from '../Products/Products';
import './menu.scss';
import AllProductsBtn from '../AllProductsBtn/AllProductsBtn';
import FilterPanel from '../FilterPanel/FilterPanel';
import { MenuProvider } from '../MenuContext/MenuContext';

const Menu = (): JSX.Element => {
  return (
    <MenuProvider>
      <div className="menu-bar">
        <div className="left-side-bar">
          <AllProductsBtn />
          <Categories />
          <ProductType />
        </div>
        <div className="right-side-bar">
          <FilterPanel />
          <Products />
        </div>
      </div>
    </MenuProvider>
  );
};

export default Menu;
