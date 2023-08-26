import { ReactElement, useEffect, useState } from 'react';
import { getEndPoint } from '../../api/__clientApi';
import { Product } from '@commercetools/platform-sdk';

const TestApi = (): ReactElement => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await getEndPoint();
        const productsData = response.body.results;
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.key}</div>
      ))}
    </div>
  );
};

export default TestApi;
