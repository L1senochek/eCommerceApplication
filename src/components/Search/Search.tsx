import { ChangeEvent, ReactElement, useState } from 'react';
import getProductsSearch from '../../api/getProductsSearch';

const Search = (): ReactElement => {
  const [search, setSearch] = useState('');

  const searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  const handleSearchProductClick = async (): Promise<void> => {
    const res = await getProductsSearch('spicy');
    console.log(res);
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
