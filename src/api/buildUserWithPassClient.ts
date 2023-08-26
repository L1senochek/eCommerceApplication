import {
  ClientBuilder,
  type HttpMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  Client,
} from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient, ApiRoot } from '@commercetools/platform-sdk';

export const projectKey = `${import.meta.env.VITE_CTP_PROJECT_KEY || ''}`;
const scopes = [`${import.meta.env.VITE_CTP_SCOPES || ''}`];

const clientOptionsWitnPass = (email: string, password: string): PasswordAuthMiddlewareOptions => {
  return {
    host: `${import.meta.env.VITE_CTP_AUTH_URL || ''}`,
    projectKey: projectKey,
    credentials: {
      clientId: `${import.meta.env.VITE_CTP_CLIENT_ID || ''}`,
      clientSecret: `${import.meta.env.VITE_CTP_CLIENT_SECRET || ''}`,
      user: {
        username: email,
        password: password,
      },
    },
    scopes,
    fetch,
  };
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `${import.meta.env.VITE_CTP_API_URL || ''}`,
  fetch,
};

const createClientWithPassword = (email: string, pass: string): Client => {
  return new ClientBuilder()
    .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
    .withPasswordFlow(clientOptionsWitnPass(email, pass))
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware() // Include middleware for logging
    .build();
};

export const getApiRootWithPassword = (email: string, pass: string): ApiRoot => {
  return createApiBuilderFromCtpClient(createClientWithPassword(email, pass));
};
