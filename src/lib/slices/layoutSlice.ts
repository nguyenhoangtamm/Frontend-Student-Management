import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface notification{
    title: string;
    slug: string;
}
// Định nghĩa kiểu dữ liệu cho nhà trọ
interface LayoutState {
    userImage: string | null;
    name: string | null;
    notifications: notification[];
}

// Giá trị mặc định
const initialState: LayoutState = {
    userImage: null,
    name: null,
    notifications: [],
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        // Hành động để cập nhật layout
        setLayout: (
            state,
            action: PayloadAction<{
                userImage: string | null;
                name: string | null;
                notifications: notification[];
            }>
        ) => {
            state.userImage = action.payload.userImage;
            state.name = action.payload.name;
            state.notifications = action.payload.notifications;
        },
    },
});

export const { setLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
