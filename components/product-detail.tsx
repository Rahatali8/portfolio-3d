"use client"

import Image from "next/image"
import { useState } from "react"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart, ZoomIn } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductDetail({ product }: { product: Product }) {
  const averageRating = product.reviews?.length
    ? product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length
    : 0

  // State to manage selected variants
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: string }>({})
  const [quantity, setQuantity] = useState<string>("1")

  // Initialize selected variants with default values (first option for each variant type)
  useState(() => {
    const initialVariants: { [key: string]: string } = {}
    product.variants?.forEach((variant) => {
      if (variant.options.length > 0) {
        initialVariants[variant.type] = variant.options[0]
      }
    })
    setSelectedVariants(initialVariants)
  })

  const handleVariantChange = (type: string, value: string) => {
    setSelectedVariants((prev) => ({ ...prev, [type]: value }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-8 rounded-xl shadow-lg animate-fade-in">
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg border border-gray-200 group">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Zoom image"
          >
            <ZoomIn className="w-5 h-5 text-kiran-text" />
          </Button>
        </div>
        {/* Placeholder for image thumbnails/slideshow */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="relative w-20 h-20 shrink-0 rounded-md border border-gray-200 overflow-hidden cursor-pointer hover:border-kiran-pink transition-colors"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={`Thumbnail ${i + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-kiran-text animate-slide-in-top">
          {product.name}
        </h1>
        <div className="flex items-center gap-2 animate-fade-in-up">
          <div className="flex items-center gap-0.5 text-kiran-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < averageRating ? "fill-kiran-gold" : "fill-muted stroke-muted-foreground"}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-body">({product.reviews?.length || 0} reviews)</span>
        </div>
        <p className="text-3xl font-bold text-kiran-gold font-heading animate-fade-in-up">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-kiran-text font-body leading-relaxed animate-fade-in-up">{product.description}</p>

        <Separator className="my-4 animate-fade-in-up" />

        {/* Dynamic Variant Selectors */}
        {product.variants && product.variants.length > 0 && (
          <div className="grid gap-6 animate-fade-in-up">
            {product.variants.map((variant) => (
              <div key={variant.type} className="grid gap-2">
                <Label
                  htmlFor={`variant-${variant.type}`}
                  className="text-base capitalize font-semibold text-kiran-text"
                >
                  {variant.type}: <span className="font-normal">{selectedVariants[variant.type]}</span>
                </Label>
                {variant.type === "shade" ? (
                  <RadioGroup
                    id={`variant-${variant.type}`}
                    value={selectedVariants[variant.type]}
                    onValueChange={(value) => handleVariantChange(variant.type, value)}
                    className="flex flex-wrap gap-3"
                  >
                    {variant.options.map((option) => (
                      <Label
                        key={option}
                        htmlFor={`variant-${variant.type}-${option}`}
                        className="border border-gray-200 cursor-pointer rounded-full p-2 flex items-center justify-center text-sm font-body transition-all duration-200
                                   [&:has(:checked)]:bg-kiran-pink [&:has(:checked)]:text-white [&:has(:checked)]:border-kiran-pink
                                   hover:bg-kiran-light-gray hover:text-kiran-pink"
                      >
                        <RadioGroupItem id={`variant-${variant.type}-${option}`} value={option} className="sr-only" />
                        {option}
                      </Label>
                    ))}
                  </RadioGroup>
                ) : (
                  <Select
                    value={selectedVariants[variant.type]}
                    onValueChange={(value) => handleVariantChange(variant.type, value)}
                  >
                    <SelectTrigger className="w-[180px] border-gray-300 text-kiran-text font-body">
                      <SelectValue placeholder={`Select ${variant.type}`} />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-kiran-text font-body">
                      {variant.options.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="grid gap-2 animate-fade-in-up">
          <Label htmlFor="quantity" className="text-base font-semibold text-kiran-text">
            Quantity
          </Label>
          <Select value={quantity} onValueChange={setQuantity}>
            <SelectTrigger className="w-24 border-gray-300 text-kiran-text font-body">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent className="bg-white text-kiran-text font-body">
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up">
          <Button
            size="lg"
            className="flex-1 bg-kiran-pink hover:bg-kiran-pink/90 text-white transition-colors duration-300 transform hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex-1 border-kiran-pink text-kiran-pink hover:bg-kiran-pink/10 bg-transparent transition-colors duration-300 transform hover:scale-105"
          >
            <Heart className="w-5 h-5 mr-2" />
            Add to Wishlist
          </Button>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold font-heading mb-4 text-kiran-text">Customer Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <div className="flex items-center gap-0.5 text-kiran-gold mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-kiran-gold" : "fill-muted stroke-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="text-kiran-text font-body">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground font-body">No reviews yet. Be the first to review this product!</p>
          )}
        </div>
      </div>
    </div>
  )
}
