import { ProductProjection } from '@commercetools/platform-sdk';
import { getApiRoot, projectKey } from './buildClient';

export const getAllProductsByProductTypeId = async (): Promise<false | ProductProjection[]> => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .productProjections()
      .search()
      .get({ queryArgs: { filter: [`productType.id:"fcc15450-4766-4752-a3aa-dfd50e3e13fa"`] } })
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
