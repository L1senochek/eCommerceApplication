import { ProductProjection } from '@commercetools/platform-sdk';
import { LIMIT_ITEM_ON_PAGE } from '../utils/constants/constants';
import { getApiRoot, projectKey } from './buildClient';
import IgetProductsFilter from '../model/api/getProductsFilter';

const getProductsFilter = async ({
  sortType,
  searchTerm,
  categoryId,
  productTypeId,
  priceCurrencyValue,
  priceCountryValue,
  priceCustomerGroupValue,
}: IgetProductsFilter): Promise<false | ProductProjection[]> => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .productProjections()
      .search()
      .get({
        queryArgs: {
          limit: LIMIT_ITEM_ON_PAGE,
          fuzzy: true,
          sort: sortType || undefined,
          'text.en-US': searchTerm || undefined,
          filter: productTypeId
            ? `productType.id:"${productTypeId}"`
            : categoryId
            ? `categories.id:"${categoryId}"`
            : undefined,
          priceCurrency: priceCurrencyValue || undefined,
          priceCountry: priceCountryValue || undefined,
          priceCustomerGroup: priceCustomerGroupValue || undefined,
        },
      })
      .execute();

    if (response.statusCode === 200) {
      return response.body.results;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

export default getProductsFilter;
