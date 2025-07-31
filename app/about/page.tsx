import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-kiran-pink text-center mb-10 animate-slide-in-top">
        About Kiran Cosmetics
      </h1>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Our Story
        </h2>
        <p className="text-lg text-kiran-text font-body leading-relaxed mb-4">
          Kiran Cosmetics was founded with a vision to blend the ancient wisdom of natural beauty with modern cosmetic
          science. Our journey began with a passion for creating products that not only enhance outer beauty but also
          nourish and protect the skin. We believe that true radiance comes from within, and our formulations are
          designed to bring out your natural glow.
        </p>
        <p className="text-lg text-kiran-text font-body leading-relaxed">
          Inspired by the rich heritage of beauty rituals and the purity of nature, we meticulously source the finest
          ingredients from around the globe. Every product is a testament to our commitment to quality, ethics, and
          sustainability.
        </p>
      </section>

      <section className="bg-kiran-light-gray p-8 rounded-xl shadow-lg mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Our Philosophy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2">Natural Ingredients</h3>
            <p className="text-kiran-text font-body">
              We prioritize natural, ethically sourced ingredients known for their beneficial properties. Our formulas
              are free from harsh chemicals, parabens, and sulfates.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2">Cruelty-Free & Sustainable</h3>
            <p className="text-kiran-text font-body">
              Kiran Cosmetics is proud to be cruelty-free. We are committed to sustainable practices, from sourcing to
              packaging, minimizing our environmental footprint.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2">Inclusive Beauty</h3>
            <p className="text-kiran-text font-body">
              Beauty knows no bounds. We strive to offer a diverse range of shades and products that celebrate every
              skin tone and type.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2">Innovation & Research</h3>
            <p className="text-kiran-text font-body">
              We continuously invest in research and development to bring you innovative formulas that deliver visible
              results and a luxurious experience.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center animate-fade-in-up">
        <p className="text-xl font-body text-kiran-text">
          Join the Kiran Cosmetics family and embark on a journey to discover your most beautiful self.
        </p>
        <Link href="/products" className="inline-block mt-6">
          <Button className="bg-kiran-pink hover:bg-kiran-pink/90 text-white px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Shop Our Collection
          </Button>
        </Link>
      </section>
    </div>
  )
}
