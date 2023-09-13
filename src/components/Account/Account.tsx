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
import isDateValid from '../../utils/validationFunctions/isDateValid/isDateValid';
import isPasswordValid from '../../utils/validationFunctions/isPasswordValid/isPasswordValid';
import './account.scss';
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
  const [activeTab, setActiveTab] = useState('general');
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

  const handleTabClick = (tabName: string): void => {
    setActiveTab(tabName);
  };

  const userProfileDetails = (): JSX.Element => {
    return (
      <>
        <div className="account__wrapper">
          <h2 className="account__title">Profile</h2>
          {userProfile && (
            <>
              <div className="account__tabs">
                <div
                  className={`account__tab general ${activeTab === 'general' ? 'active' : ''}`}
                  onClick={(): void => handleTabClick('general')}
                >
                  General
                </div>
                <div
                  className={`account__tab security ${activeTab === 'security' ? 'active' : ''}`}
                  onClick={(): void => handleTabClick('security')}
                >
                  Security
                </div>
                <div
                  className={`account__tab addresses ${activeTab === 'addresses' ? 'active' : ''}`}
                  onClick={(): void => handleTabClick('addresses')}
                >
                  Addresses
                </div>
                <div
                  className={`account__tab orders ${activeTab === 'orders' ? 'active' : ''}`}
                  onClick={(): void => handleTabClick('orders')}
                >
                  Orders
                </div>
              </div>
              <div className="account__details">
                <div className="account__details_right-side">
                  {activeTab === 'general' && (
                    <>
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
                    </>
                  )}
                  {activeTab === 'security' && (
                    <>
                      <UniversalInputWithError
                        onChange={(e): void => handleInputChange('password', e)}
                        changeError={setShowErrorPassword}
                        showError={showErrorPassword}
                        value={userProfile.password}
                        validationFunction={isPasswordValid}
                        placeholder="New password"
                        labelText="New password"
                        labelFor="password"
                        type="password"
                        isPassword={true}
                        classNameLabel="account__label"
                        classNameWrapperPass="account__input input"
                        classNameInputPass="account__input_form password"
                        classNameBtnPass="account__input_btn"
                        classNameInput="account__input input last-name-input"
                        classNameError="account__error-message"
                        disabled={!isEditing}
                      />
                      <UniversalInputWithError
                        onChange={(e): void => handleInputChange('password', e)}
                        changeError={setShowErrorPassword}
                        showError={showErrorPassword}
                        value={userProfile.password}
                        validationFunction={isPasswordValid}
                        placeholder="New password"
                        labelText="New password"
                        labelFor="password"
                        type="password"
                        isPassword={true}
                        classNameLabel="account__label"
                        classNameWrapperPass="account__input input"
                        classNameInputPass="account__input_form password"
                        classNameBtnPass="account__input_btn"
                        classNameInput="account__input input last-name-input"
                        classNameError="account__error-message"
                        disabled={!isEditing}
                      />
                    </>
                  )}
                </div>
                <div className="account__details_left-side">
                  {activeTab === 'general' && (
                    <>
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
                      <UniversalInputWithError
                        onChange={(e): void => handleInputChange('dateOfBirth', e)}
                        changeError={setShowErrorDateOfBirth}
                        showError={showErrorDateOfBirth}
                        value={userProfile.dateOfBirth}
                        validationFunction={isDateValid}
                        labelText="Date of Birth"
                        labelFor="dateOfBirth"
                        type="date"
                        classNameLabel="account__label"
                        classNameInput="account__input input date-of-birth"
                        classNameError="account__error-message"
                        disabled={!isEditing}
                      />
                    </>
                  )}
                </div>
                <div className="account__btn-wrapper">
                  {isEditing ? (
                    <>
                      <button className="btn" onClick={handleSaveClick}>
                        Save
                      </button>
                      <button className="btn" onClick={handleCancelClick}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button className="btn" onClick={handleEditClick}>
                      Edit profile
                    </button>
                  )}
                </div>
              </div>
            </>
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
