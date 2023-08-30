import { ReactElement, useEffect, useState } from 'react';
import { getAllCategoriesApi } from '../../api/getAllCategories';
import { Category } from '@commercetools/platform-sdk';
import './categories.scss';

const Categories = (): ReactElement => {
  const [categoriesItems, setCategoriesItems] = useState<Category[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const responseArr = await getAllCategoriesApi();
      if (responseArr) {
        setCategoriesItems(responseArr);
      }
    })();
  }, []);

  const createCategoriesItems = (): JSX.Element[] => {
    return categoriesItems.map((item) => {
      return (
        <div key={item.id} className="categories__item">
          <span className="categories__title">{item.name['en-US']}</span>
          <span className="categories__line"></span>
        </div>
      );
    });
  };

  return <div className="categories">{createCategoriesItems()}</div>;
};

export default Categories;
