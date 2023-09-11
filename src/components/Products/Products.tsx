import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { getAllProducts } from '../../api/getAllProducts';
import './products.scss';
import { ProductProjection } from '@commercetools/platform-sdk';
import { getAllProductsByProductTypeId } from '../../api/getAllProductsByProductTypeId';
import getProductById from '../../api/getProductById';
import ProductDetails from '../ProductDetails/ProductDetails';
import { MenuContext } from '../MenuContext/MenuContext';

const Products = (): JSX.Element => {
  const [productsItems, setProductsItems] = useState<ProductProjection[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductProjection | null>(null);
  const [isProductDetailsVisible, setProductDetailsVisible] = useState(false);
  const productDetailsRef = useRef<HTMLDivElement | null>(null);
  const context = useContext(MenuContext);
  // const prevProductTypeIdRef = useRef<string | undefined>(context?.productTypeId);

  console.log('sortItems', context?.filterResults);
  console.log('productsItems', productsItems);
  useEffect(() => {
    (async (): Promise<void> => {
      const responseArr = await (context?.productTypeId
        ? getAllProductsByProductTypeId(context?.productTypeId)
        : getAllProducts());

      if (responseArr) {
        setProductsItems(responseArr);
      }
    })();
  }, [context?.productTypeId]);

  // useEffect(() => {
  //   const currentProductTypeId = context?.productTypeId;
  //   console.log('id1111111111', currentProductTypeId);
  //   if (currentProductTypeId !== prevProductTypeIdRef.current) {
  //     (async (): Promise<void> => {
  //       const responseArr = await (currentProductTypeId
  //         ? getAllProductsByProductTypeId(currentProductTypeId)
  //         : getAllProducts());

  //       if (responseArr) {
  //         context?.setProductsItems(responseArr);
  //       }
  //       // context?.setProductsItems((prevProducts) => {
  //       //   return responseArr || prevProducts;
  //       // });

  //       prevProductTypeIdRef.current = currentProductTypeId;
  //     })();
  //   }
  // }, [context]);

  useEffect(() => {
    (async (): Promise<void> => {
      if (selectedProduct) {
        await getProductById(selectedProduct.id);

        if (productDetailsRef.current) {
          productDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    })();
  }, [selectedProduct]);

  const handleProductClick = async (item: ProductProjection): Promise<void> => {
    setSelectedProduct(item);
    setProductDetailsVisible(true);
  };

  const createProductsItems = (): JSX.Element[] => {
    const products = context?.filterResults.length ? context?.filterResults : productsItems;

    return products.map((item) => {
      return (
        <Fragment key={item.id}>
          <div
            key={item.id}
            className={`product-item ${
              isProductDetailsVisible && selectedProduct && selectedProduct.id === item.id
                ? 'active'
                : ''
            }`}
            onClick={(): Promise<void> => handleProductClick(item)}
          >
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
          {isProductDetailsVisible && selectedProduct && selectedProduct.id === item.id && (
            <ProductDetails
              item={item}
              onClose={(): void => setProductDetailsVisible(false)}
              productDetailsRef={productDetailsRef}
            />
          )}
        </Fragment>
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
