import React, { ChangeEvent } from 'react';
import './DateOfBirthInput.scss';
import LabelInput from '../LabelInput/LabelInput';
import isDateValid from '../../utils/validationFunctions/isDateValid/isDateValid';

interface IDateOfBirthInputProps {
  onChange: (value: string) => void;
  changeError: (error: boolean) => void;
  showError: boolean;
  value: string;
}

const DateOfBirthInput = ({
  onChange,
  changeError,
  showError,
  value,
}: IDateOfBirthInputProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const dateOfBirthValue = event.target.value;
    onChange(dateOfBirthValue);

    if (isDateValid(dateOfBirthValue).status) {
      showError = false;
      changeError(showError);
    } else {
      showError = true;
      changeError(showError);
    }
  };

  return (
    <>
      <LabelInput htmlFor="dateOfBirth">Date of Birth</LabelInput>
      <input
        type="date"
        className={`authentication-form__date-of-birth date-of-birth input ${
          showError ? 'input-error' : ''
        }`}
        value={value}
        onChange={handleChange}
      />
      {showError && (
        <p className="authentication-form__error-message error-message date-of-birth">
          {isDateValid(value).text}
        </p>
      )}
    </>
  );
};

export default DateOfBirthInput;
