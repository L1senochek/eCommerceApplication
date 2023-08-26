import IUniversalButtonProps from '../../model/components/Button/Button';
import './button.scss';

const UniversalButton = ({
  text,
  additionalClass,
  ...props
}: IUniversalButtonProps): JSX.Element => {
  return (
    <button className={`btn ${additionalClass}`} {...props}>
      {text}
    </button>
  );
};

export default UniversalButton;
