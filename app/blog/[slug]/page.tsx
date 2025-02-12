"use client"

import { useEffect, useMemo } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "@/lib/store/store"
import { fetchBlogPost } from "@/lib/store/features/blogSlice"
import { User, Calendar, Tag, Facebook, Twitter, Linkedin, Instagram, Gem } from "lucide-react"
import { format } from "date-fns"
import { blogPosts } from "../page"

export default function BlogPost() {
  const { slug } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const { currentPost, loading, error } = useSelector((state: RootState) => state.blog)

  useEffect(() => {
    if (slug) {
      dispatch(fetchBlogPost(slug))
    }
  }, [dispatch, slug])

  // Use useMemo to compute the most popular posts
  const mostPopularPosts = useMemo(() => {
    return blogPosts
      .filter((post) => (post.id !== currentPost?.id && post.category === currentPost?.category)) // Exclude the current post
      .sort((a, b) => b.likes - a.likes) // Sort by likes descending
      .slice(0, 3) // Take top 3
  }, [currentPost])

  if (loading) return <div className="text-center py-20">Loading...</div>
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>
  if (!currentPost) return <div className="text-center py-20">Post not found</div>

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 transition-colors duration-300">
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

      {/* Content Section */}
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

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">Share:</span>
              <div className="flex items-center gap-2">
                <a href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${currentPost.title}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`https://instagram.com/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gold/50 p-6 rounded-lg">
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
                {/* Add more categories if needed */}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gold/50 p-6 rounded-lg">
              <h2 className="text-xl font-serif text-gray-900 dark:text-white mb-4">RECENT POSTS</h2>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => ( // Display first 3 posts as recent
                  <Link key={post.id} href={`/blog/${post.slug}`} className="flex items-center gap-4 hover:text-gold transition-colors">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={50}
                      height={50}
                      className="object-cover rounded"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">{post.title}</h3>
                      <span className="text-xs text-gray-500">{format(new Date(post.date), "MMM dd")}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Most Popular Section */}
      {
        mostPopularPosts.length > 0 && (<>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 dark:text-white mb-8">Most Popular</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {mostPopularPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{post.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{post.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{format(new Date(post.date), "MMM dd, yyyy")}</span>
                        <span className="flex items-center gap-1"><Gem  className="w-3 h-3 text-gold fill-" /> {post.likes}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>)
      }
    </div>
  )
}

