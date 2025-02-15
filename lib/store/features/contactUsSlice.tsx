import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ContactState {
  contactUsapiData: any;
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  contactUsapiData: null,
  loading: false,
  error: null,
};

export const contactUsapi = createAsyncThunk<any, any>(
  "contact/contactUsapi",
  async ({ values }: { values: any }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://rising-admin.vercel.app/api/apps/contact`,
        values
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
        state.error = null;
      })
      .addCase(contactUsapi.fulfilled, (state, action) => {
        state.loading = false;
        state.contactUsapiData = action.payload;
        state.error = null;
      })
      .addCase(contactUsapi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Something went wrong';
      });
  },
});

export default contactUs.reducer;
