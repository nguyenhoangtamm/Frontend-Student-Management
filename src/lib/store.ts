import { configureStore } from '@reduxjs/toolkit'
import houseSlice from './slices/houseSlice'
import FillterHouseSlice from './slices/filterHouseSlice'
import layoutSlice from './slices/layoutSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      house: houseSlice, // Thêm reducer vào store
      filHouse: FillterHouseSlice,
      layout: layoutSlice,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']