import { ProductProjection } from '@commercetools/platform-sdk';

interface ProductDetailsProps {
  item: ProductProjection;
  onClose: () => void;
}

const ProductDetails = ({ item, onClose }: ProductDetailsProps): JSX.Element => {
  return (
    <>
      <div className="product-details">
        <button onClick={onClose}>close</button>
        <h2>{item.name['en-US']} Details</h2>
      </div>
    </>
  );
};

export default ProductDetails;
