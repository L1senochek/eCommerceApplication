import { getAllProducts } from '../../api/getAllProducts';
import './products.scss';

const Products = (): JSX.Element => {
  getAllProducts();
  return (
    <>
      <div>Products</div>
    </>
  );
};

export default Products;
