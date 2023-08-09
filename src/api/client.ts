import { ctpClient } from './buildClient';
import {
  ClientResponse,
  ProductPagedQueryResponse,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import dotenv from 'dotenv';
dotenv.config();

const { CTP_PROJECT_KEY } = process.env;

const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: `${CTP_PROJECT_KEY}`,
});

const getEndPoint = async (): Promise<ClientResponse<ProductPagedQueryResponse> | undefined> => {
  try {
    return await apiRoot.products().get().execute();
  } catch (error) {
    console.error(error);
  }
};

try {
  const response = await getEndPoint();
  console.log(response?.body.results);

  // console.log(response.body.results[3].masterData.current.name);
  // console.log(response.body.results[0].masterData.current.categories);
  // console.log(response.body.results[0].masterData.current.categoryOrderHints);
  // console.log(response.body.results[0].masterData.current.slug);
  // console.log(response.body.results[0].masterData.current.masterVariant);
  // console.log(11111, response.body.results[0].masterData.current.variants[0].assets);
  // console.log(response.body.results[0].masterData.current.searchKeywords);
} catch (error) {
  console.error(error);
}
