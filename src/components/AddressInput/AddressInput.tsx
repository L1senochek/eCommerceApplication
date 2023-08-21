import React, { useState } from 'react';
import LabelInput from '../LabelInput/LabelInput';

interface AddressInputProps {
  onChange: (address: Address) => void;
}

export interface Address {
  country: string;
  city: string;
  streetName: string;
  postalCode: string;
}

const AddressInput: React.FC<AddressInputProps> = ({ onChange }) => {
  const [address, setAddress] = useState<Address>({
    country: '',
    city: '',
    streetName: '',
    postalCode: '',
  });
  const [countryError, setCountryError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [streetNameError, setStreetNameError] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState(false);

  const handleChange = (field: keyof Address, value: string): void => {
    const updatedAddress = { ...address, [field]: value };
    onChange(updatedAddress);
    setAddress(updatedAddress);

    console.log(`Input "${field}" changed to: ${value}`);

    switch (field) {
      case 'country':
        setCountryError(false);
        break;
      case 'city':
        setCityError(false);
        break;
      case 'streetName':
        setStreetNameError(false);
        break;
      case 'postalCode':
        setPostalCodeError(false);
        break;
      default:
        break;
    }
  };

  const handleValidation = (): void => {
    setCountryError(address.country === '');
    setCityError(address.city === '');
    setStreetNameError(address.streetName === '');
    setPostalCodeError(address.postalCode === '');
  };

  return (
    <>
      <LabelInput classLabel="authentication-form__address-label country" htmlFor="country">
        Country
      </LabelInput>
      <input
        type="text"
        className={`authentication-form__input address-input input country ${
          countryError ? 'input-error' : ''
        }`}
        placeholder="Country"
        value={address.country}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleChange('country', e.target.value)
        }
        onBlur={handleValidation}
      />
      {countryError && (
        <p className="authentication-form__error-message error-message address-input country">
          Please fill a country
        </p>
      )}
      <LabelInput classLabel="authentication-form__address-label city" htmlFor="city">
        City
      </LabelInput>
      <input
        type="text"
        className={`authentication-form__input address-input input city ${
          cityError ? 'input-error' : ''
        }`}
        placeholder="City"
        value={address.city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleChange('city', e.target.value)
        }
        onBlur={handleValidation}
      />
      {cityError && (
        <p className="authentication-form__error-message error-message address-input city">
          Please fill a city
        </p>
      )}
      <LabelInput classLabel="authentication-form__address-label street-name" htmlFor="street-name">
        Street Name
      </LabelInput>
      <input
        type="text"
        className={`authentication-form__input address-input input street-name ${
          streetNameError ? 'input-error' : ''
        }`}
        placeholder="Street Name"
        value={address.streetName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleChange('streetName', e.target.value)
        }
        onBlur={handleValidation}
      />
      {streetNameError && (
        <p className="authentication-form__error-message error-message address-input street-name">
          Please fill a street name
        </p>
      )}
      <LabelInput classLabel="authentication-form__address-label postal-code" htmlFor="postal-code">
        Postal Code
      </LabelInput>
      <input
        type="text"
        className={`authentication-form__input address-input input postal-code ${
          postalCodeError ? 'input-error' : ''
        }`}
        placeholder="Postal Code"
        value={address.postalCode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleChange('postalCode', e.target.value)
        }
        onBlur={handleValidation}
      />
      {postalCodeError && (
        <p className="authentication-form__error-message error-message address-input postal-code">
          Please fill a postal code
        </p>
      )}
    </>
  );
};

export default AddressInput;
