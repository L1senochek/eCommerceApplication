import { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/getAllProducts';
import './products.scss';
import { ProductProjection } from '@commercetools/platform-sdk';
import { getAllProductsByProductTypeId } from '../../api/getAllProductsByProductTypeId';

interface ProductsProps {
  productTypeId: string;
}

const Products = ({ productTypeId }: ProductsProps): JSX.Element => {
  const [productsItems, setProductsItems] = useState<ProductProjection[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const responseArr = await (productTypeId
        ? getAllProductsByProductTypeId(productTypeId)
        : getAllProducts());

      if (responseArr) {
        console.log(123, responseArr);
        setProductsItems(responseArr);
      }
    })();
  }, [productTypeId]);

  const createProductsItems = (): JSX.Element[] => {
    return productsItems.map((item) => {
      return (
        <div key={item.id} className="product-item">
          <img
            className="product-item__img"
            src={item.masterVariant.images && item.masterVariant.images[0].url}
          />
          <h2 className="product-item__title">{item.name['en-US']}</h2>
          <h3 className="product-item__description">
            {item.description && item.description['en-US']}
          </h3>
          <h2 className="product-item__price">
            {item.masterVariant.prices && item.masterVariant.prices[0].value.centAmount / 100}$
          </h2>
          {/* <h2>
            {item.masterData.current.masterVariant.prices &&
              item.masterData.current.masterVariant.prices[1].value.centAmount / 100}
            €
          </h2> */}
          <button className="product-item__btn btn">add</button>
        </div>
      );
    });
  };

  return (
    <>
      <div className="products">{createProductsItems()}</div>
    </>
  );
};

export default Products;
