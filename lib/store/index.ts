import { configureStore } from '@reduxjs/toolkit'
import jewelleryReducer from './features/jewellerySlice'

export const store = configureStore({
  reducer: {
    jewellery: jewelleryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 