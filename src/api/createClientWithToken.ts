import { ApiRoot, createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { Client, ClientBuilder, HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';
import { projectKey } from './buildUserWithPassClient';

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `${import.meta.env.VITE_CTP_API_URL || ''}`,
  fetch,
};

export const createClientWithToken = (
  token: string,
  options = {
    force: true,
  }
): Client => {
  return new ClientBuilder()
    .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
    .withExistingTokenFlow(token, options)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware() // Include middleware for logging
    .build();
};

export const getApiRootWithToken = (token: string): ApiRoot => {
  return createApiBuilderFromCtpClient(createClientWithToken(token));
};
