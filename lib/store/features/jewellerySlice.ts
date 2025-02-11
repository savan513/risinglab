import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface JewelleryState {
  fetchJewelleryCollectionData: any[];
  fetchJewelleryCategoryData: any[];
  fetchJewelleryByCategoryData: any[];
  loading: boolean;
  error: string | null;
}

const initialState: JewelleryState = {
  fetchJewelleryCollectionData: [],
  fetchJewelleryCategoryData: [],
  fetchJewelleryByCategoryData: [],
  loading: false,
  error: null,
};

export const fetchJewelleryCategory = createAsyncThunk<any, any>(
  "jewellery/fetchJewelleryCategory",
  async (filter: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_FRONT_URL}/api/apps/category`,
        {
          params: {
            filter: JSON.stringify(filter),
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchJewelleryCollection = createAsyncThunk<any, void>(
  "jewellery/fetchJewelleryCollection",
  async (_, { rejectWithValue }) => {
    try {
      //   const response = await axios.get(`${process.env.HOST}/api/apps/diamond`, {
      const response = await axios.get(
        `${process.env.REACT_FRONT_URL}/api/apps/jewellery`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchJewelleryByCategory = createAsyncThunk(
  "jewellery/fetchJewelleryByCategory",
  async (slug: any) => {
    const response = await axios.get(
      `${process.env.REACT_FRONT_URL}/api/apps/jewellery/category/${slug}`
    );
    return response.data;
  }
);
export const jewellerySlice = createSlice({
  name: "jewellery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJewelleryCollection.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJewelleryCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchJewelleryCollectionData = action.payload;
        state.error = null;
      })
      .addCase(fetchJewelleryCollection.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch jewellery collection";
      });
    builder
      .addCase(fetchJewelleryCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJewelleryCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchJewelleryCategoryData = action.payload;
        state.error = null;
      })
      .addCase(fetchJewelleryCategory.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch jewellery collection";
      });
    builder
      .addCase(fetchJewelleryByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJewelleryByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchJewelleryByCategoryData = action.payload;
        state.error = null;
      })
      .addCase(fetchJewelleryByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch jewellery collection";
      });
  },
});

export default jewellerySlice.reducer;
