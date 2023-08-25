import { ChangeEvent } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import isTextInputValidation from '../../utils/isTextInputValid/isTextInputValid';

interface ILastnameInputProps {
  onChange: (value: string) => void;
  changeError: (error: boolean) => void;
  showError: boolean;
  value: string;
}

const LastnameInput = ({
  onChange,
  changeError,
  showError,
  value,
}: ILastnameInputProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const lastNameValue = event.target.value;
    onChange(lastNameValue);
    if (isTextInputValidation(lastNameValue).status) {
      showError = false;
      changeError(showError);
    } else {
      showError = true;
      changeError(showError);
    }
  };

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
      {showError && (
        <p className={`authentication-form__error-message error-message`}>
          {isTextInputValidation(value).text}
        </p>
      )}
    </>
  );
};

export default LastnameInput;
