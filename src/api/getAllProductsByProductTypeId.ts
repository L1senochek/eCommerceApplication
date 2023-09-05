import { ProductProjection } from '@commercetools/platform-sdk';
import { getApiRoot, projectKey } from './buildClient';

export const getAllProductsByProductTypeId = async (
  productTypeId: string
): Promise<false | ProductProjection[]> => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .productProjections()
      .search()
      .get({ queryArgs: { filter: [`productType.id:"${productTypeId}"`] } })
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
