import { Product } from '@commercetools/platform-sdk';
import { getApiRoot, projectKey } from './buildClient';

const getProductById = async (id: string): Promise<false | Product> => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .products()
      .withId({ ID: id })
      .get()
      .execute();

    if (response.statusCode === 200) {
      return response.body;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

export default getProductById;
