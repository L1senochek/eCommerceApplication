import React, { ChangeEvent, useEffect, useState } from 'react';

interface SelectCountryProps {
  showError: boolean;
  value: string;
  setValueAddres: (value: string) => void;
  classNameInput: string;
  placeholderInput: string;
}

const InputAddres = ({
  showError,
  value,
  setValueAddres,
  classNameInput,
  placeholderInput,
}: SelectCountryProps): JSX.Element => {
  const [InputAddresError, setInputAddresError] = useState('');

  const validateInputAddres = (inputValue: string): string =>
    !inputValue.trim() ? 'Shouldn`t be empty' : '';
  // if (!inputValue.trim()) {
  //   return "Shouldn't be empty";
  // } else {
  //   return '';
  // }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    setValueAddres(inputValue);

    if (showError) {
      const error = validateInputAddres(inputValue);
      setInputAddresError(error);
    }
  };

  useEffect(() => {
    if (showError) {
      setInputAddresError(validateInputAddres(value));
    }
  }, [showError, value]);

  return (
    <>
      <input
        type="text"
        className={`authentication-form__input address-input input ${classNameInput} ${
          showError && InputAddresError ? 'input-error' : ''
        }`}
        placeholder={placeholderInput}
        value={value}
        onChange={handleChange}
      />
      {showError && InputAddresError && (
        <p
          className={`authentication-form__error-message error-message input-addres-${classNameInput}`}
        >
          {InputAddresError}
        </p>
      )}
    </>
  );
};

export default InputAddres;
