import { ReactElement, useContext, useEffect, useState } from 'react';
import { getAllCategoriesApi } from '../../api/getAllCategories';
import { Category } from '@commercetools/platform-sdk';
import './categories.scss';
import { MenuContext } from '../MenuContext/MenuContext';
import { SignInContext } from '../SignInContext/SignInContext';

const Categories = (): ReactElement => {
  const [categoriesItems, setCategoriesItems] = useState<Category[]>([]);
  const context = useContext(MenuContext);
  const contextSignIn = useContext(SignInContext);

  useEffect(() => {
    (async (): Promise<void> => {
      const responseArr = await getAllCategoriesApi();
      if (responseArr) {
        setCategoriesItems(responseArr);
      }
    })();
  }, []);

  const handleCategoriesClick = (item: Category): void => {
    context?.setProductTypeId(item.id);
    console.log('Categories:', item);
    console.log('ClickCategoriesID:', item.id);
  };

  const createCategoriesItems = (): JSX.Element[] => {
    console.log('isSignIn', contextSignIn?.isSignIn);
    // contextSignIn?.setSignIn(false);
    return categoriesItems
      .filter((item) => {
        return contextSignIn?.isSignIn || item.key !== 'favorite';
      })
      .map((item) => {
        return (
          <div
            key={item.id}
            className="categories__item"
            onClick={(): void => handleCategoriesClick(item)}
          >
            <span className="categories__title">{item.name['en-US']}</span>
            <span className="categories__line"></span>
          </div>
        );
      });
  };

  return <div className="categories">{createCategoriesItems()}</div>;
};

export default Categories;
