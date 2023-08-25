interface ErrorMessageProps {
  valueTag: React.ReactNode;
}

const ErrorMessage = ({ valueTag }: ErrorMessageProps): JSX.Element => {
  return (
    <>
      <p className={`authentication-form__error-message error-message`}>{valueTag}</p>
    </>
  );
};

export default ErrorMessage;
