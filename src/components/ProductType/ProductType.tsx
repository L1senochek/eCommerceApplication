import { getAllProductType } from '../../api/getAllProductType';
import './productType.scss';

const ProductType = (): JSX.Element => {
  getAllProductType();
  return (
    <>
      <div>type</div>
    </>
  );
};

export default ProductType;
