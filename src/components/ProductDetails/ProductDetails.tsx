import ProductDetailsProps from '../../model/components/ProductDetails/ProductDetails';

const ProductDetails = ({ item, onClose, productDetailsRef }: ProductDetailsProps): JSX.Element => {
  return (
    <>
      <div ref={productDetailsRef} className="product-details">
        <button onClick={onClose}>close</button>
        <h2>{item.name['en-US']} Details</h2>
      </div>
    </>
  );
};

export default ProductDetails;
