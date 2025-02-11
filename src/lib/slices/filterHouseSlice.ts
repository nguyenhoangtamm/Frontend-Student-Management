import { FilterHouse } from "@/interface/payloadHousing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu dữ liệu cho nhà trọ


// Giá trị mặc định
const initialState: FilterHouse = {
  price: "h-l",
  newest: "newest",
  location: "school",
};

const FilterSlice = createSlice({
  name: "FilterHouse",
  initialState,
  reducers: {
    // Hành động để cập nhật nhà trọ đã chọn
    setFilterHouse: (
      state,
      action: PayloadAction<{
        price: "h-l" | "l-h";
        newest: "newest" | "oldest";
        location: "school" | "hospital" | "market";
      } | null>
    ) => {
      state.price = action.payload?.price || "h-l";
      state.newest = action.payload?.newest || "newest";
      state.location = action.payload?.location || "school";
      
    },
  },
});

export const { setFilterHouse } = FilterSlice.actions;
export default FilterSlice.reducer;
