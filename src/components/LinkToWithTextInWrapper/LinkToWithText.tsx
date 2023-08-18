import { LinkToWithTextProps } from '../../model/components/LinkToWithTextInWrapper/LinkToWithTextInWrapper';

const LinkToWithText = ({ text, children }: LinkToWithTextProps): JSX.Element => (
  <h4 className="authentication-form__link-to-register">
    {text}
    {children}
  </h4>
);

export default LinkToWithText;
