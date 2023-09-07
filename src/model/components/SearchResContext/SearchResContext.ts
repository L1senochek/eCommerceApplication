import { ProductProjection } from '@commercetools/platform-sdk';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ISearchResultsContextProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchResults: ProductProjection[];
  setSearchResults: Dispatch<SetStateAction<ProductProjection[]>>;
  isSearchButtonClicked: boolean;
  setSearchButtonClicked: Dispatch<SetStateAction<boolean>>;
}

export interface ISearchResultsProvider {
  children: ReactNode;
}
