import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Krutosec for a free security consultation.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-ink/10 grain">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="max-w-xl">
          <span className="trace-eyebrow text-teal-dark">Contact</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Let&apos;s secure your business.
          </h1>
          <p className="mt-5 text-[15.5px] leading-relaxed text-ink/70">
            Tell us about your application, network, or product, and we&apos;ll come back with a
            scoped recommendation, no obligation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-display text-[15px] font-medium text-ink">Email</p>
                  <p className="text-[14px] text-ink/60">hello@krutosec.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-display text-[15px] font-medium text-ink">Phone</p>
                  <p className="text-[14px] text-ink/60">+44 7533 793002</p>
                  <p className="text-[14px] text-ink/60">+91 73561 84469</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-display text-[15px] font-medium text-ink">Offices</p>
                  <p className="text-[14px] text-ink/60">Manchester, United Kingdom</p>
                  <p className="text-[14px] text-ink/60">Bangalore, India</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
