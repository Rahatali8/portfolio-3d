"use client"

import ProductList from "@/components/product-list"
import type { Product } from "@/lib/types"
import { useEffect, useState } from "react"

async function getGiftItemProducts(): Promise<Product[]> {
  const djangoApiUrl = process.env.NEXT_PUBLIC_DJANGO_API_URL
  const useMockApi = !djangoApiUrl // If Django URL is not set, use mock API

  if (useMockApi) {
    console.log("NEXT_PUBLIC_DJANGO_API_URL not set. Using internal mock API for gift items.")
    const res = await fetch("/api/products", { cache: "no-store" })
    if (!res.ok) {
      throw new Error("Failed to fetch from internal mock API.")
    }
    const products: Product[] = await res.json()
    return products.filter((p) => p.category === "Gift Items")
  } else {
    const apiUrl = `${djangoApiUrl}/products/?category=Gift Items`
    console.log(`Attempting to fetch gift items from Django API: ${apiUrl}`)
    try {
      const res = await fetch(apiUrl, {
        cache: "no-store",
      })
      if (!res.ok) {
        const errorBody = await res.text()
        console.error(
          `Failed to fetch gift item products from Django: HTTP Status ${res.status} ${res.statusText}. Response body: ${errorBody}`,
        )
        throw new Error(
          `Failed to fetch gift items: Server responded with ${res.status} ${res.statusText}. Check Django backend URL and CORS.`,
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
      console.error("Network or parsing error during gift items fetch:", error)
      throw new Error(
        `Network error or invalid response from Django API: ${error instanceof Error ? error.message : String(error)}. Ensure Django is running and accessible.`,
      )
    }
  }
}

export default function GiftItemsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getGiftItemProducts()
        setProducts(fetchedProducts)
      } catch (err) {
        console.error("Error fetching gift items:", err)
        setError(`Failed to load gift items: ${err instanceof Error ? err.message : String(err)}`)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center text-kiran-text">Gift Items</h1>
      {loading ? (
        <p className="text-center text-kiran-text">Loading gift items...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : products.length === 0 ? (
        <p className="text-center text-muted-foreground font-body">No gift items found.</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  )
}
