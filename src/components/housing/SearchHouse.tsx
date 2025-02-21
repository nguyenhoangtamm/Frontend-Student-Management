"use client";
import { useListDomainarie } from "@/services/hooks/useDomainarie";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setSelectedHouse } from "@/lib/slices/houseSlice";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

interface Option {
  id: string;
  label: string;
}

export default function SearchHouse() {
  const { data: dataOff, isLoading, error } = useListDomainarie();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  // Lấy giá trị nhà trọ đã chọn từ Redux
  const selectedHouse = useSelector(
    (state: RootState) => state.house.selectedHouse
  );

  // Kiểm tra dữ liệu danh sách nhà trọ
  const Options = Array.isArray(dataOff)
    ? dataOff.map((option) => ({
        id: option.id,
        label: option.name,
      }))
    : [];

  // Xử lý khi người dùng chọn nhà trọ hoặc nhập giá trị mới
  const handleChangeSelect = (selected: Option[]) => {
    const selectedOption = selected[0];
    // Nếu người dùng chọn từ danh sách gợi ý
    dispatch(
      setSelectedHouse({
        id: selectedOption.id,
        name: selectedOption.label,
      })
    );
  };

  // Xử lý khi người dùng thay đổi nội dung ô nhập liệu
  const handleInputChange = (text: string) => {
    if (!text || text.length === 0 || text === "") {
      return dispatch(setSelectedHouse(null));
    } else if (
      Options.filter(
        (option) => option.label.toLowerCase() === text.toLowerCase()
      ).length > 0
    ) {
      return dispatch(
        setSelectedHouse({
          id: Options.filter(
            (option) => option.label.toLowerCase() === text.toLowerCase()
          )[0].id,
          name: text,
        })
      );
    }
    // Nếu người dùng nhập giá trị mới
    return dispatch(
      setSelectedHouse({
        id: "-1",
        name: text,
      })
    );
    // dispatch(setSelectedHouse({ id: text, name: text }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Typeahead
        id="house-typeahead"
        options={Options}
        placeholder="Nhập tên nhà trọ..."
        onChange={(selected) => {
          handleChangeSelect(selected as Option[]);
        }}
        onInputChange={(text) => setInputValue(text)}
        multiple={false}
        labelKey="label"
        defaultInputValue={selectedHouse ? selectedHouse.name : ""}
        maxResults={5}
      />
      <Button
        className="input-group-text text-white bg-primary"
        onClick={() => handleInputChange(inputValue)}
      >
        <FaSearch />
      </Button>
      
    </>
  );
}
