import { Mail, Phone, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-kiran-pink text-center mb-10 animate-slide-in-top">
        Contact Us
      </h1>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg animate-fade-in-up">
        <div>
          <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-kiran-gold" /> Get in Touch
          </h2>
          <p className="text-lg text-kiran-text font-body leading-relaxed mb-6">
            We'd love to hear from you! Whether you have a question about our products, an order, or just want to share
            your feedback, our team is here to help.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-kiran-pink shrink-0" />
              <div>
                <h3 className="text-xl font-semibold font-heading text-kiran-text">Email Us</h3>
                <p className="text-kiran-text font-body">
                  For general inquiries:{" "}
                  <a href="mailto:info@kirancosmetics.com" className="text-kiran-pink hover:underline">
                    info@kirancosmetics.com
                  </a>
                </p>
                <p className="text-kiran-text font-body">
                  For support:{" "}
                  <a href="mailto:support@kirancosmetics.com" className="text-kiran-pink hover:underline">
                    support@kirancosmetics.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-kiran-pink shrink-0" />
              <div>
                <h3 className="text-xl font-semibold font-heading text-kiran-text">Call Us</h3>
                <p className="text-kiran-text font-body">
                  Customer Service:{" "}
                  <a href="tel:+1234567890" className="text-kiran-pink hover:underline">
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-kiran-text font-body">Available Monday - Friday, 9 AM - 5 PM EST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-kiran-pink shrink-0" />
              <div>
                <h3 className="text-xl font-semibold font-heading text-kiran-text">Visit Us</h3>
                <p className="text-kiran-text font-body">Kiran Cosmetics Headquarters</p>
                <p className="text-kiran-text font-body">123 Beauty Lane, Suite 456</p>
                <p className="text-kiran-text font-body">Cosmetic City, BC 78901</p>
                <p className="text-kiran-text font-body">USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-kiran-light-gray p-8 rounded-xl shadow-inner">
          <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6">Send Us a Message</h2>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-kiran-text font-body">
                Name
              </Label>
              <Input id="name" type="text" placeholder="Your Name" className="border-gray-300 text-kiran-text" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-kiran-text font-body">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@example.com"
                className="border-gray-300 text-kiran-text"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject" className="text-kiran-text font-body">
                Subject
              </Label>
              <Input
                id="subject"
                type="text"
                placeholder="Subject of your message"
                className="border-gray-300 text-kiran-text"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-kiran-text font-body">
                Message
              </Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className="border-gray-300 text-kiran-text"
              />
            </div>
            <Button
              type="submit"
              className="bg-kiran-pink hover:bg-kiran-pink/90 text-white px-6 py-3 rounded-md transition-colors transform hover:scale-105"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
