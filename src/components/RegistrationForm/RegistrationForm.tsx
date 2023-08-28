import { useState, FormEvent, useEffect } from 'react';
import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';

import Button from '../Button/Button';
import LinkTo from '../LinkTo/LinkTo';
import LinkToWithTextInWrapper from '../LinkToWithTextInWrapper/LinkToWithTextInWrapper';
import './registrationForm.scss';
import FieldsetLegendForm from '../FieldsetLegendForm/FieldsetLegendForm';
import { executeCustomerRequest } from '../../api/clientApi';
import UniversalInputWithError from '../UniversalInputWithError/UniversalInputWithError';
import isTextInputValid from '../../utils/validationFunctions/isTextInputValid/isTextInputValid';
import isPasswordValid from '../../utils/validationFunctions/isPasswordValid/isPasswordValid';
import isEmailValid from '../../utils/validationFunctions/isEmailValid/isEmailValid';
import isDateValid from '../../utils/validationFunctions/isDateValid/isDateValid';
import CheckboxComponent from '../CheckboxComponent/CheckboxComponent';
import { FAILED_TO_CREATE_CUSTOMER } from '../../utils/constants/constants';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { loginUserWithPassApi } from '../../api/loginUserWithPass';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = (): JSX.Element => {
  const [showErrorCreate, setShowErrorCreate] = useState(false);
  const [showErrors, setShowErrors] = useState(true);
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

  const [showErrorAddressCountryBilling, setShowErrorAddressCountryBilling] = useState(false);
  const [showErrorAddressStreetNameBilling, setShowErrorAddressStreetNameBilling] = useState(false);
  const [showErrorAddressPostalCodeBilling, setShowErrorAddressPostalCodeBilling] = useState(false);

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
  const navigation = useNavigate();

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
    setShowErrors(false);

    if (
      !showErrorFirstname &&
      !showErrorLastname &&
      !showErrorEmail &&
      !showErrorPassword &&
      !showErrorConfirmPassword &&
      !showErrorDateOfBirth &&
      !showErrorAddressCountryShipping &&
      !showErrorAddressStreetNameShipping &&
      !showErrorAddressPostalCodeShipping &&
      userLastname &&
      userEmail &&
      password &&
      confirmPassword &&
      dateOfBirth &&
      addressValueCountryShipping &&
      addressValueStreetNameShipping &&
      addressValuePostalCodeShipping
    ) {
      const response = await executeCustomerRequest(formData);

      if (response === FAILED_TO_CREATE_CUSTOMER) {
        setShowErrorCreate(true);
      } else {
        setShowErrorCreate(false);
        const responseLoginUser = await loginUserWithPassApi(userEmail, password);
        // add token
        if (responseLoginUser) {
          // router to main page
          navigation('/');
        }
      }
    }
  };

  useEffect(() => {
    if (
      !showErrors &&
      !showErrorFirstname &&
      !showErrorLastname &&
      !showErrorEmail &&
      !showErrorPassword &&
      !showErrorConfirmPassword &&
      !showErrorDateOfBirth &&
      !showErrorAddressStreetNameShipping &&
      !showErrorAddressPostalCodeShipping &&
      !showErrorAddressStreetNameBilling &&
      !showErrorAddressPostalCodeBilling &&
      !userLastname &&
      !userEmail &&
      !password &&
      !confirmPassword &&
      !dateOfBirth &&
      !addressValueStreetNameShipping &&
      !addressValuePostalCodeShipping &&
      !addressValueCountryBilling &&
      !addressValueStreetNameBilling &&
      !addressValuePostalCodeBilling
    ) {
      setShowErrorFirstname(true);
      setShowErrorLastname(true);
      setShowErrorEmail(true);
      setShowErrorPassword(true);
      setShowErrorConfirmPassword(true);
      setShowErrorDateOfBirth(true);
      setShowErrorAddressCountryShipping(true);
      setShowErrorAddressStreetNameShipping(true);
      setShowErrorAddressPostalCodeShipping(true);
      setShowErrorAddressCountryBilling(true);
      setShowErrorAddressStreetNameBilling(true);
      setShowErrorAddressPostalCodeBilling(true);
    }
  }, [
    addressValueCountryBilling,
    addressValuePostalCodeBilling,
    addressValuePostalCodeShipping,
    addressValueStreetNameBilling,
    addressValueStreetNameShipping,
    confirmPassword,
    dateOfBirth,
    password,
    showErrors,
    showErrorAddressPostalCodeBilling,
    showErrorAddressPostalCodeShipping,
    showErrorAddressStreetNameBilling,
    showErrorAddressStreetNameShipping,
    showErrorConfirmPassword,
    showErrorDateOfBirth,
    showErrorEmail,
    showErrorFirstname,
    showErrorLastname,
    showErrorPassword,
    userEmail,
    userFirstname,
    userLastname,
  ]);

  return (
    <AuthenticationForm onSubmit={handleSubmit} titleText="Create a new account">
      <UniversalInputWithError
        value={userFirstname}
        onChange={setUserFirstname}
        showError={showErrorFirstname}
        changeError={setShowErrorFirstname}
        validationFunction={isTextInputValid}
        placeholder="Firstname"
        labelText="Firstname"
        labelFor="firstNameInput"
        type="text"
        classNameInput="authentication-form__input input first-name-input"
      />
      <UniversalInputWithError
        onChange={setUserLastname}
        changeError={setShowErrorLastname}
        showError={showErrorLastname}
        value={userLastname}
        validationFunction={isTextInputValid}
        placeholder="Lastname"
        labelText="Lastname"
        labelFor="lastNameInput"
        type="text"
        classNameInput="authentication-form__input input last-name-input"
      />
      <UniversalInputWithError
        onChange={setEmail}
        changeError={setShowErrorEmail}
        showError={showErrorEmail}
        value={userEmail}
        validationFunction={isEmailValid}
        placeholder="User@example.com"
        labelText="Email"
        labelFor="userEmail"
        type="text"
        classNameInput="authentication-form__input input useremail"
      />
      <UniversalInputWithError
        onChange={setPassword}
        changeError={setShowErrorPassword}
        showError={showErrorPassword}
        value={password}
        validationFunction={isPasswordValid}
        placeholder="Password"
        labelText="Password"
        labelFor="password"
        type="password"
        isPassword={true}
        classNameWrapperPass="authentication-form__input input"
        classNameInputPass="authentication-form__input_form password"
        classNameBtnPass="authentication-form__input_btn"
      />
      <UniversalInputWithError
        onChange={setConfirmPassword}
        changeError={setShowErrorConfirmPassword}
        showError={showErrorConfirmPassword}
        value={confirmPassword}
        validationFunction={isPasswordValid}
        placeholder="Confirm Password"
        labelText="Confirm Password"
        labelFor="confirmPassword"
        type="password"
        classNameWrapperPass="authentication-form__input input"
        classNameInputPass="authentication-form__input_form password"
        classNameBtnPass="authentication-form__input_btn"
        isConfirmPassword={true}
        isPasswordsMatch={password === confirmPassword}
      />
      <UniversalInputWithError
        onChange={setDateOfBirth}
        changeError={setShowErrorDateOfBirth}
        showError={showErrorDateOfBirth}
        value={dateOfBirth}
        validationFunction={isDateValid}
        labelText="Date of Birth"
        labelFor="dateOfBirth"
        type="date"
        classNameInput="authentication-form__date-of-birth date-of-birth input"
      />
      <FieldsetLegendForm
        selectedCountry={selectedCountryShipping}
        addressValueCountry={addressValueCountryShipping}
        addressValueStreetName={addressValueStreetNameShipping}
        addressValuePostalCode={addressValuePostalCodeShipping}
        setSelectedCountry={setSelectedCountryShipping}
        setAddressValueCountry={setAddressValueCountryShipping}
        setAddressValueStreetName={setAddressValueStreetNameShipping}
        setAddressValuePostalCode={setAddressValuePostalCodeShipping}
        showErrorAddressCountry={showErrorAddressCountryShipping}
        showErrorAddressStreetName={showErrorAddressStreetNameShipping}
        showErrorAddressPostalCode={showErrorAddressPostalCodeShipping}
        changeErrorAddressCountry={setShowErrorAddressCountryShipping}
        changeErrorAddressStreetName={setShowErrorAddressStreetNameShipping}
        changeErrorAddressPostalCode={setShowErrorAddressPostalCodeShipping}
        classNameFieldset="authentication-form__address shipping"
        classNameLegend="authentication-form__address-header shipping"
        fieldsetLegendTitle="Shipping"
      />
      <div className="authentication-form__checkboxes">
        <CheckboxComponent
          checked={useAsDefault}
          onChange={(): void => setUseAsDefaultChecked(!useAsDefault)}
          classNameCheckbox="checkbox__input"
          classNameLabel="authentication-form__checkbox checkbox use-us-default"
          titleCheckbox="Use As Default"
        />
        <CheckboxComponent
          checked={showSecondForm}
          onChange={(): void => setShowSecondForm(!showSecondForm)}
          classNameCheckbox="checkbox__input"
          classNameLabel="authentication-form__checkbox checkbox add-billing"
          titleCheckbox="Add Billing Address"
        />
      </div>
      {showSecondForm && (
        <FieldsetLegendForm
          selectedCountry={selectedCountryBilling}
          addressValueCountry={addressValueCountryBilling}
          addressValueStreetName={addressValueStreetNameBilling}
          addressValuePostalCode={addressValuePostalCodeBilling}
          setSelectedCountry={setSelectedCountryBilling}
          setAddressValueCountry={setAddressValueCountryBilling}
          setAddressValueStreetName={setAddressValueStreetNameBilling}
          setAddressValuePostalCode={setAddressValuePostalCodeBilling}
          showErrorAddressCountry={showErrorAddressCountryBilling}
          showErrorAddressStreetName={showErrorAddressStreetNameBilling}
          showErrorAddressPostalCode={showErrorAddressPostalCodeBilling}
          changeErrorAddressCountry={setShowErrorAddressCountryBilling}
          changeErrorAddressStreetName={setShowErrorAddressStreetNameBilling}
          changeErrorAddressPostalCode={setShowErrorAddressPostalCodeBilling}
          classNameFieldset="authentication-form__address builling"
          classNameLegend="authentication-form__address-header builling"
          fieldsetLegendTitle="Builling"
        />
      )}
      <Button type="submit" text="Sign up" className="authentication-form__submit btn" />
      {showErrorCreate && (
        <ErrorMessage conditionError={showErrorCreate} valueTag={FAILED_TO_CREATE_CUSTOMER} />
      )}
      <LinkToWithTextInWrapper text="Already have an account? ">
        <LinkTo to={'/loginForm'} text={'Login here'} />
      </LinkToWithTextInWrapper>
    </AuthenticationForm>
  );
};

export default RegistrationForm;
