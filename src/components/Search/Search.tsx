import { ChangeEvent, ReactElement, useState } from 'react';
import getProductsSearch from '../../api/getProductsSearch';
import { ProductProjection } from '@commercetools/platform-sdk';

const Search = (): ReactElement => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<ProductProjection[]>([]);

  const searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
    console.log(event.target.value, search);
  };

  const handleSearchProductClick = async (): Promise<void> => {
    const res = await getProductsSearch(search);
    if (res) {
      setSearchResults(res || []);
      console.log(search, res, searchResults);
    }
  };

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
