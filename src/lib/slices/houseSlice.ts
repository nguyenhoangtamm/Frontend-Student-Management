import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu dữ liệu cho nhà trọ
interface HouseState {
  selectedHouse: {
    id: string|undefined;
    name: string|undefined;
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
    setSelectedHouse: (state, action: PayloadAction<{ id: string|undefined; name: string|undefined }|null>) => {
      state.selectedHouse = action.payload;
    },
  },
});

export const { setSelectedHouse } = houseSlice.actions;
export default houseSlice.reducer;
