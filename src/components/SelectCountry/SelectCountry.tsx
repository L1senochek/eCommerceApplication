import React, { ChangeEvent } from 'react';
import ISelectCountryProps from '../../model/components/SelectCountry/SelectCountry';
import LabelInput from '../LabelInput/LabelInput';

const SelectCountry = ({
  value,
  setValueSelect,
  classNameLabel,
  htmlFor,
  textLabel,
}: ISelectCountryProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setValueSelect(event.target.value);
  };

  return (
    <>
      <LabelInput classNameLabel={classNameLabel} htmlFor={htmlFor}>
        {textLabel}
      </LabelInput>
      <select
        id={htmlFor}
        className={`authentication-form__input address-input input country`}
        value={value}
        onChange={handleChange}
      >
        <option value="US" className="input_option usa">
          USA
        </option>
        <option value="CA" className="input_option canada">
          Canada
        </option>
      </select>
    </>
  );
};

export default SelectCountry;
