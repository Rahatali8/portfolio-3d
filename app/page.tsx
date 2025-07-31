import HeroSection from "@/components/hero-section"
import CategoriesSection from "@/components/categories-section"
import ProductGridSection from "@/components/product-grid-section"
import { Sparkles, Heart, Palette } from "lucide-react"
import type { Product } from "@/lib/types"

async function getProducts(): Promise<Product[]> {
  const djangoApiUrl = process.env.NEXT_PUBLIC_DJANGO_API_URL
  const useMockApi = !djangoApiUrl // If Django URL is not set, use mock API

  if (useMockApi) {
    console.log("NEXT_PUBLIC_DJANGO_API_URL not set. Using internal mock API for products.")
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    const res = await fetch(`${siteUrl}/api/products`, { cache: "no-store" })
    if (!res.ok) {
      throw new Error("Failed to fetch from internal mock API.")
    }
    return res.json()
  } else {
    const apiUrl = `${djangoApiUrl}/products/`
    console.log(`Attempting to fetch products from Django API: ${apiUrl}`)
    try {
      const res = await fetch(apiUrl, {
        cache: "no-store",
      })

      if (!res.ok) {
        const errorBody = await res.text()
        console.error(
          `Failed to fetch products from Django: HTTP Status ${res.status} ${res.statusText}. Response body: ${errorBody}`,
        )
        throw new Error(
          `Failed to fetch products from Django: Server responded with ${res.status} ${res.statusText}. Check Django backend URL and CORS.`,
        )
      }

      const contentType = res.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        const errorBody = await res.text()
        console.error(
          `Expected JSON from Django, but received content type: ${contentType}. Response body: ${errorBody}`,
        )
        throw new Error(
          `Expected JSON response from Django, but received non-JSON. Check Django API endpoint and response format.`,
        )
      }

      return res.json()
    } catch (error) {
      console.error("Network or parsing error during Django product fetch:", error)
      throw new Error(
        `Network error or invalid response from Django API: ${error instanceof Error ? error.message : String(error)}. Ensure Django is running and accessible.`,
      )
    }
  }
}

export default async function HomePage() {
  let products: Product[] = []
  let error: string | null = null

  try {
    products = await getProducts()
  } catch (err) {
    console.error("Error fetching products for homepage:", err)
    error = `Failed to load products: ${err instanceof Error ? err.message : String(err)}`
  }

  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoriesSection />
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-heading text-kiran-text">
          Featured Products
        </h2>
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <ProductGridSection products={products.slice(0, 8)} /> // Show a few featured products
        )}
      </section>

      {/* Added: Why Choose Us Section */}
      <section className="bg-kiran-light-gray py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-kiran-pink mb-8">
            Why Choose Kiran Cosmetics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Sparkles className="h-12 w-12 text-kiran-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-heading text-kiran-text mb-2">Premium Quality</h3>
              <p className="text-kiran-text font-body">
                Crafted with the finest ingredients for a luxurious experience and stunning results.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Heart className="h-12 w-12 text-kiran-pink mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-heading text-kiran-text mb-2">Ethically Sourced</h3>
              <p className="text-kiran-text font-body">
                Committed to cruelty-free practices and sustainable sourcing for a beautiful future.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <Palette className="h-12 w-12 text-kiran-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold font-heading text-kiran-text mb-2">Diverse Shades</h3>
              <p className="text-kiran-text font-body">
                A wide range of colors and tones to complement every unique beauty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
