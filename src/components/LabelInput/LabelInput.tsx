import ILabelInputProps from '../../model/components/LabelInput/LabelInput';

const LabelInput = ({ htmlFor, children, classNameLabel }: ILabelInputProps): JSX.Element => (
  <label className={`${classNameLabel ? classNameLabel : ''}`} htmlFor={htmlFor}>
    {children}
  </label>
);

export default LabelInput;
