import { getApiRootWithPassword } from './buildUserWithPassClient';
import { projectKey } from './buildClient';
// import { CustomerSignInResult } from '@commercetools/platform-sdk';

export const loginUserWithPassApi = async (email: string, password: string): Promise<boolean> => {
  try {
    const response = await getApiRootWithPassword(email, password)
      .withProjectKey({ projectKey })
      .login()
      .post({ body: { email: email, password: password } })
      .execute();

    console.log(response);
    if (response.statusCode === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
