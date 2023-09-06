import { ChangeEvent, ReactElement, useContext, useEffect, useState } from 'react';
import getProductsSearch from '../../api/getProductsSearch';
// import { ProductProjection } from '@commercetools/platform-sdk';
import { SearchResultsContext } from '../SearchResContext/SearchResContext';

const Search = (): ReactElement => {
  const [search, setSearch] = useState('');
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const context = useContext(SearchResultsContext);

  const searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const handleSearchProductClick = async (): Promise<void> => {
    setSearchButtonClicked(true);
  };

  useEffect(() => {
    if (searchButtonClicked) {
      (async (): Promise<void> => {
        const res = await getProductsSearch(search);
        if (res) {
          context?.setSearchResults(res || []);
          console.log(search, res, context?.searchResults);
        }
      })();
    }
    setSearchButtonClicked(false);
  }, [search, searchButtonClicked, context]);

  return (
    <div className="search input">
      <button className="search__loupe" onClick={handleSearchProductClick}></button>
      <input
        type="search"
        className="search__input"
        placeholder="Search..."
        id="search"
        value={search}
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
