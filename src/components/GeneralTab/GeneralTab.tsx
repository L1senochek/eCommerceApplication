import { useState } from 'react';
import UniversalInputWithError from '../UniversalInputWithError/UniversalInputWithError';
import { Customer } from '@commercetools/platform-sdk';
import isTextInputValid from '../../utils/validationFunctions/isTextInputValid/isTextInputValid';
import isDateValid from '../../utils/validationFunctions/isDateValid/isDateValid';
import isEmailValid from '../../utils/validationFunctions/isEmailValid/isEmailValid';
import IAccountTab from '../../model/components/AccountTab/AccountTab';
import './general-tab.scss';
import EditButtons from '../EditButtons/EditButtons';

const GeneralTab = ({ userProfile, onInputChange, setUserProfile }: IAccountTab): JSX.Element => {
  const [showErrorFirstname, setShowErrorFirstname] = useState(false);
  const [showErrorLastname, setShowErrorLastname] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorDateOfBirth, setShowErrorDateOfBirth] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<Customer | null>(null);
  const [isCancelClick, setIsCancelClick] = useState(false);

  const handleSaveClick = (): void => {
    if (
      !showErrorFirstname &&
      !showErrorLastname &&
      !showErrorEmail &&
      !showErrorDateOfBirth &&
      userProfile &&
      userProfile.firstName &&
      userProfile.lastName &&
      userProfile.dateOfBirth
    ) {
      // sent to eCom
      onInputChange('firstName', userProfile.firstName);
      onInputChange('lastName', userProfile.lastName);
      onInputChange('email', userProfile.email);
      onInputChange('dateOfBirth', userProfile.dateOfBirth);

      setIsEditing(false);
      console.log(userProfile, 444444);
    }
  };

  const handleEditClick = (): void => {
    setEditedProfile(userProfile ? { ...userProfile } : null);
    console.log(111111, userProfile, editedProfile);
    setIsEditing(true);
    setIsCancelClick(false);
    console.log(isCancelClick, 123554);
  };

  const handleCancelClick = (): void => {
    setShowErrorFirstname(false);
    setShowErrorLastname(false);
    setShowErrorEmail(false);
    setShowErrorDateOfBirth(false);

    setIsCancelClick(true);
    setIsEditing(false);

    if (
      editedProfile &&
      editedProfile.firstName &&
      editedProfile.lastName &&
      editedProfile.dateOfBirth
    ) {
      onInputChange('firstName', editedProfile.firstName);
      onInputChange('lastName', editedProfile.lastName);
      onInputChange('email', editedProfile.email);
      onInputChange('dateOfBirth', editedProfile.dateOfBirth);

      setUserProfile(editedProfile);
    }
  };

  return (
    <>
      <div className="account__details_right-side">
        <UniversalInputWithError
          onChange={(e): void => onInputChange('firstName', e)}
          changeError={setShowErrorFirstname}
          showError={showErrorFirstname}
          value={isCancelClick ? editedProfile?.firstName : userProfile?.firstName}
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
          onChange={(e): void => onInputChange('lastName', e)}
          changeError={setShowErrorLastname}
          showError={showErrorLastname}
          value={userProfile?.lastName}
          validationFunction={isTextInputValid}
          placeholder="Lastname"
          labelText="Lastname"
          labelFor="lastNameInput"
          type="text"
          classNameLabel="account__label"
          classNameInput="account__input input last-name-input"
          disabled={!isEditing}
        />
      </div>
      <div className="account__details_left-side">
        <>
          <UniversalInputWithError
            onChange={(e): void => onInputChange('email', e)}
            changeError={setShowErrorEmail}
            showError={showErrorEmail}
            value={userProfile?.email}
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
            onChange={(e): void => onInputChange('dateOfBirth', e)}
            changeError={setShowErrorDateOfBirth}
            showError={showErrorDateOfBirth}
            value={userProfile?.dateOfBirth}
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
      </div>
      <EditButtons
        isEditing={isEditing}
        onSaveClick={handleSaveClick}
        onCancelClick={handleCancelClick}
        onEditClick={handleEditClick}
      />
    </>
  );
};

export default GeneralTab;
