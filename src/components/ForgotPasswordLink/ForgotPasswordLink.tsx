import LinkTo from '../LinkTo/LinkTo';

const ForgotPasswordLink = (): JSX.Element => (
  <div className="authentication-form__user-actions">
    <LinkTo to="/passwordReset" text="Forgot your passord?" additionalClass={'password-reset'} />
  </div>
);

export default ForgotPasswordLink;
