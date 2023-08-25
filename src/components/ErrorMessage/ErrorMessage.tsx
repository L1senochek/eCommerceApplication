import './errorMessage.scss';

interface ErrorMessageProps {
  conditionError: boolean;
  valueTag: React.ReactNode;
}

const ErrorMessage = ({ conditionError, valueTag }: ErrorMessageProps): JSX.Element => {
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
