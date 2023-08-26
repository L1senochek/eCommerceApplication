import { FAILED_TO_CREATE_CUSTOMER } from '../utils/constants/constants';
import { getApiRoot, projectKey } from './buildClient';
import { Customer, CustomerSignin } from '@commercetools/platform-sdk';

export const executeCustomerRequest = async (
  bodyObj: CustomerSignin
): Promise<Customer | string> => {
  try {
    const response = await getApiRoot()
      .withProjectKey({ projectKey })
      .customers()
      .post({ body: bodyObj })
      .execute();

    if (response.statusCode === 201 && response.body) {
      return response.body.customer;
    } else {
      return FAILED_TO_CREATE_CUSTOMER;
    }
  } catch (error) {
    console.error('Error:', error);
    return FAILED_TO_CREATE_CUSTOMER;
  }
};
