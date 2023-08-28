import { PASSWORD_RESET_PAGE } from '../../utils/constants/paths';
import LinkTo from '../LinkTo/LinkTo';

const ForgotPasswordLink = (): JSX.Element => (
  <div className="authentication-form__user-actions">
    <LinkTo
      to={PASSWORD_RESET_PAGE}
      text="Forgot your passord?"
      additionalClass={'password-reset'}
    />
  </div>
);

export default ForgotPasswordLink;
