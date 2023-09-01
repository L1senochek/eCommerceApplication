import { Product } from '@commercetools/platform-sdk';
import { getApiRoot, projectKey } from './buildClient';

export const getAllProducts = async (): Promise<false | Product[]> => {
  try {
    const response = await getApiRoot().withProjectKey({ projectKey }).products().get().execute();

    console.log(response);
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
