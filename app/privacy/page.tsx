import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-kiran-pink text-center mb-10 animate-slide-in-top">
        Privacy Policy
      </h1>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Your Privacy Matters
        </h2>
        <p className="text-lg text-kiran-text font-body leading-relaxed mb-4">
          At Kiran Cosmetics, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website{" "}
          <Link href="/" className="text-kiran-pink hover:underline">
            kirancosmetics.com
          </Link>
          , including any other media form, media channel, mobile website, or mobile application related or connected
          thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the
          terms of this privacy policy, please do not access the Site.
        </p>
        <p className="text-lg text-kiran-text font-body leading-relaxed">
          We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you
          about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to
          periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made
          aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by
          your continued use of the Site after the date such revised Privacy Policy is posted.
        </p>
      </section>

      <section className="bg-kiran-light-gray p-8 rounded-xl shadow-lg mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Information We Collect
        </h2>
        <p className="text-kiran-text font-body leading-relaxed mb-4">
          We may collect information about you in a variety of ways. The information we may collect on the Site
          includes:
        </p>
        <ul className="list-disc list-inside text-kiran-text font-body space-y-2 mb-4">
          <li>
            **Personal Data:** Personally identifiable information, such as your name, shipping address, email address,
            and telephone number, and demographic information, such as your age, gender, hometown, and interests, that
            you voluntarily give to us when you register with the Site or when you choose to participate in various
            activities related to the Site, such as online chat and message boards.
          </li>
          <li>
            **Derivative Data:** Information our servers automatically collect when you access the Site, such as your IP
            address, your browser type, your operating system, your access times, and the pages you have viewed directly
            before and after accessing the Site.
          </li>
          <li>
            **Financial Data:** Financial information, such as data related to your payment method (e.g., valid credit
            card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or
            request information about our services from the Site.
          </li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Use of Your Information
        </h2>
        <p className="text-kiran-text font-body leading-relaxed mb-4">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized
          experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul className="list-disc list-inside text-kiran-text font-body space-y-2">
          <li>Create and manage your account.</li>
          <li>
            Process your transactions and send you related information, including purchase confirmations and invoices.
          </li>
          <li>Email you regarding your account or order.</li>
          <li>Enable user-to-user communications.</li>
          <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
          <li>Increase the efficiency and operation of the Site.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          <li>Notify you of updates to the Site.</li>
          <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
        </ul>
      </section>

      <div className="text-center text-sm text-muted-foreground mt-12 font-body">
        Last Updated: July 31, {new Date().getFullYear()}
      </div>
    </div>
  )
}
