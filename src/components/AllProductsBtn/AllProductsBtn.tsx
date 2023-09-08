import { useContext } from 'react';
import { MenuContext } from '../MenuContext/MenuContext';
import './all-products-btn.scss';

const AllProductsBtn = (): JSX.Element => {
  const context = useContext(MenuContext);

  const handleAllProductClick = (itemId: string): void => {
    context?.setFilterResults([]);
    context?.setProductTypeId(itemId);
  };
  return (
    <>
      <div className="all-products-btn">
        <div className="all-products-btn__item" onClick={(): void => handleAllProductClick('')}>
          <span className="all-products-btn__title">All products</span>
          <span className="all-products-btn__line"></span>
        </div>
      </div>
    </>
  );
};

export default AllProductsBtn;
