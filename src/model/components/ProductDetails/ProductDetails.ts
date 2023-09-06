import { ProductProjection } from '@commercetools/platform-sdk';

interface ProductDetailsProps {
  item: ProductProjection;
  onClose: () => void;
  productDetailsRef: React.RefObject<HTMLDivElement>;
}

export default ProductDetailsProps;
