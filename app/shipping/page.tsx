import { Sparkles, Truck, Package, RefreshCw, MapPin } from "lucide-react"

export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-kiran-pink text-center mb-10 animate-slide-in-top">
        Shipping & Returns
      </h1>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Shipping Information
        </h2>
        <p className="text-lg text-kiran-text font-body leading-relaxed mb-4">
          We strive to process and ship your orders as quickly as possible. Please review the following information
          regarding our shipping policies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2 flex items-center gap-2">
              <Truck className="h-5 w-5" /> Processing Time
            </h3>
            <p className="text-kiran-text font-body">
              Orders are typically processed within 1-2 business days (Monday-Friday, excluding holidays) after payment
              verification. During peak seasons or promotional periods, processing times may be slightly longer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2 flex items-center gap-2">
              <Package className="h-5 w-5" /> Shipping Methods & Costs
            </h3>
            <p className="text-kiran-text font-body mb-2">We offer several shipping options to meet your needs:</p>
            <ul className="list-disc list-inside text-kiran-text font-body space-y-1">
              <li>Standard Shipping (3-7 business days): $5.99 (Free for orders over $50)</li>
              <li>Expedited Shipping (2-3 business days): $12.99</li>
              <li>Express Shipping (1-2 business days): $24.99</li>
            </ul>
            <p className="text-kiran-text font-body mt-2">
              Shipping costs are calculated at checkout based on your order total and selected method.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2 flex items-center gap-2">
              <MapPin className="h-5 w-5" /> International Shipping
            </h3>
            <p className="text-kiran-text font-body">
              We currently ship to select international destinations. International shipping costs and delivery times
              vary by country. Please note that customs duties, taxes, and fees may apply and are the responsibility of
              the recipient.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Order Tracking
            </h3>
            <p className="text-kiran-text font-body">
              Once your order has shipped, you will receive a confirmation email with a tracking number. You can use
              this number to track your package's journey.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-kiran-light-gray p-8 rounded-xl shadow-lg animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Returns & Exchanges
        </h2>
        <p className="text-lg text-kiran-text font-body leading-relaxed mb-4">
          Your satisfaction is our priority. If you are not completely satisfied with your purchase, we're here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2 flex items-center gap-2">
              <RefreshCw className="h-5 w-5" /> Return Policy
            </h3>
            <p className="text-kiran-text font-body">
              You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the
              return shipping costs if the return is a result of our error (you received an incorrect or defective item,
              etc.).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2 flex items-center gap-2">
              <Package className="h-5 w-5" /> How to Initiate a Return
            </h3>
            <p className="text-kiran-text font-body">
              To initiate a return, please contact our customer service team at{" "}
              <a href="mailto:support@kirancosmetics.com" className="text-kiran-pink hover:underline">
                support@kirancosmetics.com
              </a>{" "}
              with your order number and reason for return. We will provide you with instructions on how to send back
              your item(s).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Refunds
            </h3>
            <p className="text-kiran-text font-body">
              You should expect to receive your refund within four weeks of giving your package to the return shipper,
              however, in many cases you will receive a refund more quickly. This time period includes the transit time
              for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process
              your return once we receive it (3 to 5 business days), and the time it takes your bank to process our
              refund request (5 to 10 business days).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-heading text-kiran-pink mb-2 flex items-center gap-2">
              <RefreshCw className="h-5 w-5" /> Exchanges
            </h3>
            <p className="text-kiran-text font-body">
              If you need to exchange an item, please contact us. We will guide you through the process. Exchanges are
              subject to product availability.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
