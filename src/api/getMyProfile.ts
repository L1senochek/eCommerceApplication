import { ClientResponse, Customer } from '@commercetools/platform-sdk';
import { TOKEN_STORAGE_KEY } from '../utils/constants/constants';
import { projectKey } from './buildClient';
import { getApiRootWithToken } from './createClientWithToken';

const getMyProfile = (): Promise<void | ClientResponse<Customer>> => {
  const api = getApiRootWithToken(`Bearer ${localStorage.getItem(TOKEN_STORAGE_KEY)}`);
  return api.withProjectKey({ projectKey }).me().get().execute().catch(console.error);
};

export default getMyProfile;
