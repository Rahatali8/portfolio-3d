import { Sparkles, ShieldCheck, FileText, BookOpen } from "lucide-react"
import Link from "next/link"

export default function PolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-kiran-pink text-center mb-10 animate-slide-in-top">
        Our Policies
      </h1>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Important Information
        </h2>
        <p className="text-lg text-kiran-text font-body leading-relaxed mb-6">
          At Kiran Cosmetics, we are committed to transparency and ensuring a clear understanding of our practices.
          Below you will find links to our key policy pages, designed to provide you with all the necessary information
          regarding your privacy, shopping experience, and terms of service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/privacy"
            className="group flex flex-col items-center text-center p-6 bg-kiran-light-gray rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <ShieldCheck className="h-12 w-12 text-kiran-pink mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold font-heading text-kiran-text mb-2 group-hover:text-kiran-pink transition-colors">
              Privacy Policy
            </h3>
            <p className="text-kiran-text font-body text-sm">
              Learn how we collect, use, and protect your personal data.
            </p>
          </Link>

          <Link
            href="/shipping"
            className="group flex flex-col items-center text-center p-6 bg-kiran-light-gray rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <FileText className="h-12 w-12 text-kiran-pink mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold font-heading text-kiran-text mb-2 group-hover:text-kiran-pink transition-colors">
              Shipping & Returns
            </h3>
            <p className="text-kiran-text font-body text-sm">
              Information on delivery times, shipping costs, and our return process.
            </p>
          </Link>

          <Link
            href="/terms"
            className="group flex flex-col items-center text-center p-6 bg-kiran-light-gray rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <BookOpen className="h-12 w-12 text-kiran-pink mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold font-heading text-kiran-text mb-2 group-hover:text-kiran-pink transition-colors">
              Terms of Service
            </h3>
            <p className="text-kiran-text font-body text-sm">
              Our terms and conditions for using the Kiran Cosmetics website.
            </p>
          </Link>
        </div>
      </section>

      <section className="text-center animate-fade-in-up">
        <p className="text-lg font-body text-kiran-text">
          If you have any questions not covered by these policies, please don't hesitate to{" "}
          <Link href="/contact" className="text-kiran-pink hover:underline font-semibold">
            contact us
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
