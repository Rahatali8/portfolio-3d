import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold font-heading text-kiran-text group-hover:text-kiran-pink transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground font-body mb-2 line-clamp-2">{product.description}</p>
          <p className="text-xl font-bold text-kiran-gold font-heading">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button size="icon" className="bg-kiran-pink hover:bg-kiran-pink/90 text-white rounded-full shadow-lg">
          <ShoppingCart className="w-5 h-5" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>
    </div>
  )
}
