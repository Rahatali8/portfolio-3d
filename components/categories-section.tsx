import Image from "next/image"
import Link from "next/link"

export default function CategoriesSection() {
  const categories = [
    { name: "Skincare", image: "/sc-cat.avif", url: "/products?category=skincare" },
    { name: "Perfumes", image: "/per-cat.avif", url: "/products?category=perfumes" },
    { name: "Gift Items", image: "/gift-cat.webp", url: "/products?category=gift-items" },
    { name: "Hair Care", image: "/hair-cat.avif", url: "/products?category=hair-care" },
    { name: "Body Care", image: "/body-cat.jpeg", url: "/products?category=body-care" },
    { name: "Accessories", image: "/hair-acc-cat.jpg", url: "/products?category=accessories" },
  ]

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-heading text-kiran-text">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            href={category.url}
            key={category.name}
            className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={200}
              height={200}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <h3 className="text-xl font-semibold text-white font-heading">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
