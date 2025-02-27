"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { User,  Gem } from "lucide-react"
import { format } from "date-fns"
import { mainBanner1, mainBanner2, mainBanner7, mainBanner8 } from "@/public/assets/img"

export const blogPosts = [
  {
    "id": 1,
    "title": "Understanding Precious Metal Purity",
    "excerpt": "Discover what those hallmark numbers mean and how to identify the purity of your precious metals.",
    "date": "February 8, 2024",
    "category": "Education",
    "image": "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    "readTime": "4 min read",
    "slug": "understanding-precious-metal-purity",
    "content": "<p>When shopping for precious metal jewelry, understanding purity marks is crucial...</p><h2>Gold Purity</h2><p>24K gold represents pure gold, while 18K contains 75% gold...</p><h2>Silver Standards</h2><p>Sterling silver is marked as 925, indicating 92.5% pure silver...</p>",
    "author": "Michael Wong",
    "likes": 127
  },
  {
    "id": 2,
    "title": "Birthstones Through the Months",
    "excerpt": "Explore the fascinating world of birthstones and their historical significance.",
    "date": "February 7, 2024",
    "category": "History",
    "image": "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "slug": "birthstones-through-the-months",
    "content": "<p>Each month has its own unique birthstone with special meaning...</p><h2>January - Garnet</h2><p>Symbolizing protection and friendship...</p><h2>February - Amethyst</h2><p>Known for its calming properties...</p>",
    "author": "Sarah Johnson",
    "likes": 245
  },
  {
    "id": 3,
    "title": "The 4 C's of Diamond Quality",
    "excerpt": "Learn about Cut, Clarity, Color, and Carat - the essential factors in diamond quality.",
    "date": "February 10, 2024",
    "category": "Guide",
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    "readTime": "6 min read",
    "slug": "the-4-cs-of-diamond-quality",
    "content": "<p>The 4 C's of Diamond Quality are fundamental...</p><h2>Cut</h2><p>The cut affects brilliance and fire...</p><h2>Clarity</h2><p>Refers to inclusions or blemishes...</p>",
    "author": "Emily Clark",
    "likes": 150
  },
  {
    "id": 4,
    "title": "Caring for Your Fine Jewelry",
    "excerpt": "Essential tips for maintaining the beauty and longevity of your precious pieces.",
    "date": "February 6, 2024",
    "category": "Maintenance",
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    "readTime": "7 min read",
    "slug": "caring-for-fine-jewelry",
    "content": "<p>Proper jewelry care ensures your pieces last generations...</p><h2>Cleaning</h2><p>Different gemstones require different cleaning methods...</p>",
    "author": "David Chen",
    "likes": 189
  },
  {
    "id": 5,
    "title": "Engagement Ring Trends 2024",
    "excerpt": "Discover the latest trends in engagement ring designs and styles.",
    "date": "February 5, 2024",
    "category": "Trends",
    "image": "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "slug": "engagement-ring-trends-2024",
    "content": "<p>2024 brings exciting new trends in engagement rings...</p><h2>Mixed Metals</h2><p>Combining different metals creates unique looks...</p>",
    "author": "Lisa Martinez",
    "likes": 312
  },
  {
    "id": 6,
    "title": "Vintage Jewelry: A Collector's Guide",
    "excerpt": "How to identify, collect, and care for vintage jewelry pieces.",
    "date": "February 4, 2024",
    "category": "Collecting",
    "image": "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    "readTime": "8 min read",
    "slug": "vintage-jewelry-collectors-guide",
    "content": "<p>Vintage jewelry tells stories of past eras...</p><h2>Art Deco</h2><p>Characterized by geometric patterns...</p>",
    "author": "Robert Smith",
    "likes": 275
  },
  {
    "id": 7,
    "title": "Pearls: Nature's Timeless Gems",
    "excerpt": "Everything you need to know about selecting and wearing pearls.",
    "date": "February 3, 2024",
    "category": "Guide",
    "image": "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80",
    "readTime": "6 min read",
    "slug": "pearls-natures-timeless-gems",
    "content": "<p>Pearls have adorned royalty for centuries...</p><h2>Types</h2><p>From Akoya to South Sea varieties...</p>",
    "author": "Grace Kim",
    "likes": 198
  },
  {
    "id": 8,
    "title": "Custom Jewelry Design Process",
    "excerpt": "Follow the journey from concept to creation in custom jewelry making.",
    "date": "February 2, 2024",
    "category": "Process",
    "image": "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    "readTime": "7 min read",
    "slug": "custom-jewelry-design-process",
    "content": "<p>Creating custom jewelry is an art form...</p><h2>Initial Consultation</h2><p>Understanding client vision...</p>",
    "author": "Tom Anderson",
    "likes": 167
  },
  {
    "id": 9,
    "title": "Gemstone Healing Properties",
    "excerpt": "Exploring the traditional beliefs about gemstone healing powers.",
    "date": "February 1, 2024",
    "category": "Alternative",
    "image": "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "slug": "gemstone-healing-properties",
    "content": "<p>Different cultures attribute various healing properties...</p><h2>Amethyst</h2><p>Known for spiritual awareness...</p>",
    "author": "Nina Patel",
    "likes": 234
  },
  {
    "id": 10,
    "title": "Investment Jewelry Guide",
    "excerpt": "Learn which pieces make smart investments for the future.",
    "date": "January 31, 2024",
    "category": "Investment",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    "readTime": "9 min read",
    "slug": "investment-jewelry-guide",
    "content": "<p>Some jewelry pieces appreciate over time...</p><h2>Rare Gems</h2><p>Understanding market value...</p>",
    "author": "James Wilson",
    "likes": 289
  },
  {
    "id": 11,
    "title": "Wedding Band Selection Tips",
    "excerpt": "How to choose the perfect wedding bands for both partners.",
    "date": "January 30, 2024",
    "category": "Guide",
    "image": "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    "readTime": "6 min read",
    "slug": "wedding-band-selection-tips",
    "content": "<p>Choosing wedding bands is a significant decision...</p><h2>Metal Options</h2><p>From platinum to gold...</p>",
    "author": "Rachel Green",
    "likes": 176
  },
  {
    "id": 12,
    "title": "Understanding Gemstone Cuts",
    "excerpt": "A comprehensive guide to different gemstone cutting styles.",
    "date": "January 29, 2024",
    "category": "Education",
    "image": "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
    "readTime": "7 min read",
    "slug": "understanding-gemstone-cuts",
    "content": "<p>The cut of a gemstone affects its brilliance...</p><h2>Brilliant Cut</h2><p>Maximizes light return...</p>",
    "author": "Alex Thompson",
    "likes": 203
  },
  {
    "id": 13,
    "title": "Jewelry Insurance Basics",
    "excerpt": "What you need to know about protecting your valuable pieces.",
    "date": "January 28, 2024",
    "category": "Protection",
    "image": "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "slug": "jewelry-insurance-basics",
    "content": "<p>Protecting your jewelry investment is crucial...</p><h2>Coverage Types</h2><p>Understanding policy options...</p>",
    "author": "Maria Santos",
    "likes": 145
  },
  {
    "id": 14,
    "title": "Men's Jewelry Styling Guide",
    "excerpt": "Tips for men on how to wear and style different jewelry pieces.",
    "date": "January 27, 2024",
    "category": "Style",
    "image": "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&w=800&q=80",
    "readTime": "6 min read",
    "slug": "mens-jewelry-styling-guide",
    "content": "<p>Men's jewelry adds sophistication to any outfit...</p><h2>Watches</h2><p>The cornerstone of men's accessories...</p>",
    "author": "Chris Baker",
    "likes": 167
  },
  {
    "id": 15,
    "title": "Colored Diamonds Guide",
    "excerpt": "Exploring the rare and beautiful world of colored diamonds.",
    "date": "January 26, 2024",
    "category": "Education",
    "image": "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
    "readTime": "8 min read",
    "slug": "colored-diamonds-guide",
    "content": "<p>Colored diamonds are among the rarest gems...</p><h2>Pink Diamonds</h2><p>Understanding their unique value...</p>",
    "author": "Sophie Turner",
    "likes": 298
  },
  {
    "id": 16,
    "title": "Antique Jewelry Periods",
    "excerpt": "A journey through different periods of antique jewelry design.",
    "date": "January 25, 2024",
    "category": "History",
    "image": "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    "readTime": "10 min read",
    "slug": "antique-jewelry-periods",
    "content": "<p>Each period has distinct characteristics...</p><h2>Victorian Era</h2><p>Romantic and symbolic designs...</p>",
    "author": "William Brown",
    "likes": 256
  },
  {
    "id": 17,
    "title": "Jewelry Photography Tips",
    "excerpt": "How to capture stunning photos of your jewelry pieces.",
    "date": "January 24, 2024",
    "category": "Photography",
    "image": "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    "readTime": "7 min read",
    "slug": "jewelry-photography-tips",
    "content": "<p>Great jewelry photography requires specific techniques...</p><h2>Lighting</h2><p>Proper lighting is crucial...</p>",
    "author": "Kate Williams",
    "likes": 189
  },
  {
    "id": 18,
    "title": "Sustainable Jewelry",
    "excerpt": "Understanding eco-friendly practices in jewelry making.",
    "date": "January 23, 2024",
    "category": "Sustainability",
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    "readTime": "6 min read",
    "slug": "sustainable-jewelry",
    "content": "<p>Sustainable jewelry practices are increasingly important...</p><h2>Recycled Metals</h2><p>Environmental benefits...</p>",
    "author": "Oliver Green",
    "likes": 223
  },
  {
    "id": 19,
    "title": "Statement Necklaces Guide",
    "excerpt": "How to choose and style bold statement necklaces.",
    "date": "January 22, 2024",
    "category": "Style",
    "image": "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    "readTime": "5 min read",
    "slug": "statement-necklaces-guide",
    "content": "<p>Statement necklaces can transform an outfit...</p><h2>Choosing Scale</h2><p>Finding the right size...</p>",
    "author": "Isabella Rodriguez",
    "likes": 178
  },
  {
    id: 20,
    title: "Understanding Lab Grown Diamonds: A Sustainable Choice",
    excerpt: "Discover how lab-grown diamonds are revolutionizing the jewelry industry with their ethical and sustainable approach.",
    date: "February 15, 2024",
    category: "Education",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    slug: "understanding-lab-grown-diamonds",
    content: `
      <p>Lab-grown diamonds have taken the jewelry world by storm...</p>
      <h2>Benefits of Lab-Grown Diamonds</h2>
      <ul>
        <li>Ethical sourcing</li>
        <li>Environmental sustainability</li>
        <li>Cost-effectiveness</li>
      </ul>
      <p>In conclusion, lab-grown diamonds offer a sustainable and ethical alternative...</p>
    `,
    author: "Jane Doe",
    likes: 120,
  },
  {
    id: 21,
    title: "2024 Engagement Ring Trends",
    excerpt: "Explore the latest trends in engagement rings, from unique settings to fancy cuts.",
    date: "February 12, 2024",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read",
    slug: "2024-engagement-ring-trends",
    content: `
      <p>As we step into 2024, engagement ring trends are evolving to embrace...</p>
      <h2>Unique Settings</h2>
      <p>Customization is key with settings that reflect personal style...</p>
      <h2>Fancy Cuts</h2>
      <p>Beyond the classic round, fancy cuts like pear and marquise are gaining popularity...</p>
    `,
    author: "John Smith",
    likes: 95,
  },
  {
    id: 22,
    title: "The 4 C's of Diamond Quality",
    excerpt: "Learn about Cut, Clarity, Color, and Carat - the essential factors in diamond quality.",
    date: "February 10, 2024",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
    slug: "the-4-cs-of-diamond-quality",
    content: `
      <p>The 4 C's of Diamond Quality are fundamental in determining the value and beauty of a diamond...</p>
      <h2>Cut</h2>
      <p>The cut of a diamond affects its brilliance and fire...</p>
      <h2>Clarity</h2>
      <p>Clarity refers to the presence of inclusions or blemishes...</p>
      <h2>Color</h2>
      <p>Color grades range from D (colorless) to Z (light color)...</p>
      <h2>Carat</h2>
      <p>Carat measures the weight of the diamond...</p>
    `,
    author: "Emily Clark",
    likes: 150,
  },
  {
    id: 23,
    title: "Caring for Your Fine Jewelry",
    excerpt: "Essential tips and tricks to maintain the sparkle and beauty of your precious jewelry.",
    date: "February 8, 2024",
    category: "Care",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read",
    slug: "caring-for-your-fine-jewelry",
    content: `
      <p>Maintaining your fine jewelry ensures it remains stunning for years to come...</p>
      <h2>Regular Cleaning</h2>
      <p>Clean your jewelry regularly using mild soapy water...</p>
      <h2>Proper Storage</h2>
      <p>Store your pieces in separate compartments to avoid scratches...</p>
      <h2>Professional Inspections</h2>
      <p>Have your jewelry inspected by a professional annually...</p>
    `,
    author: "Michael Brown",
    likes: 80,
  },
  {
    id: 24,
    title: "The Rise of Sustainable Luxury",
    excerpt: "How lab-grown diamonds are changing the landscape of sustainable luxury jewelry.",
    date: "February 5, 2024",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    slug: "the-rise-of-sustainable-luxury",
    content: `
      <p>Sustainable luxury is gaining momentum, with consumers valuing ethical practices...</p>
      <h2>Eco-Friendly Materials</h2>
      <p>Using materials that have minimal environmental impact...</p>
      <h2>Ethical Sourcing</h2>
      <p>Ensuring that all materials are sourced responsibly...</p>
      <h2>Transparency</h2>
      <p>Providing clear information about the supply chain and production processes...</p>
    `,
    author: "Sophia Lee",
    likes: 200,
  },
  {
    id: 25,
    title: "Wedding Band Selection Guide",
    excerpt: "Find the perfect wedding band to complement your engagement ring.",
    date: "February 1, 2024",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read",
    slug: "wedding-band-selection-guide",
    content: `
      <p>Selecting a wedding band is a significant decision that complements your engagement ring...</p>
      <h2>Matching Metals</h2>
      <p>Ensure that the metal of your wedding band matches or complements your engagement ring...</p>
      <h2>Design Harmony</h2>
      <p>Choose a design that harmonizes with the style of your engagement ring...</p>
      <h2>Comfort Fit</h2>
      <p>Opt for a comfort-fit band for everyday wear...</p>
    `,
    author: "Laura White",
    likes: 65,
  },
]

