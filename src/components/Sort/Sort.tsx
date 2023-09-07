import { useContext, useState } from 'react';
import getProductsFilter from '../../api/getProductsFilter';
import IconArrow from '../IconArrow/IconArrow';
import './sort.scss';
import { SearchResultsContext } from '../SearchResContext/SearchResContext';
import { PRICE_ASC, PRICE_DESC } from '../../utils/constants/constants';

const Sort = (): JSX.Element => {
  const [priceASC, setPriceASC] = useState(true);
  const context = useContext(SearchResultsContext);

  const handleSortPriceClick = async (): Promise<void> => {
    setPriceASC(!priceASC);

    const res = await getProductsFilter({
      productTypeId: 'fcc15450-4766-4752-a3aa-dfd50e3e13fa',
      // productTypeId: '172e8c21-7243-43c1-b6f8-b61b6d4646f0',
      // sortType: PRICE_ASC | PRICE_DESC,
      sortType: priceASC ? PRICE_ASC : PRICE_DESC,
      // sortType: 'price asc',
      // sortType: 'price desc',
      searchTerm: context?.search ? context?.search : '',
    });
    console.log(res, context);
  };

  return (
    <>
      <div className={`sort ${priceASC ? '' : 'desc'}`} onClick={handleSortPriceClick}>
        <h4 className="sort__title">Sort by price</h4>
        <div className="sort__icon">
          <IconArrow />
        </div>
      </div>
    </>
  );
};

export default Sort;
