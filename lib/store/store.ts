import { configureStore } from "@reduxjs/toolkit"
import blogReducer from "./features/blogSlice"
import diamondReducer from "./features/diamondSlice"
import jewelleryReducer from "./features/jewellerySlice"

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    diamond: diamondReducer,
    jewellery: jewelleryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

