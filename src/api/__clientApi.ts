import { getApiPassRoot } from './__buildAutorizationClient';
import { ctpClient } from './buildClient';
import {
  ClientResponse,
  ProductPagedQueryResponse,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';

const projectKey = `${import.meta.env.VITE_CTP_PROJECT_KEY}`;

const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: projectKey,
});

export const getEndPoint = async (): Promise<ClientResponse<ProductPagedQueryResponse>> => {
  return await apiRoot.products().get().execute();
};

console.log('results Api!!!!!!', (await getEndPoint())?.body.results);

export const getProjectPass = await getApiPassRoot()
  .withProjectKey({ projectKey: projectKey })
  .me()
  .get()
  .execute()
  .catch(console.error);

console.log('Test now user', getProjectPass);
