import IErrorMessageProps from '../../model/components/ErrorMessage/ErrorMessage';
import './errorMessage.scss';

const ErrorMessage = ({ conditionError, valueTag }: IErrorMessageProps): JSX.Element => {
  return (
    <>
      <p
        className={`authentication-form__error-message error-message ${
          conditionError ? 'active' : ''
        }`}
      >
        {conditionError ? valueTag : ''}
      </p>
    </>
  );
};

export default ErrorMessage;
