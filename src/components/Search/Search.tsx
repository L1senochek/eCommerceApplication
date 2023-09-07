import { ChangeEvent, ReactElement, useContext, useEffect } from 'react';
import getProductsSearch from '../../api/getProductsSearch';
import { SearchResultsContext } from '../SearchResContext/SearchResContext';
import IconLoupe from '../IconLoupe/IconLoupe';
import './search.scss';

const Search = (): ReactElement => {
  const context = useContext(SearchResultsContext);

  const searchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    context?.setSearch(value);

    if (value === '') {
      context?.setSearchResults([]);
    }
  };

  const handleSearchProductClick = async (): Promise<void> => {
    context?.setSearchButtonClicked(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      context?.setSearchButtonClicked(true);
    }
  };

  useEffect(() => {
    if (context?.isSearchButtonClicked) {
      (async (): Promise<void> => {
        const res = await getProductsSearch(context?.search);
        if (res) {
          context?.setSearchResults(res || []);
        }
        context?.setSearchButtonClicked(false);
      })();
    }
  }, [context]);

  return (
    <div className="search input">
      <button className="search__loupe" onClick={handleSearchProductClick}>
        <IconLoupe />
      </button>
      <input
        type="search"
        className="search__input"
        placeholder="Search..."
        id="search"
        value={context?.search}
        onChange={searchChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
