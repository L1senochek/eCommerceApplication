import { ProductType } from '@commercetools/platform-sdk';
import { getAllProductType } from '../../api/getAllProductType';
import './productType.scss';
import { useEffect, useState } from 'react';

const ProductType = (): JSX.Element => {
  const [productTypeItems, setProductTypeItems] = useState<ProductType[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const responseArr = await getAllProductType();
      if (responseArr) {
        setProductTypeItems(responseArr);
      }
    })();
  }, []);

  const createProductTypeItems = (): JSX.Element[] => {
    return productTypeItems.map((item) => {
      return (
        <div key={item.id} className="product-type__item">
          <span className="product-type__title">{item.name}</span>
          <span className="product-type__line"></span>
        </div>
      );
    });
  };

  return (
    <>
      <div className="product-type">{createProductTypeItems()}</div>
    </>
  );
};

export default ProductType;
