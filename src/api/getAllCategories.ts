import { getApiRoot, projectKey } from './buildClient';
import { Category } from '@commercetools/platform-sdk';
// import { CustomerSignInResult } from '@commercetools/platform-sdk';

export const getAllCategoriesApi = async (): Promise<false | Category[]> => {
  try {
    const response = await getApiRoot().withProjectKey({ projectKey }).categories().get().execute();

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
