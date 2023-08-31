import { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/getAllProducts';
import './products.scss';
import { Product } from '@commercetools/platform-sdk';

const Products = (): JSX.Element => {
  const [productsItems, setProductsItems] = useState<Product[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const responseArr = await getAllProducts();
      if (responseArr) {
        console.log(responseArr);
        setProductsItems(responseArr);
      }
    })();
  }, []);

  const createProductsItems = (): JSX.Element[] => {
    return productsItems.map((item) => {
      return (
        <div key={item.id} className="product__item">
          <img
            className="product__img"
            src={
              item.masterData.current.masterVariant.images &&
              item.masterData.current.masterVariant.images[0].url
            }
          />
          <h2 className="product__title">{item.masterData.current.name['en-US']}</h2>
          <h3 className="product__description">
            {item.masterData.current.description && item.masterData.current.description['en-US']}
          </h3>
          <h2 className="product__price">
            {item.masterData.current.masterVariant.prices &&
              item.masterData.current.masterVariant.prices[0].value.centAmount / 100}
            $
          </h2>
          {/* <h2>
            {item.masterData.current.masterVariant.prices &&
              item.masterData.current.masterVariant.prices[1].value.centAmount / 100}
            €
          </h2> */}
          <button className="product__add btn">add</button>
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
