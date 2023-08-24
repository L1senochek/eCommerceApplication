import React from 'react';
import './CheckboxAddBilling.scss';

interface CheckboxAddBillingProps {
  checked: boolean;
  onChange: () => void;
}

const CheckboxAddBilling: React.FC<CheckboxAddBillingProps> = ({ checked, onChange }) => {
  return (
    <label className="authentication-form__checkbox checkbox add-billing">
      <input className="checkbox__input" type="checkbox" checked={checked} onChange={onChange} />
      Add Billing Address
    </label>
  );
};

export default CheckboxAddBilling;
