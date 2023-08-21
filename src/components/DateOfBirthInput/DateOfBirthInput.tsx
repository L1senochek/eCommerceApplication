import React, { useEffect, useState } from 'react';
import './DateOfBirthInput.scss';

interface DateOfBirthInputProps {
  showError: boolean;
  onChange: (newDate: string) => void;
  dateValue: string;
  isFormFilled: boolean;
}

const DateOfBirthInput: React.FC<DateOfBirthInputProps> = ({
  showError,
  onChange,
  dateValue,
  isFormFilled,
}) => {
  const [inputErrorClass, setInputErrorClass] = useState('');

  useEffect(() => {
    if (showError && !isFormFilled && dateValue === '') {
      setInputErrorClass('input-error');
    } else {
      setInputErrorClass('');
    }
  }, [showError, isFormFilled, dateValue]);
  return (
    <>
      <input
        type="date"
        className={`authentication-form__date-of-birth date-of-birth input ${inputErrorClass}`}
        value={dateValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => onChange(e.target.value)}
      />
      {showError && !isFormFilled && dateValue === '' && (
        <p className="authentication-form__error-message error-message date-of-birth">
          Please enter your date of birth
        </p>
      )}
    </>
  );
};

export default DateOfBirthInput;
