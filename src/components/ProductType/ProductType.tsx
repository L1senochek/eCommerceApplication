import { ProductType } from '@commercetools/platform-sdk';
import { getAllProductType } from '../../api/getAllProductType';
import './productType.scss';
import { useEffect, useState } from 'react';
import ProductTypeProps from '../../model/components/ProductType/ProductType';

const ProductType = ({ onProductClick }: ProductTypeProps): JSX.Element => {
  const [productTypeItems, setProductTypeItems] = useState<ProductType[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const responseArr = await getAllProductType();
      if (responseArr) {
        setProductTypeItems(responseArr);
      }
    })();
  }, []);

  const handleProductClick = (itemId: string): void => {
    onProductClick(itemId);
    console.log('ClickID:', itemId);
  };

  const createProductTypeItems = (): JSX.Element[] => {
    return productTypeItems.map((item) => {
      return (
        <div
          key={item.id}
          className="product-type__item"
          onClick={(): void => handleProductClick(item.id)}
        >
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
