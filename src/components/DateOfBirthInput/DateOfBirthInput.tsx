import React, { useEffect, useState } from 'react';
import './DateOfBirthInput.scss';

interface IDateOfBirthInputProps {
  showError: boolean;
  onChange: (newDate: string) => void;
  dateValue: string;
}

const DateOfBirthInput: React.FC<IDateOfBirthInputProps> = ({ showError, onChange, dateValue }) => {
  const [inputErrorClass, setInputErrorClass] = useState('');

  useEffect(() => {
    if (showError && dateValue === '') {
      setInputErrorClass('input-error');
    } else {
      setInputErrorClass('');
    }
  }, [showError, dateValue]);
  return (
    <>
      <input
        type="date"
        className={`authentication-form__date-of-birth date-of-birth input ${inputErrorClass}`}
        value={dateValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => onChange(e.target.value)}
      />
      {showError && dateValue === '' && (
        <p className="authentication-form__error-message error-message date-of-birth">
          Please enter your date of birth
        </p>
      )}
    </>
  );
};

export default DateOfBirthInput;
