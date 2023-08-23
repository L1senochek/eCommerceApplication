import { getApiRoot, projectKey } from './buildClient';
import { Customer, CustomerSignin } from '@commercetools/platform-sdk';

export const executeCustomerRequest = async (bodyObj: CustomerSignin): Promise<Customer> => {
  const response = await getApiRoot()
    .withProjectKey({ projectKey })
    .customers()
    .post({ body: bodyObj })
    .execute()
    .catch();

  if (response.statusCode === 201 && response.body) {
    return response.body.customer;
  } else {
    throw new Error('Failed to create customer');
  }
};
