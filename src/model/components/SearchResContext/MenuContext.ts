import { ProductProjection } from '@commercetools/platform-sdk';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IMenuContextProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  filterResults: ProductProjection[];
  setFilterResults: Dispatch<SetStateAction<ProductProjection[]>>;
  isSearchButtonClicked: boolean;
  setSearchButtonClicked: Dispatch<SetStateAction<boolean>>;
  productTypeId: string;
  setProductTypeId: Dispatch<SetStateAction<string>>;
}

export interface IMenuProvider {
  children: ReactNode;
}
