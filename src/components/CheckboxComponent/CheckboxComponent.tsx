import React from 'react';
import './CheckboxComponent.scss';

interface CheckboxComponentProps {
  checked: boolean;
  onChange: () => void;
  classNameCheckbox?: string;
  classNameLabel?: string;
  titleCheckbox?: string;
}
//"authentication-form__checkbox checkbox add-billing">
// "checkbox__input"
// Add Billing Address
const CheckboxComponent = ({
  checked,
  onChange,
  classNameCheckbox,
  classNameLabel,
  titleCheckbox,
}: CheckboxComponentProps): JSX.Element => {
  return (
    <label className={`${classNameLabel}`}>
      <input
        className={`${classNameCheckbox}`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {titleCheckbox}
    </label>
  );
};

export default CheckboxComponent;
