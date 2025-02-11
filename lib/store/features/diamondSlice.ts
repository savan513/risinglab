import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface DiamondState {
  fetchDiamondsCollectionData: any[];
  fetchDiamondCategoryData: any[];
  fetchDiamondsByCategoryData: any[];
  loading: boolean;
  error: string | null;
}

const initialState: DiamondState = {
  fetchDiamondsCollectionData: [],
  fetchDiamondCategoryData: [],
  fetchDiamondsByCategoryData: [],
  loading: false,
  error: null,
};

export const fetchDiamondCategory = createAsyncThunk<any, any>(
  "diamond/fetchDiamondCategory",
  async (filter: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${process.env.REACT_FRONT_URL}/api/apps/category`, {
        params: {
          filter: JSON.stringify(filter)
        }
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchDiamondsCollection = createAsyncThunk<any, void>(
  "diamond/fetchDiamondsCollection",
  async (_, { rejectWithValue }) => {
    try {
    //   const response = await axios.get(`${process.env.HOST}/api/apps/diamond`, {
      const response = await axios.get(`${process.env.REACT_FRONT_URL}/api/apps/diamond`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const fetchDiamondsByCategory = createAsyncThunk(
  'diamond/fetchByCategory',
  async (slug: any) => {
    console.log("slug api:==> ", slug);
    const response = await axios.get(`${process.env.REACT_FRONT_URL}/api/apps/diamond/category/${slug}`)
    return response.data
  }
)

export const diamondSlice = createSlice({
  name: "diamond",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiamondsCollection.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiamondsCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchDiamondsCollectionData = action.payload;
        state.error = null;
      })
      .addCase(fetchDiamondsCollection.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch diamond collection";
      });
    builder
      .addCase(fetchDiamondCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDiamondCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchDiamondCategoryData = action.payload;
        state.error = null;
      })
      .addCase(fetchDiamondCategory.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch diamond collection";
      });
      builder
      .addCase(fetchDiamondsByCategory.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchDiamondsByCategory.fulfilled, (state, action) => {
        state.loading = false
        state.fetchDiamondsByCategoryData = action.payload
      })
      .addCase(fetchDiamondsByCategory.rejected, (state) => {
        state.loading = false
      })
  },
});

export default diamondSlice.reducer;
