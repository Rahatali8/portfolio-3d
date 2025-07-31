import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-heading text-kiran-pink text-center mb-10 animate-slide-in-top">
        Terms of Service
      </h1>

      <section className="bg-white p-8 rounded-xl shadow-lg mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Agreement to Terms
        </h2>
        <p className="text-lg text-kiran-text font-body leading-relaxed mb-4">
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on
          behalf of an entity ("you") and Kiran Cosmetics ("we," "us" or "our"), concerning your access to and use of
          the{" "}
          <Link href="/" className="text-kiran-pink hover:underline">
            kirancosmetics.com
          </Link>{" "}
          website as well as any other media form, media channel, mobile website or mobile application related, linked,
          or otherwise connected thereto (collectively, the "Site").
        </p>
        <p className="text-lg text-kiran-text font-body leading-relaxed">
          You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms
          of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM
          USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
      </section>

      <section className="bg-kiran-light-gray p-8 rounded-xl shadow-lg mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> Intellectual Property Rights
        </h2>
        <p className="text-kiran-text font-body leading-relaxed mb-4">
          Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
          functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
          (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are
          owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various
          other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions,
          and international conventions.
        </p>
        <p className="text-kiran-text font-body leading-relaxed">
          The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except
          as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted,
          distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express
          prior written permission.
        </p>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up">
        <h2 className="text-3xl font-semibold font-heading text-kiran-text mb-6 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-kiran-gold" /> User Representations
        </h2>
        <p className="text-kiran-text font-body leading-relaxed mb-4">
          By using the Site, you represent and warrant that:
        </p>
        <ul className="list-disc list-inside text-kiran-text font-body space-y-2">
          <li>(1) all registration information you submit will be true, accurate, current, and complete;</li>
          <li>
            (2) you will maintain the accuracy of such information and promptly update such registration information as
            necessary;
          </li>
          <li>(3) you have the legal capacity and you agree to comply with these Terms of Service;</li>
          <li>
            (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental
            permission to use the Site;
          </li>
          <li>
            (5) you will not access the Site through automated or non-human means, whether through a bot, script, or
            otherwise;
          </li>
          <li>(6) you will not use the Site for any illegal or unauthorized purpose;</li>
          <li>(7) your use of the Site will not violate any applicable law or regulation.</li>
        </ul>
      </section>

      <div className="text-center text-sm text-muted-foreground mt-12 font-body">
        Last Updated: July 31, {new Date().getFullYear()}
      </div>
    </div>
  )
}
