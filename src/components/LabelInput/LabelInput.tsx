import { LabelInputProps } from '../../model/components/LabelInput/LabelInput';

const LabelInput = ({ htmlFor, children, classNameLabel }: LabelInputProps): JSX.Element => (
  <label
    className={`authentication-form__label ${classNameLabel ? classNameLabel : ''}`}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

export default LabelInput;
