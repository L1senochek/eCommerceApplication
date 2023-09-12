import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInContext } from '../SignInContext/SignInContext';
import { HOME_PAGE } from '../../utils/constants/paths';
// import getCustomerWithPasswordToken from '../../api/getCustomerByPass';

const Account = (): JSX.Element => {
  const navigation = useNavigate();
  const context = useContext(SignInContext);

  useEffect(() => {
    const tokenExists = localStorage.getItem('accessToken');
    if (!tokenExists) {
      navigation(HOME_PAGE);
    }
  }, [context, navigation]);

  const handle = async (): Promise<void> => {
    // const res = await getCustomerWithPasswordToken();
    // console.log(res);
  };

  return (
    <>
      <div onClick={handle}>acc</div>
    </>
  );
};

export default Account;
