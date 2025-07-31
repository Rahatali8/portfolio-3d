import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, CalendarDays, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "1",
      title: "The Ultimate Guide to Skincare for Glowing Skin",
      date: "July 25, 2025",
      category: "Skincare",
      image: "/placeholder.svg?height=300&width=500",
      excerpt: "Unlock the secrets to a radiant complexion with our comprehensive skincare guide...",
    },
    {
      id: "2",
      title: "Top 5 Perfumes for Every Occasion",
      date: "July 20, 2025",
      category: "Perfumes",
      image: "/placeholder.svg?height=300&width=500",
      excerpt: "Discover your signature scent with our curated list of must-have fragrances...",
    },
    {
      id: "3",
      title: "Gift Ideas: The Perfect Beauty Presents",
      date: "July 15, 2025",
      category: "Gift Items",
      image: "/placeholder.svg?height=300&width=500",
      excerpt: "Find inspiration for thoughtful beauty gifts that will delight your loved ones...",
    },
    {
      id: "4",
      title: "Hair Care Essentials for Healthy, Lustrous Locks",
      date: "July 10, 2025",
      category: "Hair Care",
      image: "/placeholder.svg?height=300&width=500",
      excerpt: "Transform your hair with our expert tips and essential products for ultimate health...",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-kiran-pink text-center mb-10 animate-slide-in-top">
        Our Blog
      </h1>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <Link href={`/blog/${post.id}`}>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold font-heading text-kiran-text mb-2 line-clamp-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-kiran-pink transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <div className="flex items-center text-sm text-muted-foreground font-body mb-3">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <Tag className="h-4 w-4 ml-4 mr-1" />
                  <span>{post.category}</span>
                </div>
                <p className="text-kiran-text font-body mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} passHref>
                  <Button
                    variant="outline"
                    className="border-kiran-pink text-kiran-pink hover:bg-kiran-pink/10 bg-transparent"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-4">Stay Updated</h2>
        <p className="text-lg font-body text-kiran-text mb-6">
          Subscribe to our newsletter for the latest articles, beauty tips, and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-grow border-gray-300 text-kiran-text" />
          <Button type="submit" className="bg-kiran-pink hover:bg-kiran-pink/90 text-white">
            Subscribe
          </Button>
        </form>
      </section>
    </div>
  )
}
