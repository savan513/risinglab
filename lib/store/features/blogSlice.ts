import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string
  image: string
  date: string
  category: string
  author: string
  likes: number
  slug: string
}

interface BlogState {
  posts: BlogPost[]
  currentPost: BlogPost | null
  loading: boolean
  error: string | null
}

const initialState: BlogState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
}

export const fetchBlogPost = createAsyncThunk("blog/fetchBlogPost", async (slug: string) => {
  const response = await fetch(`/api/blog/${slug}`)
  const data = await response.json()
  return data
})

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPost.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBlogPost.fulfilled, (state, action: PayloadAction<BlogPost>) => {
        state.loading = false
        state.currentPost = action.payload
        state.error = null
      })
      .addCase(fetchBlogPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch blog post"
      })
  },
})

export default blogSlice.reducer

