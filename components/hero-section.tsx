import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center">
      <Image
        src="/hero-back.jpg"
        alt="Kiran Cosmetics Hero Background"
        layout="fill"
        quality={90}
        className="z-0 animate-fade-in"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 drop-shadow-lg animate-slide-in-top">
          Kiran Cosmetics
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl font-body drop-shadow-md animate-slide-in-bottom">
          Discover your radiant beauty with our exquisite collection of makeup and skincare, inspired by nature.
        </p>
        <Link href="/products" passHref>
          <Button className="bg-kiran-pink hover:bg-kiran-pink/90 text-white px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up">
            Shop Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
