import { API_HOST } from "@/lib/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
    contactUsapiData: [],
    loading: false,
    error: null,
  };

export const contactUsapi = createAsyncThunk<any, any>(
  "contact/contactUsapi",
  async ({data}: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_HOST}/api/apps/contact`,
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const contactUs = createSlice({
  name: "contactUs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactUsapi.pending, (state) => {
        state.loading = true;
      })
      .addCase(contactUsapi.fulfilled, (state, action) => {
        state.loading = false;
        state.contactUsapiData = action.payload;
      })
      .addCase(contactUsapi.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default contactUs.reducer;
