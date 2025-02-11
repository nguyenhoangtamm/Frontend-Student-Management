import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

interface DropdownFilterProps {
  label: string;
  options: string[];
  widthFilter?: string;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ label, options,widthFilter }) => {
  const [selected, setSelected] = useState(label);

  return (
    <DropdownButton id="dropdown-basic-button" title={selected} variant="light" style={{width:widthFilter}}> 
      {options.map((option, index) => (
        <Dropdown.Item key={index} onClick={() => setSelected(option)}>
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownFilter;