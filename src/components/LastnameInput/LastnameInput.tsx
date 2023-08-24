import { ChangeEvent, useEffect, useState } from 'react';
import LabelInput from '../LabelInput/LabelInput';

interface ILastnameInputProps {
  onChange: (value: string) => void;
  showError: boolean;
  value: string;
}

const LastnameInput = ({ onChange, showError, value }: ILastnameInputProps): JSX.Element => {
  const [lastnameError, setLastnameError] = useState('');

  const validateLastnameInput = (value: string): string => {
    return !value.length ? 'Should`t be empty' : '';
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  useEffect(() => {
    if (showError) {
      setLastnameError(validateLastnameInput(value));
    }
  }, [value, showError]);

  return (
    <>
      <LabelInput classLabel="last-name-input" htmlFor="last-name-input">
        Lastname
      </LabelInput>
      <input
        type="text"
        placeholder="LastName"
        className="authentication-form__input input last-name-input"
        onChange={handleChange}
        value={value}
      />
      {showError && lastnameError && (
        <p className={`authentication-form__error-message error-message`}>{lastnameError}</p>
      )}
    </>
  );
};

export default LastnameInput;
