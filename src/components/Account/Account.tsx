import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInContext } from '../SignInContext/SignInContext';
import { HOME_PAGE } from '../../utils/constants/paths';
import getMyProfile from '../../api/getMyProfile';
import HttpStatusCodes from '../../model/api/httpStatusCodes';
import { Customer } from '@commercetools/platform-sdk';
// import UniversalInputWithError from '../UniversalInputWithError/UniversalInputWithError';
// import isTextInputValid from '../../utils/validationFunctions/isTextInputValid/isTextInputValid';
// import getCustomerWithPasswordToken from '../../api/getCustomerByPass';

const Account = (): JSX.Element => {
  const [userProfile, setUserProfile] = useState<Customer | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<Customer | null>(null);
  const navigation = useNavigate();
  const context = useContext(SignInContext);

  useEffect(() => {
    const tokenExists = localStorage.getItem('accessToken');
    if (!tokenExists) {
      navigation(HOME_PAGE);
    }
  }, [context, navigation]);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const res = await getMyProfile();
        console.log(res);
        if (res && res.statusCode === HttpStatusCodes.OK) {
          setUserProfile(res.body);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handle = async (): Promise<void> => {
    // const api = getApiRootWithToken(`Bearer ${localStorage.getItem('accessToken')}`);
    // api.withProjectKey({ projectKey }).me().get().execute();
    console.log(userProfile);
  };

  const handleEditClick = (): void => {
    setIsEditing(true);
    setEditedProfile(userProfile ? { ...userProfile } : null);
  };

  const handleSaveClick = (): void => {
    // sent to eCom
    setIsEditing(false);
  };

  const handleCancelClick = (): void => {
    setIsEditing(false);
    if (editedProfile) {
      setUserProfile(editedProfile);
    }
  };

  // const updateUserProfileField = (fieldName: string, value: string): void => {
  //   if (userProfile) {
  //     setUserProfile({ ...userProfile, [fieldName]: value });
  //   }
  // };

  const handleInputChange = (fieldName: string, value: string): void => {
    if (userProfile && isEditing) {
      setUserProfile({ ...userProfile, [fieldName]: value });
    }
  };

  const userProfileDetails = (): JSX.Element => {
    return (
      // <>
      //   {/* <UniversalInputWithError
      //     onChange={setUserProfile}
      //     validationFunction={isTextInputValid}
      //     placeholder="Firstname"
      //     labelText="Firstname"
      //     labelFor="firstNameInput"
      //     type="text"
      //     classNameInput="input first-name-input"
      //   /> */}
      //   <div>
      //     <h2>Profile</h2>
      //     {userProfile && (
      //       <div>
      //         <p>Email: {userProfile.email}</p>
      //         <p>First Name: {userProfile.firstName}</p>
      //         <p>Last Name: {userProfile.lastName}</p>
      //       </div>
      //     )}
      //   </div>
      //   {userProfile && (
      //     <div>
      //       <button onClick={(): void => updateUserProfileField('email', 'newemail@example.com')}>
      //         Update Email
      //       </button>
      //       <button onClick={(): void => updateUserProfileField('firstName', 'New First Name')}>
      //         Update First Name
      //       </button>
      //     </div>
      //   )}
      // </>
      <>
        <div>
          <h2>Profile</h2>
          {userProfile && (
            <div>
              <label>Email:</label>
              <input
                type="text"
                value={userProfile.email}
                onChange={(e): void => handleInputChange('email', e.target.value)}
                disabled={!isEditing}
              />

              <label>First Name:</label>
              <input
                type="text"
                value={userProfile.firstName}
                onChange={(e): void => handleInputChange('firstName', e.target.value)}
                disabled={!isEditing}
              />

              <label>Last Name:</label>
              <input
                type="text"
                value={userProfile.lastName}
                onChange={(e): void => handleInputChange('lastName', e.target.value)}
                disabled={!isEditing}
              />
              {isEditing ? (
                <div>
                  <button onClick={handleSaveClick}>Save</button>
                  <button onClick={handleCancelClick}>Cancel</button>
                </div>
              ) : (
                <button onClick={handleEditClick}>Edit Profile</button>
              )}
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div onClick={handle}>acc</div>
      <div>{userProfileDetails()}</div>
    </>
  );
};

export default Account;
