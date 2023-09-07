import { ProductProjection } from '@commercetools/platform-sdk';
import { getApiRoot, projectKey } from './buildClient';
import { LIMIT_ITEM_ON_PAGE } from '../utils/constants/constants';

const getProductsSearch = async (searchTerm: string): Promise<false | ProductProjection[]> => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .productProjections()
      .search()
      .get({
        queryArgs: {
          'text.en-US': searchTerm,
          limit: LIMIT_ITEM_ON_PAGE,
          fuzzy: true,
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

export default getProductsSearch;
