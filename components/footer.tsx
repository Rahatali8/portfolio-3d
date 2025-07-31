import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-kiran-light-gray text-kiran-text py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-heading text-kiran-pink mb-4">
            <Sparkles className="h-8 w-8 text-kiran-gold" />
            Kiran Cosmetics
          </Link>
          <p className="text-sm leading-relaxed font-body">
            Discover your radiant beauty with our exquisite collection of makeup and skincare, inspired by nature.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-kiran-text hover:text-kiran-pink transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-kiran-text hover:text-kiran-pink transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-kiran-text hover:text-kiran-pink transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold font-heading mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products" className="text-sm hover:text-kiran-pink transition-colors font-body">
                Shop All
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=skincare"
                className="text-sm hover:text-kiran-pink transition-colors font-body"
              >
                Skincare
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=perfumes"
                className="text-sm hover:text-kiran-pink transition-colors font-body"
              >
                Perfumes
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=gift-items"
                className="text-sm hover:text-kiran-pink transition-colors font-body"
              >
                Gift Items
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=hair-care"
                className="text-sm hover:text-kiran-pink transition-colors font-body"
              >
                Hair Care
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=body-care"
                className="text-sm hover:text-kiran-pink transition-colors font-body"
              >
                Body Care
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=accessories"
                className="text-sm hover:text-kiran-pink transition-colors font-body"
              >
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold font-heading mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="text-sm hover:text-kiran-pink transition-colors font-body">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm hover:text-kiran-pink transition-colors font-body">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="text-sm hover:text-kiran-pink transition-colors font-body">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm hover:text-kiran-pink transition-colors font-body">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm hover:text-kiran-pink transition-colors font-body">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold font-heading mb-4">Newsletter</h3>
          <p className="text-sm mb-4 font-body">Sign up for exclusive offers, original stories, events and more.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:ring-kiran-pink focus:border-kiran-pink text-sm bg-white text-kiran-text"
            />
            <Button
              type="submit"
              className="bg-kiran-pink hover:bg-kiran-pink/90 text-white px-4 py-2 rounded-md transition-colors"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground mt-12 pt-8 border-t border-gray-200">
        &copy; {new Date().getFullYear()} Kiran Cosmetics. All rights reserved.
      </div>
    </footer>
  )
}
