import ILinkToWithTextInWrapperProps from '../../model/components/LinkToWithTextInWrapper/LinkToWithTextInWrapper';

const LinkToWithTextInWrapper = ({
  text,
  children,
}: ILinkToWithTextInWrapperProps): JSX.Element => (
  <h4 className="authentication-form__link-to-register">
    {text}
    {children}
  </h4>
);

export default LinkToWithTextInWrapper;
