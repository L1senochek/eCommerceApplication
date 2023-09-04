import { ProductProjection } from '@commercetools/platform-sdk';
import { getApiRoot, projectKey } from './buildClient';

export const getAllProducts = async (): Promise<false | ProductProjection[]> => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .productProjections()
      // .products()
      .get()
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
