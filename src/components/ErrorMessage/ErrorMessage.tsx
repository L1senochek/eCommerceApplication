import IErrorMessageProps from '../../model/components/ErrorMessage/ErrorMessage';
import './errorMessage.scss';

const ErrorMessage = ({
  conditionError,
  valueTag,
  classNameError,
}: IErrorMessageProps): JSX.Element => {
  return (
    <>
      <p
        className={`${classNameError ? classNameError : ''} error-message ${
          conditionError ? 'active' : ''
        }`}
      >
        {conditionError ? valueTag : ''}
      </p>
    </>
  );
};

export default ErrorMessage;
