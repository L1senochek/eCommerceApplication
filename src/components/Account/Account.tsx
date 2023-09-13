import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInContext } from '../SignInContext/SignInContext';
import { HOME_PAGE } from '../../utils/constants/paths';
import getMyProfile from '../../api/getMyProfile';
import HttpStatusCodes from '../../model/api/httpStatusCodes';
import { Customer } from '@commercetools/platform-sdk';
import UniversalInputWithError from '../UniversalInputWithError/UniversalInputWithError';
import isTextInputValid from '../../utils/validationFunctions/isTextInputValid/isTextInputValid';
import isEmailValid from '../../utils/validationFunctions/isEmailValid/isEmailValid';
// import UniversalInputWithError from '../UniversalInputWithError/UniversalInputWithError';
// import isTextInputValid from '../../utils/validationFunctions/isTextInputValid/isTextInputValid';
// import getCustomerWithPasswordToken from '../../api/getCustomerByPass';

const Account = (): JSX.Element => {
  // const [showErrorCreate, setShowErrorCreate] = useState(false);
  const [showErrorFirstname, setShowErrorFirstname] = useState(false);
  const [showErrorLastname, setShowErrorLastname] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);
  const [showErrorConfirmPassword, setShowErrorConfirmPassword] = useState(false);
  const [showErrorDateOfBirth, setShowErrorDateOfBirth] = useState(false);

  const [showErrorAddressCountryShipping, setShowErrorAddressCountryShipping] = useState(false);
  const [showErrorAddressStreetNameShipping, setShowErrorAddressStreetNameShipping] =
    useState(false);
  const [showErrorAddressPostalCodeShipping, setShowErrorAddressPostalCodeShipping] =
    useState(false);

  // const [showErrorAddressCountryBilling, setShowErrorAddressCountryBilling] = useState(false);
  // const [showErrorAddressStreetNameBilling, setShowErrorAddressStreetNameBilling] = useState(false);
  // const [showErrorAddressPostalCodeBilling, setShowErrorAddressPostalCodeBilling] = useState(false);
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
    if (
      !showErrorFirstname &&
      !showErrorLastname &&
      !showErrorEmail &&
      !showErrorPassword &&
      !showErrorConfirmPassword &&
      !showErrorDateOfBirth &&
      !showErrorAddressCountryShipping &&
      !showErrorAddressStreetNameShipping &&
      !showErrorAddressPostalCodeShipping
    ) {
      // sent to eCom
      setIsEditing(false);
    }
  };

  const handleCancelClick = (): void => {
    setShowErrorFirstname(false);
    setShowErrorLastname(false);
    setShowErrorEmail(false);
    setShowErrorPassword(false);
    setShowErrorConfirmPassword(false);
    setShowErrorDateOfBirth(false);
    setShowErrorAddressCountryShipping(false);
    setShowErrorAddressStreetNameShipping(false);
    setShowErrorAddressPostalCodeShipping(false);
    // setShowErrorAddressCountryBilling(false);
    // setShowErrorAddressStreetNameBilling(false);
    // setShowErrorAddressPostalCodeBilling(false);
    setIsEditing(false);
    if (editedProfile) {
      setUserProfile(editedProfile);
    }
  };

  const handleInputChange = (fieldName: string, value: string): void => {
    if (userProfile && isEditing) {
      setUserProfile({ ...userProfile, [fieldName]: value });
    }
  };

  const userProfileDetails = (): JSX.Element => {
    return (
      <>
        <div className="account__wrapper">
          <h2 className="account__title">Profile</h2>
          {userProfile && (
            <div className="account__details">
              <UniversalInputWithError
                onChange={(e): void => handleInputChange('firstName', e)}
                changeError={setShowErrorFirstname}
                showError={showErrorFirstname}
                value={userProfile.firstName}
                validationFunction={isTextInputValid}
                placeholder="Firstname"
                labelText="Firstname"
                labelFor="firstNameInput"
                type="text"
                classNameLabel="account__label"
                classNameInput="account__input input first-name-input"
                disabled={!isEditing}
              />
              <UniversalInputWithError
                onChange={(e): void => handleInputChange('lastName', e)}
                changeError={setShowErrorLastname}
                showError={showErrorLastname}
                value={userProfile.lastName}
                validationFunction={isTextInputValid}
                placeholder="Lastname"
                labelText="Lastname"
                labelFor="lastNameInput"
                type="text"
                classNameLabel="account__label"
                classNameInput="account__input input last-name-input"
                disabled={!isEditing}
              />
              <UniversalInputWithError
                onChange={(e): void => handleInputChange('email', e)}
                changeError={setShowErrorEmail}
                showError={showErrorEmail}
                value={userProfile.email}
                validationFunction={isEmailValid}
                placeholder="User@example.com"
                labelText="Email"
                labelFor="userEmail"
                type="text"
                classNameLabel="account__label"
                classNameInput="account__input input last-name-input"
                classNameError="account__error-message"
                disabled={!isEditing}
              />
              {isEditing ? (
                <div className="account__btn-wrapper">
                  <button className="btn" onClick={handleSaveClick}>
                    Save
                  </button>
                  <button className="btn" onClick={handleCancelClick}>
                    Cancel
                  </button>
                </div>
              ) : (
                <button className="btn" onClick={handleEditClick}>
                  Edit profile
                </button>
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
      <div className="account">{userProfileDetails()}</div>
    </>
  );
};

export default Account;
