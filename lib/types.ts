export interface ProductVariant {
  type: string // e.g., "shade", "size", "flavor"
  options: string[] // e.g., ["Light Beige", "Warm Ivory"], ["50ml", "100ml"]
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  brand: string
  reviews?: { id: string; rating: number; comment: string }[]
  variants?: ProductVariant[] // Array of variant types and their options
}
