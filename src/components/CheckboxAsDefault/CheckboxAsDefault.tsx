import React from 'react';

interface CheckboxUseAsDefaultProps {
  checked: boolean;
  onChange: () => void;
}

const CheckboxUseAsDefault: React.FC<CheckboxUseAsDefaultProps> = ({ checked, onChange }) => {
  return (
    <label className="authentication-form__checkbox checkbox default">
      <input type="checkbox" checked={checked} onChange={onChange} />
      Use As Default
    </label>
  );
};

export default CheckboxUseAsDefault;
