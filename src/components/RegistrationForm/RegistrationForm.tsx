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
import AddressInput, { Address } from '../AddressInput/AddressInput';

const RegistrationForm = (): JSX.Element => {
  const [showError, setShowError] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [address, setAddress] = useState<Address>({
    country: '',
    city: '',
    streetName: '',
    postalCode: '',
  });

  const handlePasswordChange = (newPassword: string): void => {
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (newConfirmPassword: string): void => {
    setConfirmPassword(newConfirmPassword);
  };

  const handleDateOfBirthChange = (newDate: string): void => {
    newDate ? setIsFormFilled(true) : setIsFormFilled(false);
    // if (newDate) {
    //   setIsFormFilled(true);
    // } else {
    //   setIsFormFilled(false);
    // }
    setDateOfBirth(newDate);
  };

  const handleAddressChange = (newAddress: Address): void => {
    setAddress(newAddress);

    console.log(newAddress);
  };

  const submit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event);
    const formData = {
      email: '', // Get value from UserEmailInput component
      password: password,
      confirmPassword: confirmPassword,
      dateOfBirth: dateOfBirth,
      address: address, // Get value from AddressInput component
    };

    console.log('Form Data:', formData);
    setShowError(true);
  };

  return (
    <AuthenticationForm onSubmit={submit} titleText="Create a new account">
      <LabelInput htmlFor="userEmail">Email</LabelInput>
      <UserEmailInput showError={showError} />
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
      <AddressInput onChange={handleAddressChange} />
      <Button type="submit" text="Sign up" className="authentication-form__submit btn" />
      <LinkToWithTextInWrapper text="Already have an account? ">
        <LinkTo to={'/loginForm'} text={'Login here'} />
      </LinkToWithTextInWrapper>
    </AuthenticationForm>
  );
};

export default RegistrationForm;
