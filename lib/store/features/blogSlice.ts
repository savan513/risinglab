import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { blogPosts } from "@/app/blog/page"

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

export interface BlogState {
  posts: BlogPost[]
  currentPost: BlogPost | null
  loading: boolean
  error: string | null
}

const initialState: BlogState = {
  posts: blogPosts,
  currentPost: null,
  loading: false,
  error: null,
}

export const fetchBlogPost = createAsyncThunk(
  "blog/fetchBlogPost",
  async (slug: any, { rejectWithValue }) => {
    const post = blogPosts.find((p) => p.slug === slug)
    if (post) {
      return post
    } else {
      return rejectWithValue("Post not found")
    }
  }
)

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPost.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchBlogPost.fulfilled, (state, action: PayloadAction<BlogPost>) => {
        state.loading = false
        state.currentPost = action.payload
      })
      .addCase(fetchBlogPost.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default blogSlice.reducer

