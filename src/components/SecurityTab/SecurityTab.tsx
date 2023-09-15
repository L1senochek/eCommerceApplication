import { useState } from 'react';
import UniversalInputWithError from '../UniversalInputWithError/UniversalInputWithError';
import EditButtons from '../EditButtons/EditButtons';
import isPasswordValid from '../../utils/validationFunctions/isPasswordValid/isPasswordValid';

const SecurityTab = (): JSX.Element => {
  const [showErrorOldPassword, setShowErrorOldPassword] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);
  const [showErrorConfirmPassword, setShowErrorConfirmPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  // const [editedProfile, setEditedProfile] = useState<Customer | null>(null);
  const [isCancelClick, setIsCancelClick] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveClick = (): void => {
    if (
      !showErrorOldPassword &&
      !showErrorPassword &&
      !showErrorConfirmPassword &&
      newPassword !== confirmPassword
    ) {
      // sent to eCom

      console.log(oldPassword, newPassword, 444444);
      setIsEditing(false);
    }
  };

  const handleEditClick = (): void => {
    // setEditedProfile(userProfile ? { ...userProfile } : null);
    // console.log(111111, userProfile, editedProfile);
    setIsEditing(true);
    setIsCancelClick(false);
    console.log(isCancelClick, 123554);
  };

  const handleCancelClick = (): void => {
    setShowErrorOldPassword(false);
    setShowErrorPassword(false);
    setShowErrorConfirmPassword(false);

    setIsCancelClick(true);
    setIsEditing(false);
  };

  return (
    <>
      <div className="account__details_right-side">
        <UniversalInputWithError
          onChange={setOldPassword}
          changeError={setShowErrorOldPassword}
          showError={showErrorOldPassword}
          value={oldPassword}
          validationFunction={isPasswordValid}
          placeholder="Old password"
          labelText="Old password"
          labelFor="oldPassword"
          type="password"
          isPassword={true}
          classNameLabel="account__label"
          classNameWrapperPass="account__input input"
          classNameInputPass="account__input_form old-password"
          classNameBtnPass="account__input_btn"
          classNameInput="account__input input last-name-input"
          classNameError="account__error-message"
          disabled={!isEditing}
        />
        <UniversalInputWithError
          onChange={setNewPassword}
          changeError={setShowErrorPassword}
          showError={showErrorPassword}
          value={newPassword}
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
          onChange={setConfirmPassword}
          changeError={setShowErrorConfirmPassword}
          showError={showErrorConfirmPassword}
          value={confirmPassword}
          validationFunction={isPasswordValid}
          placeholder="Confirm password"
          labelText="Confirm password"
          labelFor="confirmPassword"
          type="password"
          classNameLabel="account__label"
          classNameWrapperPass="account__input input"
          classNameInputPass="account__input_form confirm-password"
          classNameBtnPass="account__input_btn"
          classNameInput="account__input input last-name-input"
          classNameError="account__error-message"
          isConfirmPassword={true}
          isPasswordsMatch={newPassword === confirmPassword}
          disabled={!isEditing}
        />
      </div>
      <div className="account__details_left-side"></div>
      <EditButtons
        isEditing={isEditing}
        onSaveClick={handleSaveClick}
        onCancelClick={handleCancelClick}
        onEditClick={handleEditClick}
      />
    </>
  );
};

export default SecurityTab;
