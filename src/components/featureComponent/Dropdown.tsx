import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

interface DropdownFilterProps {
  label: string;
  options: string[];
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ label, options }) => {
  const [selected, setSelected] = useState(label);

  return (
    <DropdownButton id="dropdown-basic-button" title={selected} variant="light">
      {options.map((option, index) => (
        <Dropdown.Item key={index} onClick={() => setSelected(option)}>
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownFilter;