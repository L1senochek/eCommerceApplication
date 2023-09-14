import { ProductProjection } from '@commercetools/platform-sdk';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IAccountContextProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;

  filterResults: ProductProjection[];
  setFilterResults: Dispatch<SetStateAction<ProductProjection[]>>;
  isSearchButtonClicked: boolean;
  setSearchButtonClicked: Dispatch<SetStateAction<boolean>>;
  productTypeId: string;
  setProductTypeId: Dispatch<SetStateAction<string>>;
}

export interface IAccountProvider {
  children: ReactNode;
}
