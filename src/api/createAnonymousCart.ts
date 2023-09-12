import { Cart, Customer, CustomerSignin } from '@commercetools/platform-sdk';
import { getApiAnonymRoot } from './buildAnonymousClient';
import { projectKey } from './buildClient';
import { FAILED_TO_CREATE_CUSTOMER } from '../utils/constants/constants';

const createAnonymousCart = async (): Promise<
  | false
  | {
      cart: Cart;
      cartId: string;
      anonymousId: string;
    }
> => {
  try {
    const response = await getApiAnonymRoot()
      .withProjectKey({ projectKey })
      .carts()
      .post({ body: { currency: 'USD' } })
      .execute();
    console.log(response);
    if (response.body && response.body.id && response.body.anonymousId) {
      const cartId = response.body.id;
      const anonymousId = response.body.anonymousId;
      return { cart: response.body, cartId, anonymousId };
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const anonymousCartID = await createAnonymousCart();
if (anonymousCartID) {
  const { cart, cartId, anonymousId } = anonymousCartID;
  console.log('AnonymousCart:', cart);
  console.log('AnonymousCartID:', cartId);
  console.log('AnonymousID:', anonymousId);
}

export const signInUser = async (bodyObj: CustomerSignin): Promise<false | Customer | string> => {
  try {
    const response = await getApiAnonymRoot()
      .withProjectKey({ projectKey })
      .customers()
      .post({ body: bodyObj })
      // .post({
      //   body: { anonymousCartId: cartId },
      // })
      // .withPasswordToken({
      //   passwordToken: 'pm2c8U_AVihFagO51fPkBxqQbPp7Jta9',
      // })
      // .withEmailToken({
      //   emailToken: 'pm2c8U_AVihFagO51fPkBxqQbPp7Jta9',
      // })
      // .login()
      // .post({ body: { email: email, password: password } })
      // .get()
      .execute();

    console.log(response);
    if (response.statusCode === 201 && response.body) {
      return response.body.customer;
    } else {
      return FAILED_TO_CREATE_CUSTOMER;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

// export default getCustomerWithPasswordToken;
