import { configureStore } from '@reduxjs/toolkit'
import houseSlice from './slices/houseSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      house: houseSlice // Thêm reducer vào store


    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']