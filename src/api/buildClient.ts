import fetch from 'node-fetch';
import {
  ClientBuilder,
  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';
import dotenv from 'dotenv';

dotenv.config();

const { CTP_PROJECT_KEY, CTP_CLIENT_ID, CTP_CLIENT_SECRET, CTP_AUTH_URL, CTP_API_URL, CTP_SCOPES } =
  process.env;
const projectKey = `${CTP_PROJECT_KEY}`;
const scopes = [`${CTP_SCOPES}`];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `${CTP_AUTH_URL}`,
  projectKey: projectKey,
  credentials: {
    clientId: `${CTP_CLIENT_ID}`,
    clientSecret: `${CTP_CLIENT_SECRET}`,
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `${CTP_API_URL}`,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();
