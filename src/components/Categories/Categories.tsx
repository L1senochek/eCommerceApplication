import { ReactElement, useEffect, useState } from 'react';
import { getAllCategoriesApi } from '../../api/getAllCategories';
import { Category } from '@commercetools/platform-sdk';

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
          {item.name['en-US']}
        </div>
      );
    });
  };

  return <div className="categories">{createCategoriesItems()}</div>;
};

export default Categories;
