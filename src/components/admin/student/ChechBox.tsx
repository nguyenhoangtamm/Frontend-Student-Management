import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </label>
  );
};

export default Checkbox;
