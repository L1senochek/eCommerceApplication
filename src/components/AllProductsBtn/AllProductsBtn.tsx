import AllProductsBtnProps from '../../model/components/AllProductsBtn/AllProductsBtn';
import './all-products-btn.scss';

const AllProductsBtn = ({ onProductClick }: AllProductsBtnProps): JSX.Element => {
  const handleAllProductClick = (itemId: string): void => {
    onProductClick(itemId);
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
