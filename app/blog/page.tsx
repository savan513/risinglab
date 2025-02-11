import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Diamond Selection",
    excerpt: "Learn about the 4 Cs and how to choose the perfect diamond for your special moment.",
    date: "January 29, 2024",
    category: "Education",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Wedding Jewelry Trends 2024",
    excerpt: "Discover the latest trends in bridal jewelry and how to style them.",
    date: "January 25, 2024",
    category: "Trends",
    image: "/placeholder.svg",
  },
  // Add more blog posts...
]

export default function Blog() {
  return (
    <>
      <div className="min-h-screen pt-20 bg-black">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif text-white">Our Blog</h1>
            <p className="text-white/80">
              Discover the latest trends, tips, and stories from the world of fine jewelry
            </p>
          </div>
        </div>

        {/* Featured Post */}
        <div className="container mx-auto px-4 pb-20">
          <article className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image src="/placeholder.svg" alt="Featured blog post" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-3xl mx-auto space-y-4">
                <span className="text-gold">Featured Post</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white">The History of Diamond Engagement Rings</h2>
                <p className="text-white/80">
                  Explore the fascinating history and cultural significance of diamond engagement rings.
                </p>
                <div className="flex items-center space-x-4 text-sm text-white/60">
                  <span>January 30, 2024</span>
                  <span>•</span>
                  <span>History</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.id}`}>
                  <div className="space-y-4">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gold">{post.category}</span>
                        <span className="text-white/60">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/80">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

