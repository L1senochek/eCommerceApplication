import { useState } from 'react';
import Categories from '../Categories/Categories';
import ProductType from '../ProductType/ProductType';
import Products from '../Products/Products';
import './menu.scss';
import AllProductsBtn from '../AllProductsBtn/AllProductsBtn';
import FilterPanel from '../FilterPanel/FilterPanel';

const Menu = (): JSX.Element => {
  const [productTypeId, setProductTypeId] = useState('');

  const handleProductClick = (selectedProductTypeId: string): void => {
    setProductTypeId(selectedProductTypeId);
  };

  return (
    <div className="menu-bar">
      <div className="left-side-bar">
        <AllProductsBtn onProductClick={handleProductClick} />
        <Categories />
        <ProductType onProductClick={handleProductClick} />
      </div>
      <div className="right-side-bar">
        <FilterPanel />
        <Products productTypeId={productTypeId} />
      </div>
    </div>
  );
};

export default Menu;
