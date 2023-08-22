import React from 'react';

interface CheckboxUseShippingAsBillingProps {
  checked: boolean;
  onChange: () => void;
}

const CheckboxUseShippingAsBilling: React.FC<CheckboxUseShippingAsBillingProps> = ({
  checked,
  onChange,
}) => {
  return (
    <label className="authentication-form__checkbox checkbox default">
      <input type="checkbox" checked={checked} onChange={onChange} />
      Use Shipping as Billing
    </label>
  );
};

export default CheckboxUseShippingAsBilling;
