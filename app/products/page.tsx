"use client"

import ProductList from "@/components/product-list"
import type { Product } from "@/lib/types"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { useEffect, useState } from "react"

async function getAllProducts(): Promise<Product[]> {
  const djangoApiUrl = process.env.NEXT_PUBLIC_DJANGO_API_URL
  const useMockApi = !djangoApiUrl // If Django URL is not set, use mock API

  if (useMockApi) {
    console.log("NEXT_PUBLIC_DJANGO_API_URL not set. Using internal mock API for all products.")
    const res = await fetch("/api/products", { cache: "no-store" })
    if (!res.ok) {
      throw new Error("Failed to fetch from internal mock API.")
    }
    return res.json()
  } else {
    const apiUrl = `${djangoApiUrl}/products/`
    console.log(`Attempting to fetch all products from Django API: ${apiUrl}`)
    try {
      const res = await fetch(apiUrl, {
        cache: "no-store",
      })

      if (!res.ok) {
        const errorBody = await res.text()
        console.error(
          `Failed to fetch all products from Django: HTTP Status ${res.status} ${res.statusText}. Response body: ${errorBody}`,
        )
        throw new Error(
          `Failed to fetch all products: Server responded with ${res.status} ${res.statusText}. Check Django backend URL and CORS.`,
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
      console.error("Network or parsing error during all products fetch:", error)
      throw new Error(
        `Network error or invalid response from Django API: ${error instanceof Error ? error.message : String(error)}. Ensure Django is running and accessible.`,
      )
    }
  }
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts()
        setProducts(fetchedProducts)
      } catch (err) {
        console.error("Error fetching all products:", err)
        setError(`Failed to load products: ${err instanceof Error ? err.message : String(err)}`)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4 md:mb-0 text-kiran-text">Our Collection</h1>
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-sm text-muted-foreground font-body">Filters: Category, Brand, Shade</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto shrink-0 bg-transparent border-kiran-pink text-kiran-pink hover:bg-kiran-pink/10 transition-colors"
              >
                <ArrowUpDown className="w-4 h-4 mr-2" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="end">
              <DropdownMenuRadioGroup
                value="featured"
                onValueChange={() => {
                  /* handle sort change */
                }}
              >
                <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {loading ? (
        <p className="text-center text-kiran-text">Loading products...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  )
}
