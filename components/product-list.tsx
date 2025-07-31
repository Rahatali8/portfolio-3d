import type { Product } from "@/lib/types"
import ProductCard from "./product-card"

export default function ProductList({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="text-center text-muted-foreground">No products found.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
