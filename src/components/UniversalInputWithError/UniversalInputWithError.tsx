import { ChangeEvent, useState } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './DateOfBirthInput.scss';
import './PasswordInput.scss';
import IUniversalInputWithErrorProps from '../../model/components/UniversalInputWithError/UniversalInputWithError';

const UniversalInputWithError = ({
  value,
  onChange,
  showError,
  changeError,
  validationFunction,
  placeholder,
  labelText,
  labelFor,
  type,
  classNameLabel,
  classNameInput,
  classNameWrapperPass,
  classNameInputPass,
  classNameBtnPass,
  isPassword = false,
  isConfirmPassword = false,
  isPasswordsMatch,
}: IUniversalInputWithErrorProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const InputValue = event.target.value;
    onChange(InputValue);

    if (validationFunction(InputValue).status) {
      showError = false;
      changeError(showError);
    } else {
      showError = true;
      changeError(showError);
    }
  };

  return (
    <>
      <LabelInput htmlFor={labelFor} classNameLabel={classNameLabel}>
        {labelText}
      </LabelInput>
      {!isPassword && !isConfirmPassword && (
        <>
          <input
            id={labelFor}
            type={type}
            placeholder={placeholder}
            className={`${classNameInput} ${showError ? 'input-error' : ''}`}
            onChange={handleChange}
            value={value}
          />
          <ErrorMessage conditionError={showError} valueTag={`${validationFunction(value).text}`} />
        </>
      )}
      {(isPassword || isConfirmPassword) && (
        <>
          <div
            className={`${classNameWrapperPass} ${
              (!isPasswordsMatch && isConfirmPassword) || (isPassword && showError)
                ? 'input-error'
                : ''
            } ${isConfirmPassword ? 'confirm-password' : ''}`}
          >
            <input
              id={labelFor}
              type={showPassword ? 'text' : `${type}`}
              className={`${classNameInputPass}`}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />
            <button
              type="button"
              className={`${classNameBtnPass}`}
              onClick={(): void => setShowPassword(!showPassword)}
            ></button>
          </div>
          {isPassword && (
            <ErrorMessage
              conditionError={showError}
              valueTag={`${validationFunction(value).text}`}
            />
          )}
          {isConfirmPassword && (
            <ErrorMessage
              conditionError={!isPasswordsMatch && isConfirmPassword}
              valueTag={'Passwords don`t match'}
            />
          )}
        </>
      )}
    </>
  );
};

export default UniversalInputWithError;
