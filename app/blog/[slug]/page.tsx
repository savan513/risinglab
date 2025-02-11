"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "@/lib/store/store"
import { fetchBlogPost } from "@/lib/store/features/blogSlice"
import { User, Calendar, Tag } from "lucide-react"
import { format } from "date-fns"

export default function BlogPost() {
  const { slug } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const { currentPost, loading, error } = useSelector((state: RootState) => state.blog)

  useEffect(() => {
    if (slug) {
      dispatch(fetchBlogPost(slug as string))
    }
  }, [dispatch, slug])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!currentPost) return <div>Post not found</div>

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Header Banner */}
      <div className="relative h-[300px] bg-gradient-to-r from-gray-900 to-gray-800">
        <Image
          src={currentPost.image || "/placeholder.svg"}
          alt={currentPost.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 mb-6">
              <Link href="/" className="hover:text-gold">
                HOME
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold">
                BLOG
              </Link>
              <span>/</span>
              <span className="text-gold">{currentPost.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white max-w-4xl">{currentPost.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {currentPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(currentPost.date), "MMMM dd, yyyy")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{currentPost.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-serif text-gray-900 dark:text-white mb-4">CATEGORIES</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog?category=diamonds" className="text-gray-600 dark:text-gray-400 hover:text-gold">
                    Diamonds
                  </Link>
                </li>
                <li>
                  <Link href="/blog?category=jewelry" className="text-gray-600 dark:text-gray-400 hover:text-gold">
                    Jewelry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-serif text-gray-900 dark:text-white mb-4">RECENT POSTS</h2>
              <div className="space-y-4">{/* Add recent posts here */}</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

