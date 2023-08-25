import { ChangeEvent, useState } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import { IIsValidationFunction } from '../../model/utils/validationFunctions/isValidationFunction';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface IUniversalInputWithErrorProps {
  value: string;
  onChange: (value: string) => void;
  showError: boolean;
  changeError: (error: boolean) => void;
  validationFunction: IIsValidationFunction;
  labelText: string;
  labelFor: string;
  type: string;
  placeholder?: string;
  classNameLabel?: string;
  classNameInput?: string;
  classNameWrapperPass?: string;
  classNameInputPass?: string;
  classNameBtnPass?: string;
  isPassword?: boolean;
  isConfirmPassword?: boolean;
  isPasswordsMatch?: boolean;
}

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
          {/* {showError && (
            // <p className={`authentication-form__error-message error-message`}>
            //   {validationFunction(value).text}
            // </p>
            
          )} */}
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
          {/* {showError && !isConfirmPassword && (
            // <p className="authentication-form__error-message error-message password">
            //   {validationFunction(value).text}
            // </p>
            <ErrorMessage
              conditionError={showError && !isConfirmPassword}
              valueTag={`${validationFunction(value).text}`}
            />
          )} */}
          {isConfirmPassword && (
            <ErrorMessage
              conditionError={!isPasswordsMatch && isConfirmPassword}
              valueTag={'Passwords don`t match'}
            />
          )}
          {/* {!isPasswordsMatch && isConfirmPassword && (
            // <p className="authentication-form__error-message error-message confirm-password">
            //   Passwords don`t match
            // </p>
            <ErrorMessage valueTag={'Passwords don`t match'} />
          )} */}
        </>
      )}
    </>
  );
};

export default UniversalInputWithError;
