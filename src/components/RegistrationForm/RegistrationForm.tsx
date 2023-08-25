import { useState, FormEvent } from 'react';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import LabelInput from '../LabelInput/LabelInput';

import Button from '../Button/Button';
import LinkTo from '../LinkTo/LinkTo';
import LinkToWithTextInWrapper from '../LinkToWithTextInWrapper/LinkToWithTextInWrapper';
import './RegistrationForm.scss';
import DateOfBirthInput from '../DateOfBirthInput/DateOfBirthInput';
import React from 'react';
import CheckboxAddBilling from '../CheckboxAddBilling/CheckboxAddBilling';
import CheckboxUseAsDefault from '../CheckboxAsDefault/CheckboxAsDefault';
import FieldsetLegendForm from '../FieldsetLegendForm/FieldsetLegendForm';
import { executeCustomerRequest } from '../../api/clientApi';
import FirstnameInput from '../FirstnameInput/FirstnameInput';
import LastnameInput from '../LastnameInput/LastnameInput';
import EmailInput from '../EmailInput/EmailInput';
import PasswordInput from '../UniversalPasswordInput/UniversalPasswordInput';

const RegistrationForm = (): JSX.Element => {
  const [showError, setShowError] = useState(false);
  const [showErrorFirstname, setShowErrorFirstname] = useState(false);
  const [showErrorLastname, setShowErrorLastname] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);
  const [showErrorConfirmPassword, setShowErrorConfirmPassword] = useState(false);

  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
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
    // console.log('fistname', userFirstname);
    // console.log('Form Data:', formData);
    console.log(showErrorFirstname);
    if (!showErrorFirstname) {
      const response = await executeCustomerRequest(formData);
      console.log('Response registr:', response);
      console.log(setShowError);
    }
  };

  return (
    <AuthenticationForm onSubmit={handleSubmit} titleText="Create a new account">
      <FirstnameInput
        onChange={setUserFirstname}
        changeError={setShowErrorFirstname}
        showError={showErrorFirstname}
        value={userFirstname}
      />
      <LastnameInput
        onChange={setUserLastname}
        changeError={setShowErrorLastname}
        showError={showErrorLastname}
        value={userLastname}
      />
      <EmailInput
        onChange={setEmail}
        changeError={setShowErrorEmail}
        showError={showErrorEmail}
        value={userEmail}
      />
      <PasswordInput
        onChange={setPassword}
        changeError={setShowErrorPassword}
        showError={showErrorPassword}
        value={password}
        placeholder="Password"
        labelText={'Password'}
        labelFor={'password'}
      />
      <PasswordInput
        onChange={setConfirmPassword}
        changeError={setShowErrorConfirmPassword}
        showError={showErrorConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm Password"
        labelText={'Confirm Password'}
        labelFor={'confirm-password'}
        isConfirmPassword={true}
        isPasswordsMatch={password === confirmPassword}
      />
      <LabelInput htmlFor="dateOfBirth">Date of Birth</LabelInput>
      <DateOfBirthInput showError={showError} onChange={setDateOfBirth} dateValue={dateOfBirth} />
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
        <CheckboxUseAsDefault
          checked={useAsDefault}
          onChange={(): void => setUseAsDefaultChecked(!useAsDefault)}
        />
        <CheckboxAddBilling
          checked={showSecondForm}
          onChange={(): void => setShowSecondForm(!showSecondForm)}
        />
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
