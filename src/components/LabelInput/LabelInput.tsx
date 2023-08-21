import { LabelInputProps } from '../../model/components/LabelInput/LabelInput';

const LabelInput = ({ htmlFor, children, classLabel }: LabelInputProps): JSX.Element => (
  <label className={`authentication-form__label ${classLabel}`} htmlFor={htmlFor}>
    {children}
  </label>
);

export default LabelInput;
