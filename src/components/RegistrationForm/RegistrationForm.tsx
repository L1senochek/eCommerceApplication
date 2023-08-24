import { useState, FormEvent } from 'react';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import LabelInput from '../LabelInput/LabelInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import UserEmailInput from '../UserEmailInput/UserEmailInput';
import Button from '../Button/Button';
import LinkTo from '../LinkTo/LinkTo';
import LinkToWithTextInWrapper from '../LinkToWithTextInWrapper/LinkToWithTextInWrapper';
import './RegistrationForm.scss';
import DateOfBirthInput from '../DateOfBirthInput/DateOfBirthInput';
// import { Address } from '../AddressInput/AddressInput';
import React from 'react';
import CheckboxAddBilling from '../CheckboxAddBilling/CheckboxAddBilling';
import CheckboxUseAsDefault from '../CheckboxAsDefault/CheckboxAsDefault';
import FieldsetLegendForm from '../FieldsetLegendForm/FieldsetLegendForm';
import { executeCustomerRequest } from '../../api/clientApi';
import FirstnameInput from '../FirstnameInput/FirstnameInput';
import LastnameInput from '../LastnameInput/LastnameInput';

const RegistrationForm = (): JSX.Element => {
  const [showError, setShowError] = useState(false);
  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  // const [addresses, setAddresses] = useState<Address[]>([
  //   {
  //     country: 'US',
  //     city: '',
  //     streetName: '',
  //     postalCode: '',
  //   },
  // ]);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [useAsDefault, setUseAsDefaultChecked] = useState(false);
  const [selectedCountryShipping, setSelectedCountryShipping] = useState('US');
  const [addressValueCountryShipping, setAddressValueCountryShipping] = useState('');
  const [addressValueStreetNameShipping, setAddressValueStreetNameShipping] = useState('');
  const [addressValuePostalCodeShipping, setAddressValuePostalCodeShipping] = useState('');
  const [selectedCountryBilling, setSelectedCountryBilling] = useState('US');
  const [addressValueCountryBilling, setAddressValueCountryBilling] = useState('');
  const [addressValueStreetNameBilling, setAddressValueStreetNameBilling] = useState('');
  const [addressValuePostalCodeBilling, setAddressValuePostalCodeBilling] = useState('');

  const updateError = (error: boolean): void => {
    console.log(error);
    setShowError(error);
  };

  const handleFirstNameChange = (newFistname: string): void => {
    setUserFirstname(newFistname);
  };

  const handleLastNameChange = (newLastname: string): void => {
    setUserLastname(newLastname);
  };

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

  const handleCheckboxChange = (): void => {
    setShowSecondForm(!showSecondForm);
  };

  const handleUseAsDefaultChange = (): void => {
    setUseAsDefaultChecked(!useAsDefault);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    console.log(event);
    const shippingAddres = {
      country: selectedCountryShipping,
      city: addressValueCountryShipping,
      streetName: addressValueStreetNameShipping,
      postalCode: addressValuePostalCodeShipping,
    };
    const billingAddres = {
      country: selectedCountryBilling,
      city: addressValueCountryBilling,
      streetName: addressValueStreetNameBilling,
      postalCode: addressValuePostalCodeBilling,
    };
    const dataAddresses = showSecondForm
      ? [shippingAddres, billingAddres]
      : [shippingAddres, shippingAddres];
    const defaultAddresses = useAsDefault ? { defaultShippingAddress: 0 } : {};
    const formData = {
      email: `${userEmail}`,
      password: password,
      confirmPassword: confirmPassword,
      dateOfBirth: dateOfBirth,
      addresses: dataAddresses,
      shippingAddresses: [0],
      billingAddresses: [1],
      ...defaultAddresses,
    };
    console.log('fistname', userFirstname);
    console.log('Form Data:', formData);

    const response = await executeCustomerRequest(formData);
    console.log('Response registr:', response);
    setShowError(true);
  };

  return (
    <AuthenticationForm onSubmit={handleSubmit} titleText="Create a new account">
      <FirstnameInput
        onChange={handleFirstNameChange}
        changeError={updateError}
        showError={showError}
        value={userFirstname}
      />
      <LastnameInput onChange={handleLastNameChange} showError={showError} value={userLastname} />
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
      {/* /////////////// */}
      <FieldsetLegendForm
        classNameFieldset="authentication-form__address shipping"
        classNameLegend="authentication-form__address-header shipping"
        fieldsetLegendTitle="Shipping"
        showError={showError}
        selectedCountry={selectedCountryShipping}
        setSelectedCountry={setSelectedCountryShipping}
        addressValueCountry={addressValueCountryShipping}
        setAddressValueCountry={setAddressValueCountryShipping}
        addressValueStreetName={addressValueStreetNameShipping}
        setAddressValueStreetName={setAddressValueStreetNameShipping}
        addressValuePostalCode={addressValuePostalCodeShipping}
        setAddressValuePostalCode={setAddressValuePostalCodeShipping}
      />
      {/* /////////////// */}
      {/* <AddressInput
        fieldsetLegend="Shipping"
        onChange={(newAddress: Address): void => handleAddressChange(newAddress, 0)}
        index={0}
        showError={showError}
      /> */}
      <div className="authentication-form__checkboxes">
        {/* <CheckboxUseShippingAsBilling
          checked={useShippingAsBillingChecked}
          onChange={handleUseShippingAsBillingChange}
        /> */}
        <CheckboxUseAsDefault checked={useAsDefault} onChange={handleUseAsDefaultChange} />
        <CheckboxAddBilling checked={showSecondForm} onChange={handleCheckboxChange} />
      </div>
      {showSecondForm && (
        // <AddressInput
        //   fieldsetLegend="Billing"
        //   onChange={(newAddress: Address): void => handleAddressChange(newAddress, 1)}
        //   index={1}
        //   showError={showError}
        // />
        <FieldsetLegendForm
          classNameFieldset="authentication-form__address builling"
          classNameLegend="authentication-form__address-header builling"
          fieldsetLegendTitle="Builling"
          showError={showError}
          selectedCountry={selectedCountryBilling}
          setSelectedCountry={setSelectedCountryBilling}
          addressValueCountry={addressValueCountryBilling}
          setAddressValueCountry={setAddressValueCountryBilling}
          addressValueStreetName={addressValueStreetNameBilling}
          setAddressValueStreetName={setAddressValueStreetNameBilling}
          addressValuePostalCode={addressValuePostalCodeBilling}
          setAddressValuePostalCode={setAddressValuePostalCodeBilling}
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
