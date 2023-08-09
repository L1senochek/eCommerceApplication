export enum HttpStatusCodes {
  CORS_PROBLEM = 0,
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  TIME_OUT = 504,
}

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
