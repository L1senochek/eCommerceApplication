import { ProductProjection } from '@commercetools/platform-sdk';
import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

interface ISearchResultsContextProps {
  searchResults: ProductProjection[];
  setSearchResults: Dispatch<SetStateAction<ProductProjection[]>>;
}

interface ISearchResultsProvider {
  children: ReactNode;
}

export const SearchResultsContext = createContext<ISearchResultsContextProps | null>(null);

export const SearchResultsProvider = ({ children }: ISearchResultsProvider): JSX.Element => {
  const [searchResults, setSearchResults] = useState<ProductProjection[]>([]);

  return (
    <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
};
