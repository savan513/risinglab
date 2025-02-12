import { configureStore } from "@reduxjs/toolkit"
import blogReducer from "./features/blogSlice"
import diamondReducer from "./features/diamondSlice"
import jewelleryReducer from "./features/jewellerySlice"
import contactUsReducer from "./features/contactUsSlice"

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    diamond: diamondReducer,
    jewellery: jewelleryReducer,
    contactUs: contactUsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

