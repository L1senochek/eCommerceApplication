import { ProductProjection } from '@commercetools/platform-sdk';
import React, { createContext, useState } from 'react';
import {
  IAccountContextProps,
  IAccountProvider,
} from '../../model/components/AccountContext/AccountContext';

export const AccountContext = createContext<IAccountContextProps | null>(null);

export const AccountProvider = ({ children }: IAccountProvider): JSX.Element => {
  const [activeTab, setActiveTab] = useState('general');

  const [filterResults, setFilterResults] = useState<ProductProjection[]>([]);
  const [isSearchButtonClicked, setSearchButtonClicked] = useState<boolean>(false);
  const [productTypeId, setProductTypeId] = useState('');

  return (
    <AccountContext.Provider
      value={{
        activeTab,
        setActiveTab,

        filterResults,
        setFilterResults,
        isSearchButtonClicked,
        setSearchButtonClicked,
        productTypeId,
        setProductTypeId,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
