import React, { ChangeEvent } from 'react';

interface SelectCountryProps {
  value: string;
  setValueSelect: (value: string) => void;
}

const SelectCountry = ({ value, setValueSelect }: SelectCountryProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setValueSelect(event.target.value);
  };

  return (
    <select
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
  );
};

export default SelectCountry;
