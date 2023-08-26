import React from 'react';
import './checkboxComponent.scss';
import ICheckboxComponentProps from '../../model/components/CheckboxComponent/CheckboxComponent';

const CheckboxComponent = ({
  checked,
  onChange,
  classNameCheckbox,
  classNameLabel,
  titleCheckbox,
}: ICheckboxComponentProps): JSX.Element => {
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
