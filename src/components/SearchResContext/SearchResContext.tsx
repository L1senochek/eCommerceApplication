import { ProductProjection } from '@commercetools/platform-sdk';
import React, { createContext, useState } from 'react';
import {
  ISearchResultsContextProps,
  ISearchResultsProvider,
} from '../../model/components/SearchResContext/SearchResContext';

export const SearchResultsContext = createContext<ISearchResultsContextProps | null>(null);

export const SearchResultsProvider = ({ children }: ISearchResultsProvider): JSX.Element => {
  const [searchResults, setSearchResults] = useState<ProductProjection[]>([]);
  const [isSearchButtonClicked, setSearchButtonClicked] = useState<boolean>(false);

  return (
    <SearchResultsContext.Provider
      value={{ searchResults, setSearchResults, isSearchButtonClicked, setSearchButtonClicked }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
};
