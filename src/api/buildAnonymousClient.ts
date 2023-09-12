import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  TokenStore,
  TokenCache,
} from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient, ApiRoot } from '@commercetools/platform-sdk';

export const projectKey = `${import.meta.env.VITE_CTP_PROJECT_KEY || ''}`;
const scopes = [`${import.meta.env.VITE_CTP_SCOPES || ''}`];

const MyTokenCache: TokenCache = {
  get() {
    return {
      token: 'TOKEN_STORAGE_KEY',
      expirationTime: 172800,
    };
  },
  set(value: TokenStore) {
    localStorage.setItem('TOKEN_STORAGE_KEY', `${value.token}`);
    // localStorage.getItem(TOKEN_STORAGE_KEY) // `Bearer ${value.token}`);
  },
};

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `${import.meta.env.VITE_CTP_AUTH_URL || ''}`,
  projectKey: projectKey,
  credentials: {
    clientId: `${import.meta.env.VITE_CTP_CLIENT_ID || ''}`,
    clientSecret: `${import.meta.env.VITE_CTP_CLIENT_SECRET || ''}`,
  },
  tokenCache: MyTokenCache,
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `${import.meta.env.VITE_CTP_API_URL || ''}`,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  // .withAnonymousSessionFlow(authMiddlewareOptions)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();

export const getApiAnonymRoot: () => ApiRoot = () => {
  return createApiBuilderFromCtpClient(ctpClient);
};
