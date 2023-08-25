import { ChangeEvent } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import isTextInputValidation from '../../utils/isTextInputValidation/isTextInputValidation';

interface IFirstnameInputProps {
  onChange: (value: string) => void;
  changeError: (error: boolean) => void;
  showError: boolean;
  value: string;
}

const FirstnameInput = ({
  onChange,
  changeError,
  showError,
  value,
}: IFirstnameInputProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const fistNameValue = event.target.value;
    onChange(fistNameValue);

    if (isTextInputValidation(fistNameValue).status) {
      showError = false;
      changeError(showError);
    } else {
      showError = true;
      changeError(showError);
    }
  };

  return (
    <>
      <LabelInput classLabel="first-name-input" htmlFor="first-name-input">
        Firstname
      </LabelInput>
      <input
        type="text"
        placeholder="Firstname"
        className={`authentication-form__input input first-name-input ${
          showError ? 'input-error' : ''
        }`}
        onChange={handleChange}
        value={value}
      />
      {showError && (
        <p className={`authentication-form__error-message error-message`}>
          {isTextInputValidation(value).text}
        </p>
      )}
    </>
  );
};

export default FirstnameInput;
