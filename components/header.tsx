"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User2, Search, Menu, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const pathname = usePathname()

  // Updated categories - removed Lips, Face, Eyes
  const categories = [
    { name: "Skincare", url: "/products?category=Skincare" },
    { name: "Skin Care General Items", url: "/products/skin-care-general-items" },
    { name: "Perfumes", url: "/products/perfumes" },
    { name: "Gift Items", url: "/products/gift-items" },
  ]

  const mainNavItems = [
    { title: "Home", url: "/" },
    { title: "Shop All", url: "/products" },
  ]

  const otherPages = [
    { title: "About Us", url: "/about" },
    { title: "Contact Us", url: "/contact" },
    { title: "Blog", url: "/blog" },
    { title: "Policy Pages", url: "/policy" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold font-heading text-kiran-pink transition-colors hover:text-kiran-gold transform hover:scale-105"
        >
          <Sparkles className="h-8 w-8 text-kiran-gold animate-pulse-slow" />
          Kiran Cosmetics
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {mainNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className={`text-base font-medium transition-all duration-300 hover:text-kiran-pink hover:scale-105 ${
                pathname === item.url ? "text-kiran-pink font-semibold" : "text-kiran-text"
              }`}
            >
              {item.title}
            </Link>
          ))}

          {/* Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-base font-medium text-kiran-text hover:text-kiran-pink flex items-center gap-1 px-0 group transition-all duration-300 hover:scale-105"
              >
                Categories{" "}
                <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 shadow-xl rounded-md bg-white/95 backdrop-blur-sm animate-fade-in-up">
              {categories.map((category) => (
                <DropdownMenuItem key={category.name} asChild>
                  <Link
                    href={category.url}
                    className="block px-4 py-2 text-sm text-kiran-text hover:bg-kiran-light-gray hover:text-kiran-pink transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Pages Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-base font-medium text-kiran-text hover:text-kiran-pink flex items-center gap-1 px-0 group transition-all duration-300 hover:scale-105"
              >
                More{" "}
                <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 shadow-xl rounded-md bg-white/95 backdrop-blur-sm animate-fade-in-up">
              {otherPages.map((item) => (
                <DropdownMenuItem key={item.title} asChild>
                  <Link
                    href={item.url}
                    className="block px-4 py-2 text-sm text-kiran-text hover:bg-kiran-light-gray hover:text-kiran-pink transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Icons (Search, Cart, User) */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-kiran-text hover:text-kiran-pink transition-colors transform hover:scale-110"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-kiran-text hover:text-kiran-pink transition-colors transform hover:scale-110"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-kiran-text hover:text-kiran-pink transition-colors transform hover:scale-110"
          >
            <User2 className="h-5 w-5" />
            <span className="sr-only">User Account</span>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-kiran-text hover:text-kiran-pink transition-colors transform hover:scale-110"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-kiran-background p-6">
              <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-heading text-kiran-pink mb-6">
                <Sparkles className="h-7 w-7 text-kiran-gold" />
                Kiran Cosmetics
              </Link>
              <nav className="flex flex-col gap-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`text-lg font-medium transition-colors hover:text-kiran-pink ${
                      pathname === item.url ? "text-kiran-pink font-semibold" : "text-kiran-text"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-lg font-semibold text-kiran-text">Categories</span>
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.url}
                      className="block text-base text-kiran-text hover:text-kiran-pink transition-colors pl-4"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-lg font-semibold text-kiran-text">More</span>
                  {otherPages.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="block text-base text-kiran-text hover:text-kiran-pink transition-colors pl-4"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
