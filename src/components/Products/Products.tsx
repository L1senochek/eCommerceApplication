import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { getAllProducts } from '../../api/getAllProducts';
import './products.scss';
import { ProductProjection } from '@commercetools/platform-sdk';
import { getAllProductsByProductTypeId } from '../../api/getAllProductsByProductTypeId';
import ProductsProps from '../../model/components/Products/Products';
import getProductById from '../../api/getProductById';
import ProductDetails from '../ProductDetails/ProductDetails';
import { SearchResultsContext } from '../SearchResContext/SearchResContext';

const Products = ({ productTypeId }: ProductsProps): JSX.Element => {
  const [productsItems, setProductsItems] = useState<ProductProjection[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductProjection | null>(null);
  const [isProductDetailsVisible, setProductDetailsVisible] = useState(false);
  const productDetailsRef = useRef<HTMLDivElement | null>(null);
  const context = useContext(SearchResultsContext);

  console.log(context?.searchResults, 11111111111222);
  useEffect(() => {
    (async (): Promise<void> => {
      const responseArr = await (productTypeId
        ? getAllProductsByProductTypeId(productTypeId)
        : getAllProducts());

      if (responseArr) {
        setProductsItems(responseArr);
      }
    })();
  }, [productTypeId]);

  useEffect(() => {
    (async (): Promise<void> => {
      if (selectedProduct) {
        await getProductById(selectedProduct.id);
        console.log('Product Details:', selectedProduct);

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
    return productsItems.map((item) => {
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
