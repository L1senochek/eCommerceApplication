import { ChangeEvent, useEffect, useState } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import isNotEmptyValidation from '../../utils/validationFunctions/isNotEmptyValidation';
import changeTooltipText from '../../utils/tooltipTextChange/tooltipTextChange';

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
  const [firstnameError, setFirstnameError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const fistNameValue = event.target.value;
    onChange(fistNameValue);
    console.log(showError);
    if (showError) {
      setFirstnameError(
        changeTooltipText(fistNameValue, isNotEmptyValidation, 'Shouldn`t be Empty')
      );
    }
    if (isNotEmptyValidation(fistNameValue)) {
      showError = false;
      changeError(showError);
    } else {
      showError = true;
      changeError(showError);
    }
  };

  useEffect(() => {
    if (showError) {
      setFirstnameError(changeTooltipText(value, isNotEmptyValidation, 'Shouldn`t be Empty'));
    }
  }, [value, showError]);

  return (
    <>
      <LabelInput classLabel="first-name-input" htmlFor="first-name-input">
        Firstname
      </LabelInput>
      <input
        type="text"
        placeholder="Firstname"
        className="authentication-form__input input first-name-input"
        onChange={handleChange}
        value={value}
      />
      {showError && firstnameError && (
        <p className={`authentication-form__error-message error-message`}>{firstnameError}</p>
      )}
    </>
  );
};

export default FirstnameInput;
