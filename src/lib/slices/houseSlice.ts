import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu dữ liệu cho nhà trọ
interface HouseState {
  selectedHouse: {
    id: string;
    name: string;
  } | null;
}

// Giá trị mặc định
const initialState: HouseState = {
  selectedHouse: null,
};

const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    // Hành động để cập nhật nhà trọ đã chọn
    setSelectedHouse: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.selectedHouse = action.payload;
    },
  },
});

export const { setSelectedHouse } = houseSlice.actions;
export default houseSlice;
