import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInContext } from '../SignInContext/SignInContext';
import { HOME_PAGE } from '../../utils/constants/paths';
import getMyProfile from '../../api/getMyProfile';
import HttpStatusCodes from '../../model/api/httpStatusCodes';
import { Customer } from '@commercetools/platform-sdk';
// import getCustomerWithPasswordToken from '../../api/getCustomerByPass';

const Account = (): JSX.Element => {
  const [userProfile, setUserProfile] = useState<Customer>();
  const navigation = useNavigate();
  const context = useContext(SignInContext);

  useEffect(() => {
    const tokenExists = localStorage.getItem('accessToken');
    if (!tokenExists) {
      navigation(HOME_PAGE);
    }
  }, [context, navigation]);

  const handle = async (): Promise<void> => {
    // const api = getApiRootWithToken(`Bearer ${localStorage.getItem('accessToken')}`);
    // api.withProjectKey({ projectKey }).me().get().execute();
    console.log(userProfile);
  };

  useEffect(() => {
    (async (): Promise<void> => {
      const res = await getMyProfile();
      console.log(res);
      if (res && res.statusCode === HttpStatusCodes.OK) {
        setUserProfile(res.body);
      }
    })();
  }, []);

  return (
    <>
      <div onClick={handle}>acc</div>
    </>
  );
};

export default Account;
