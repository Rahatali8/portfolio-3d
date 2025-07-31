import { NextResponse } from "next/server"
import type { Product } from "@/lib/types"

// Simulated product data
const products: Product[] = [
  {
    id: "1",
    name: "Radiant Glow Foundation",
    description: "Achieve a flawless, luminous complexion with our lightweight, buildable foundation.",
    price: 35.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Face", // Keeping product in mock data, but removing category from navigation
    brand: "Kiran",
    reviews: [
      { id: "r1", rating: 5, comment: "Love this foundation! It feels so light and gives a beautiful glow." },
      { id: "r2", rating: 4, comment: "Good coverage, but wish there were more shades." },
    ],
    variants: [{ type: "shade", options: ["Light Beige", "Warm Ivory", "Medium Tan", "Deep Bronze"] }],
  },
  {
    id: "2",
    name: "Velvet Kiss Lipstick",
    description: "Indulge in rich, long-lasting color with a luxurious velvet matte finish.",
    price: 22.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Lips", // Keeping product in mock data, but removing category from navigation
    brand: "Kiran",
    reviews: [
      { id: "r3", rating: 5, comment: "My go-to red lipstick! Stays on all day." },
      { id: "r4", rating: 4, comment: "Beautiful color, a bit drying though." },
    ],
    variants: [{ type: "shade", options: ["Ruby Red", "Nude Peach", "Berry Bliss", "Coral Sunset"] }],
  },
  {
    id: "3",
    name: "Enchanted Eyeshadow Palette",
    description: "A versatile palette with 12 highly pigmented shades for endless eye looks.",
    price: 45.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eyes", // Keeping product in mock data, but removing category from navigation
    brand: "Kiran",
    reviews: [
      { id: "r5", rating: 5, comment: "The colors are stunning and blend like a dream!" },
      { id: "r6", rating: 5, comment: "Perfect for both day and night looks." },
    ],
    variants: [],
  },
  {
    id: "4",
    name: "Hydra-Boost Serum",
    description: "Deeply hydrate and plump your skin with this powerful hyaluronic acid serum.",
    price: 58.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Skincare",
    brand: "Kiran",
    reviews: [
      { id: "r7", rating: 5, comment: "My skin feels so soft and hydrated after using this." },
      { id: "r8", rating: 4, comment: "A bit pricey, but worth it for the results." },
    ],
    variants: [],
  },
  {
    id: "5",
    name: "Silky Smooth Blush",
    description: "Add a natural flush of color with our finely milled, long-wearing blush.",
    price: 28.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Face", // Keeping product in mock data, but removing category from navigation
    brand: "Kiran",
    reviews: [{ id: "r9", rating: 5, comment: "Perfect everyday blush. Blends seamlessly." }],
    variants: [{ type: "shade", options: ["Rose Petal", "Coral Dream", "Warm Bronze"] }],
  },
  {
    id: "6",
    name: "Lash Amplify Mascara",
    description: "Achieve dramatic volume and length without clumping.",
    price: 20.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eyes", // Keeping product in mock data, but removing category from navigation
    brand: "Kiran",
    reviews: [{ id: "r10", rating: 4, comment: "Great mascara, but can smudge a little by end of day." }],
    variants: [],
  },
  {
    id: "7",
    name: "Dewy Finish Setting Spray",
    description: "Lock in your makeup for hours with a refreshing, dewy finish.",
    price: 25.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Face", // Keeping product in mock data, but removing category from navigation
    brand: "Kiran",
    reviews: [{ id: "r11", rating: 5, comment: "My makeup lasts all day with this spray!" }],
    variants: [],
  },
  {
    id: "8",
    name: "Nourishing Lip Balm",
    description: "Heal and protect dry, chapped lips with our ultra-hydrating formula.",
    price: 15.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Lips", // Keeping product in mock data, but removing category from navigation
    brand: "Kiran",
    reviews: [{ id: "r12", rating: 5, comment: "Best lip balm ever! My lips feel so soft." }],
    variants: [{ type: "flavor", options: ["Mint", "Berry", "Vanilla"] }],
  },
  {
    id: "9",
    name: "Precision Liquid Eyeliner",
    description: "Create sharp, defined lines with ease using our long-wearing liquid eyeliner.",
    price: 18.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Eyes", // Keeping product in mock data, but removing category from navigation
    brand: "Kiran",
    reviews: [{ id: "r13", rating: 4, comment: "Easy to apply, but dries quickly." }],
    variants: [],
  },
  {
    id: "10",
    name: "Gentle Foaming Cleanser",
    description: "Effectively remove impurities without stripping your skin's natural moisture.",
    price: 30.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Skincare",
    brand: "Kiran",
    reviews: [{ id: "r14", rating: 5, comment: "Leaves my skin feeling clean and refreshed." }],
    variants: [],
  },
  // New products for new categories
  {
    id: "11",
    name: "Daily Hydration Cream",
    description: "A lightweight, non-greasy cream for everyday skin hydration and protection.",
    price: 40.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Skin Care General Items",
    brand: "Kiran",
    reviews: [{ id: "r15", rating: 5, comment: "Perfect for my sensitive skin, keeps it moisturized all day." }],
    variants: [],
  },
  {
    id: "12",
    name: "Vitamin C Brightening Serum",
    description: "Boost radiance and even skin tone with this potent antioxidant serum.",
    price: 65.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Skin Care General Items",
    brand: "Kiran",
    reviews: [{ id: "r16", rating: 4, comment: "Saw a noticeable difference in my skin's brightness." }],
    variants: [],
  },
  {
    id: "13",
    name: "Eau de Parfum - Floral Bloom",
    description: "A captivating fragrance with notes of jasmine, rose, and sandalwood.",
    price: 75.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Perfumes",
    brand: "Kiran",
    reviews: [{ id: "r17", rating: 5, comment: "Absolutely love this scent! Long-lasting and elegant." }],
    variants: [{ type: "size", options: ["50ml", "100ml", "200ml"] }],
  },
  {
    id: "14",
    name: "Eau de Toilette - Citrus Fresh",
    description: "A refreshing and invigorating scent with hints of lemon, bergamot, and green tea.",
    price: 55.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Perfumes",
    brand: "Kiran",
    reviews: [{ id: "r18", rating: 4, comment: "Great for everyday wear, very light and fresh." }],
    variants: [{ type: "size", options: ["30ml", "50ml", "100ml"] }],
  },
  {
    id: "15",
    name: "Deluxe Beauty Gift Set",
    description: "A curated collection of our best-selling makeup and skincare essentials, perfect for gifting.",
    price: 120.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Gift Items",
    brand: "Kiran",
    reviews: [{ id: "r19", rating: 5, comment: "My friend loved this gift! High-quality products." }],
    variants: [],
  },
  {
    id: "16",
    name: "Mini Lip Gloss Trio",
    description: "Three travel-sized lip glosses in popular shades, ideal for a quick touch-up.",
    price: 30.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Gift Items",
    brand: "Kiran",
    reviews: [{ id: "r20", rating: 4, comment: "Cute set, perfect for trying out different colors." }],
    variants: [{ type: "shade", options: ["Assorted Nudes", "Assorted Berries"] }],
  },
  {
    id: "17",
    name: "Argan Oil Hair Mask",
    description: "Deeply nourishes and repairs damaged hair, leaving it soft and shiny.",
    price: 28.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Hair Care",
    brand: "Kiran",
    reviews: [{ id: "r21", rating: 5, comment: "My hair has never felt so good!" }],
    variants: [],
  },
  {
    id: "18",
    name: "Shea Butter Body Lotion",
    description: "Rich, creamy lotion that provides intense hydration for dry skin.",
    price: 20.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Body Care",
    brand: "Kiran",
    reviews: [{ id: "r22", rating: 4, comment: "Absorbs quickly and smells amazing." }],
    variants: [{ type: "scent", options: ["Vanilla", "Lavender", "Unscented"] }],
  },
  {
    id: "19",
    name: "Makeup Brush Set (5-piece)",
    description: "Essential brushes for a flawless makeup application, made with synthetic bristles.",
    price: 40.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "Accessories",
    brand: "Kiran",
    reviews: [{ id: "r23", rating: 5, comment: "High quality brushes, great for beginners." }],
    variants: [],
  },
]

export async function GET() {
  try {
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
