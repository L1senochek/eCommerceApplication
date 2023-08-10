import { ctpClient } from './buildClient';
import {
  ClientResponse,
  ProductPagedQueryResponse,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';

const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: `${import.meta.env.VITE_CTP_PROJECT_KEY}`,
});

export const getEndPoint = async (): Promise<ClientResponse<ProductPagedQueryResponse>> => {
  return await apiRoot.products().get().execute();
};

try {
  const response = await getEndPoint();
  console.log('results Api!!!!!!', response?.body.results);
} catch (error) {
  console.error(error);
}
