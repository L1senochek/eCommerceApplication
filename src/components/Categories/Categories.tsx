import { getAllCategoriesApi } from '../../api/getAllCategories';

const Categories = (): JSX.Element => {
  const res = async (): Promise<void> => {
    const responseArr = await getAllCategoriesApi();
    console.log(responseArr);
    if (responseArr) {
      console.log(responseArr[0]);
      responseArr.map((item) => {
        console.log(item.name['en-US']);
      });
    }
  };

  res();
  return <div className="categories">{123}</div>;
};

export default Categories;
