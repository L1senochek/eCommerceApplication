import { ProductProjection } from '@commercetools/platform-sdk';
import React, { createContext, useState } from 'react';
import {
  IMenuContextProps,
  IMenuProvider,
} from '../../model/components/SearchResContext/MenuContext';

export const MenuContext = createContext<IMenuContextProps | null>(null);

export const MenuProvider = ({ children }: IMenuProvider): JSX.Element => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<ProductProjection[]>([]);
  const [isSearchButtonClicked, setSearchButtonClicked] = useState<boolean>(false);
  const [productTypeId, setProductTypeId] = useState('');

  return (
    <MenuContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        setSearchResults,
        isSearchButtonClicked,
        setSearchButtonClicked,
        productTypeId,
        setProductTypeId,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
