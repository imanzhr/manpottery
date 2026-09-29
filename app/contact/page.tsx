"use client";

import { BASE_PATH } from "@/lib/base-path";

import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SOCIAL_LINKS, STUDIO_ADDRESS } from "@/lib/constants";
import { Phone, Mail, Instagram, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="We'd love to hear from you — questions, custom orders, or just to say hello"
        image={`${BASE_PATH}/images/Pallet/_DSC0241.webp`}
        imageAlt="Hand-painted Manpottery pieces in the studio"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <h2 className="font-display text-3xl text-stone mb-8">
                Send us a message
              </h2>

              {submitted && (
                <div className="bg-sage/20 border border-sage/40 rounded-2xl p-6 mb-8 text-stone text-sm">
                  Thank you for your message. We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-ivory border border-sand rounded-xl px-5 py-3.5 text-stone placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-ivory border border-sand rounded-xl px-5 py-3.5 text-stone placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-stone mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full bg-ivory border border-sand rounded-xl px-5 py-3.5 text-stone placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-ivory border border-sand rounded-xl px-5 py-3.5 text-stone placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all resize-none"
                    placeholder="Tell us what you have in mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-stone text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-stone/90 transition-all duration-300"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.15} className="lg:col-span-2">
              <h2 className="font-display text-3xl text-stone mb-8">
                Studio info
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone mb-1">Visit Us</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {STUDIO_ADDRESS}
                      <br />
                      Open by appointment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone mb-1">Phone</h3>
                    <a
                      href={`tel:${SOCIAL_LINKS.phone}`}
                      className="text-warm-gray text-sm hover:text-terracotta transition-colors"
                    >
                      {SOCIAL_LINKS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone mb-1">Email</h3>
                    <a
                      href={`mailto:${SOCIAL_LINKS.email}`}
                      className="text-warm-gray text-sm hover:text-terracotta transition-colors"
                    >
                      {SOCIAL_LINKS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Instagram size={18} className="text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone mb-1">Instagram</h3>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-gray text-sm hover:text-terracotta transition-colors"
                    >
                      @manpottery
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-2xl overflow-hidden bg-sand aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.8!2d-122.6805!3d45.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzIzLjIiTiAxMjLCsDQwJzUwLjAiVw!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Manpottery studio location"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>
    </>
  );
}
