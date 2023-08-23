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
// import CheckboxUseShippingAsBilling from '../CheckboxUseShippingAsBilling/CheckboxUseShippingAsBilling';
// import { executeCustomerRequest } from '../../api/clientApi';
import CheckboxUseAsDefault from '../CheckboxAsDefault/CheckboxAsDefault';
import FieldsetLegendForm from '../FieldsetLegendForm/FieldsetLegendForm';
import SelectCountry from '../SelectCountry/SelectCountry';

const RegistrationForm = (): JSX.Element => {
  const [showError, setShowError] = useState(false);
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([
    {
      country: 'US',
      city: '',
      streetName: '',
      postalCode: '',
    },
  ]);
  const [showSecondForm, setShowSecondForm] = useState(false);
  // const [useShippingAsBillingChecked, setUseShippingAsBillingChecked] = useState(false);
  const [useAsDefault, setUseAsDefaultChecked] = useState(false);
  const [selectedCountryShipping, setSelectedCountryShipping] = useState('US');

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

  // const handleShippingAddress = (): void => {
  //   setShipping(shipping);
  // };

  const handleUseAsDefaultChange = (): void => {
    setUseAsDefaultChecked(!useAsDefault);
  };
  // const handleUseShippingAsBillingChange = (): void => {
  //   setUseShippingAsBillingChecked(!useShippingAsBillingChecked);
  // };

  useEffect(() => {
    if (!showSecondForm) {
      setAddresses((prevAddresses) => prevAddresses.slice(0, 1));
    }
  }, [showSecondForm]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    console.log(event);
    const dataAddresses = showSecondForm
      ? { ...addresses[0], ...addresses[1] }
      : { ...addresses[0], ...addresses[0] };
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

    // if (addresses.length < 2) {
    //   const newAddress = { ...addresses[0] };
    //   setAddresses((prevAddresses) => [newAddress, ...prevAddresses]);
    //   console.log(1);
    // } else
    if (!showSecondForm) {
      setAddresses((prevAddresses) => prevAddresses.slice(0, 1));
      console.log(2);
    } else {
      setAddresses((prevAddresses) => [...prevAddresses]);
      console.log(3);
    }
    console.log('Form Data:', formData);

    // const response = await executeCustomerRequest(formData);
    // console.log('Response registr:', response);
    setShowError(true);
  };

  console.log(selectedCountryShipping);
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
      {/* /////////////// */}
      <FieldsetLegendForm
        classNameFieldset="authentication-form__address shipping"
        classNameLegend="authentication-form__address-header shipping"
        fieldsetLegendTitle="Shipping"
      >
        <LabelInput classLabel="authentication-form__address-label country" htmlFor="country">
          Country
        </LabelInput>
        <SelectCountry
          value={selectedCountryShipping}
          setValueSelect={setSelectedCountryShipping}
        />
      </FieldsetLegendForm>
      {/* /////////////// */}
      <AddressInput
        fieldsetLegend="Shipping"
        onChange={(newAddress: Address): void => handleAddressChange(newAddress, 0)}
        index={0}
        showError={showError}
      />
      <div className="authentication-form__checkboxes">
        {/* <CheckboxUseShippingAsBilling
          checked={useShippingAsBillingChecked}
          onChange={handleUseShippingAsBillingChange}
        /> */}
        <CheckboxAddBilling checked={showSecondForm} onChange={handleCheckboxChange} />
        <CheckboxUseAsDefault checked={useAsDefault} onChange={handleUseAsDefaultChange} />
      </div>
      {showSecondForm && (
        <AddressInput
          fieldsetLegend="Billing"
          onChange={(newAddress: Address): void => handleAddressChange(newAddress, 1)}
          index={1}
          showError={showError}
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
