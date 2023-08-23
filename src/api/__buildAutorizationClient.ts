// import { PasswordAuthMiddlewareOptions, ClientBuilder, HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';
// import { ctpClient } from './buildClient';
import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import {
  ClientBuilder,
  HttpMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

// const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
//   projectKey: `${import.meta.env.VITE_CTP_PROJECT_KEY}`,
// });

// const tokenAnonymousSession = async () => {
//   console.log('apiRoot', await apiRoot.customers().get().execute());
// };

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `${import.meta.env.VITE_CTP_API_URL}`,
  fetch,
};

const options: PasswordAuthMiddlewareOptions = {
  host: import.meta.env.VITE_CTP_AUTH_URL || '',
  projectKey: import.meta.env.VITE_CTP_PROJECT_KEY,
  credentials: {
    clientId: import.meta.env.VITE_CTP_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_CTP_CLIENT_SECRET || '',
    user: {
      username: 'test@test.com',
      password: 'test',
    },
  },
  scopes: [import.meta.env.VITE_CTP_SCOPES || ''],
  fetch,
};

const clientPass = new ClientBuilder()
  .withPasswordFlow(options)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export const getApiPassRoot: () => ApiRoot = () => {
  return createApiBuilderFromCtpClient(clientPass);
};
