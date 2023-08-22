import { useState, FormEvent, useEffect } from 'react';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import LabelInput from '../LabelInput/LabelInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import UserEmailInput from '../UserEmailInput/UserEmailInput';
import Button from '../Button/Button';
import LinkTo from '../LinkTo/LinkTo';
import LinkToWithTextInWrapper from '../LinkToWithTextInWrapper/LinkToWithTextInWrapper';
import './RegistrationForm.scss';
import DateOfBirthInput from '../DateOfBirthInput/DateOfBirthInput';
import AddressInput, { Address } from '../AddressInput/AddressInput';
import React from 'react';
import CheckboxAddBilling from '../CheckboxAddBilling/CheckboxAddBilling';
import CheckboxUseAsDefault from '../CheckboxUseDefault/CheckboxUseDefault';

const RegistrationForm = (): JSX.Element => {
  const [showError, setShowError] = useState(false);
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([
    {
      country: '',
      city: '',
      streetName: '',
      postalCode: '',
    },
  ]);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [useAsDefaultChecked, setUseAsDefaultChecked] = useState(false);

  const handleEmailChange = (newEmail: string): void => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword: string): void => {
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (newConfirmPassword: string): void => {
    setConfirmPassword(newConfirmPassword);
  };

  const handleDateOfBirthChange = (newDate: string): void => {
    newDate ? setIsFormFilled(true) : setIsFormFilled(false);
    setDateOfBirth(newDate);
  };

  const handleAddressChange = (newAddress: Address, index: number): void => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses[index] = newAddress;
      return updatedAddresses;
    });

    console.log(newAddress);
  };

  const handleCheckboxChange = (): void => {
    setShowSecondForm(!showSecondForm);
  };

  useEffect(() => {
    if (!showSecondForm) {
      setAddresses((prevAddresses) => prevAddresses.slice(0, 1));
    }
  }, [showSecondForm, useAsDefaultChecked]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
    const formData = {
      email: userEmail,
      password: password,
      confirmPassword: confirmPassword,
      dateOfBirth: dateOfBirth,
      addresses: addresses,
    };

    if (useAsDefaultChecked && addresses.length < 2) {
      const newAddress = { ...addresses[0] };
      setAddresses((prevAddresses) => [newAddress, ...prevAddresses]);
      console.log(1);
    } else if (!showSecondForm && !useAsDefaultChecked) {
      setAddresses((prevAddresses) => prevAddresses.slice(0, 1));
      console.log(2);
    } else {
      setAddresses((prevAddresses) => [...prevAddresses]);
      console.log(3);
    }
    console.log('Form Data:', formData);
    setShowError(true);
  };

  const handleUseAsDefaultChange = (): void => {
    setUseAsDefaultChecked(!useAsDefaultChecked);
  };

  return (
    <AuthenticationForm onSubmit={handleSubmit} titleText="Create a new account">
      <LabelInput htmlFor="userEmail">Email</LabelInput>
      <UserEmailInput showError={showError} onEmailChange={handleEmailChange} />
      <LabelInput htmlFor="password">Password</LabelInput>
      <PasswordInput
        placeholder="Password"
        showError={showError}
        onChange={handlePasswordChange}
        passwordValue={password}
      />
      <LabelInput htmlFor="confirmPassword">Confirm Password</LabelInput>
      <PasswordInput
        placeholder="Confirm Password"
        showError={showError}
        confirmPassword={true}
        onChange={handleConfirmPasswordChange}
        passwordValue={confirmPassword}
        passwordsMatch={showError && password !== confirmPassword}
      />
      {showError && password !== confirmPassword && (
        <p className="authentication-form__error-message error-message confirm-password">
          Passwords don`t match
        </p>
      )}
      <LabelInput htmlFor="dateOfBirth">Date of Birth</LabelInput>
      <DateOfBirthInput
        showError={showError}
        onChange={handleDateOfBirthChange}
        dateValue={dateOfBirth}
        isFormFilled={isFormFilled}
      />
      <AddressInput
        fieldsetLegend="Shipping"
        onChange={(newAddress: Address): void => handleAddressChange(newAddress, 0)}
        index={0}
      />
      <div className="authentication-form__checkboxes">
        <CheckboxUseAsDefault checked={useAsDefaultChecked} onChange={handleUseAsDefaultChange} />
        <CheckboxAddBilling checked={showSecondForm} onChange={handleCheckboxChange} />
      </div>
      {showSecondForm && (
        <AddressInput
          fieldsetLegend="Billing"
          onChange={(newAddress: Address): void => handleAddressChange(newAddress, 1)}
          index={1}
        />
      )}
      <Button type="submit" text="Sign up" className="authentication-form__submit btn" />
      <LinkToWithTextInWrapper text="Already have an account? ">
        <LinkTo to={'/loginForm'} text={'Login here'} />
      </LinkToWithTextInWrapper>
    </AuthenticationForm>
  );
};

export default RegistrationForm;
