import ProductDetail from "@/components/product-detail"
import type { Product } from "@/lib/types"
import { notFound } from "next/navigation"

async function getProductById(id: string): Promise<Product | undefined> {
  const djangoApiUrl = process.env.NEXT_PUBLIC_DJANGO_API_URL
  const useMockApi = !djangoApiUrl // If Django URL is not set, use mock API

  if (useMockApi) {
    console.log(`NEXT_PUBLIC_DJANGO_API_URL not set. Using internal mock API for product ID: ${id}.`)
    const res = await fetch("/api/products", { cache: "no-store" })
    if (!res.ok) {
      throw new Error("Failed to fetch from internal mock API.")
    }
    const products: Product[] = await res.json()
    return products.find((p) => p.id === id)
  } else {
    const apiUrl = `${djangoApiUrl}/products/${id}/`
    console.log(`Attempting to fetch product by ID from Django API: ${apiUrl}`)
    try {
      const res = await fetch(apiUrl, {
        cache: "no-store",
      })

      if (!res.ok) {
        if (res.status === 404) {
          return undefined // Product not found
        }
        const errorBody = await res.text()
        console.error(
          `Failed to fetch product by ID (${id}) from Django: HTTP Status ${res.status} ${res.statusText}. Response body: ${errorBody}`,
        )
        throw new Error(
          `Failed to fetch product details: Server responded with ${res.status} ${res.statusText}. Check Django backend URL and CORS.`,
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
      console.error("Network or parsing error during Django product detail fetch:", error)
      throw new Error(
        `Network error or invalid response from Django API: ${error instanceof Error ? error.message : String(error)}. Ensure Django is running and accessible.`,
      )
    }
  }
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  let product: Product | undefined
  let error: string | null = null

  try {
    product = await getProductById(params.id)
  } catch (err) {
    console.error("Error fetching product detail:", err)
    error = `Failed to load product details: ${err instanceof Error ? err.message : String(err)}`
  }

  if (!product && !error) {
    notFound() // Render Next.js's default 404 page if product is truly not found
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : product ? (
        <ProductDetail product={product} />
      ) : (
        <p className="text-center text-kiran-text">Product not found.</p>
      )}
    </div>
  )
}
