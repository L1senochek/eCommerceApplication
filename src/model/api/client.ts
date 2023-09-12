import HttpStatusCodes from './httpStatusCodes';

export interface APIResponse {
  body: {
    limit: number;
    offset: number;
    count: number;
    total: number;
    results: Product[];
  };
  statusCode: HttpStatusCodes;
}

export interface Product {
  id: string;
  version: number;
  versionModifiedAt: string;
  lastMessageSequenceNumber: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: {
    isPlatformClient: boolean;
    user: User;
  };
  createdBy: {
    isPlatformClient: boolean;
    user: User;
  };
  productType: ProductType;
  masterData: MasterData;
  key: string;
  taxCategory: TaxCategory;
  lastVariantId: number;
}

export interface User {
  typeId: string;
  id: string;
}

export interface ProductType {
  typeId: string;
  id: string;
}

export interface CategoryType {
  typeId: string;
  id: string;
}

export interface MasterData {
  current: {
    name: LocalizedString;
    categories: CategoryType[];
    categoryOrderHints: { [categoryId: string]: string };
    slug: LocalizedString;
    masterVariant: Variant;
    variants: Variant[];
    searchKeywords: { [locale: string]: string[] };
  };
  staged: {
    name: LocalizedString;
    categories: CategoryType[];
    categoryOrderHints: { [categoryId: string]: string };
    slug: LocalizedString;
    masterVariant: Variant;
    variants: Variant[];
    searchKeywords: { [locale: string]: string[] };
  };
  published: boolean;
  hasStagedChanges: boolean;
}

export interface LocalizedString {
  [locale: string]: string; //{ 'en-US': 'Sample Denim Jacket' }
}

interface Variant {
  id: number;
  prices: string[];
  images: string[];
  attributes: Attribute[];
  assets: string[];
}

interface AttributeValue {
  key: string;
  label: string;
}

interface Attribute {
  name: string;
  value: AttributeValue;
}

export interface TaxCategory {
  typeId: string;
  id: string;
}
