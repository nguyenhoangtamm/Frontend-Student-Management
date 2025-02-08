"use client";
import { useListDomainarie } from "@/services/hooks/useDomainarie";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setSelectedHouse } from "@/lib/slices/houseSlice";

interface Option {
  id: string;
  label: string;
}

export default function SearchHouse() {
  const { data: dataOff, isLoading, error } = useListDomainarie();
  const dispatch = useDispatch();

  // Lấy giá trị nhà trọ đã chọn từ Redux
  const selectedHouse = useSelector((state: RootState) => state.house.selectedHouse);

  // Kiểm tra dữ liệu danh sách nhà trọ
  const Options = Array.isArray(dataOff) ? dataOff.map((option) => ({
    id: option.id,
    label: option.name,
  })) : [];

  // Xử lý khi người dùng chọn nhà trọ
  const handleChange = (selected: Option) => {
    dispatch(setSelectedHouse({ id: selected.id, name: selected.label }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Typeahead
      id="house-typeahead"
      options={Options}
      placeholder="Nhập tên nhà trọ..."
      onChange={(selected) => handleChange(selected[0] as Option)}
      multiple={false}
      labelKey="label"
      defaultInputValue={selectedHouse ? selectedHouse.name : ""}
      maxResults={5}
    />
  );
}
