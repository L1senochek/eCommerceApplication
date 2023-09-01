import { ProductType } from '@commercetools/platform-sdk';
import { getApiRoot, projectKey } from './buildClient';

export const getAllProductType = async (): Promise<false | ProductType[]> => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .productTypes()
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