const categories = ["All", "Education", "Trends", "Guide", "Care", "Sustainability"]

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center">
        <Image
          src={mainBanner8}
          alt="Luxury jewelry background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-playfair text-white mb-4">BLOGS</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover the world of sustainable luxury and lab-grown diamonds through our curated articles
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      {/* <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full text-sm font-medium transition-colors
                hover:bg-gold hover:text-black
                focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2
                border border-border hover:border-gold"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={mainBanner2}
                  alt="Featured post"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <span className="text-gold text-sm font-medium">Featured Article</span>
                <h2 className="text-3xl md:text-4xl font-playfair">The Future of Diamond Industry</h2>
                <p className="text-muted-foreground text-lg">
                  Explore how lab-grown diamonds are transforming the jewelry industry, offering sustainable
                  luxury without compromising on quality or ethics.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>February 20, 2024</span>
                  <span>•</span>
                  <span>7 min read</span>
                </div>
                <Button size={"lg"} variant="outline" className="border-gold text-black hover:bg-gold hover:text-black dark:text-white">
                  Read More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  {/* Image Container */}
                  <div className="relative">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold/90 text-black text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    {/* Likes Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="flex items-center gap-1 px-3 py-1 bg-black/50 text-white text-xs font-medium rounded-full">
                        <Gem  className="w-3 h-3 text-gold fill-" />
                        {post.likes}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-playfair text-gray-900 dark:text-white group-hover:text-gold transition-colors duration-300 mb-3">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-sm text-muted-foreground">
                        {format(new Date(post.date), "MMM dd, yyyy")}
                      </span>
                      <span className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300">
                        Read More 
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {/* <div className="flex justify-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-black dark:hover:text-black transition-all duration-300"
            >
              Load More Articles
            </Button>
          </div> */}
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-playfair">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest updates on sustainable luxury and lab-grown diamonds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-border focus:outline-none focus:border-gold"
              />
              <button className="px-8 py-3 bg-gold text-black rounded-full hover:bg-gold/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

