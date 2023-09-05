import { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/getAllProducts';
import './products.scss';
import { ProductProjection } from '@commercetools/platform-sdk';
import { getAllProductsByProductTypeId } from '../../api/getAllProductsByProductTypeId';
import ProductsProps from '../../model/components/Products/Products';
import getProductById from '../../api/getProductById';
import ProductDetails from '../ProductDetails/ProductDetails';

const Products = ({ productTypeId }: ProductsProps): JSX.Element => {
  const [productsItems, setProductsItems] = useState<ProductProjection[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductProjection | null>(null);
  // const [showDetails, setShowDetails] = useState(false);
  const [isProductDetailsVisible, setProductDetailsVisible] = useState(false);

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

  useEffect(() => {
    (async (): Promise<void> => {
      if (selectedProduct) {
        await getProductById(selectedProduct.id);
        console.log('Product Details:', selectedProduct);
      }
    })();
  }, [selectedProduct]);

  const handleProductClick = async (item: ProductProjection): Promise<void> => {
    setSelectedProduct(item);
    // setShowDetails(true);
    setProductDetailsVisible(true);
  };

  const createProductsItems = (): JSX.Element[] => {
    return productsItems.map((item) => {
      return (
        <>
          {isProductDetailsVisible && selectedProduct && selectedProduct.id === item.id ? (
            <ProductDetails item={item} onClose={(): void => setProductDetailsVisible(false)} />
          ) : (
            <>
              <div
                key={item.id}
                className="product-item"
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
                  {item.masterVariant.prices && item.masterVariant.prices[0].value.centAmount / 100}
                  $
                </h2>
                {/* <h2>
            {item.masterData.current.masterVariant.prices &&
              item.masterData.current.masterVariant.prices[1].value.centAmount / 100}
            €
          </h2> */}
                <button className="product-item__btn btn">add</button>
              </div>
            </>
          )}
        </>
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
