import { setFilterHouse } from "@/lib/slices/filterHouseSlice";
import { RootState } from "@/lib/store";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

interface DropdownFilterProps {
  label: string;
  options: string[];
  widthFilter?: string;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  label,
  options,
  widthFilter,
}) => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state: RootState) => state.filHouse);
  const [selected, setSelected] = useState(label);
  const handleChange = (option: string) => {
    setSelected(option);
    if (label === "Giá") {
      dispatch(
        setFilterHouse({
          price: option === "Giá: Thấp đến Cao" ? "l-h" : "h-l",
          newest: selectedFilter.newest,
          location: selectedFilter.location,
        })
      );
      return;
    }
    if (label === "Mới nhất") {
      dispatch(
        setFilterHouse({
          price: selectedFilter.price,
          newest: option === "Mới nhất" ? "newest" : "oldest",
          location: selectedFilter.location,
        })
      );
      return;
    }
    if (label === "Vị trí") {
      dispatch(
        setFilterHouse({
          price: selectedFilter.price,
          newest: selectedFilter.newest,
          location:
            option === "Gần trường học"
              ? "school"
              : option === "Gần bệnh viện"
              ? "hospital"
              : "market",
        })
      );
      return;
    }
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selected}
      variant="light"
      style={{ width: widthFilter }}
    >
      {options.map((option, index) => (
        <Dropdown.Item key={index} onClick={() => handleChange(option)}>
          {option}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownFilter;
