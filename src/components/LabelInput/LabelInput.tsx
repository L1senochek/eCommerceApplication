import { LabelInputProps } from '../../model/components/LabelInput/LabelInput';

const LabelInput = ({ htmlFor, children }: LabelInputProps): JSX.Element => (
  <label className="authentication-form__label" htmlFor={htmlFor}>
    {children}
  </label>
);

export default LabelInput;
