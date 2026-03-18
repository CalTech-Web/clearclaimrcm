"use client";

import { useState } from "react";
import { motion } from "./MotionWrappers";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      practiceName: (form.elements.namedItem("practiceName") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://caltechweb-forms.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "michelle@clearclaimRCM.com",
          from: "ClearClaim RCM Website",
          subject: `New Contact Form: ${data.firstName} ${data.lastName}`,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          practiceName: data.practiceName,
          message: data.message,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-10"
      >
        <div className="w-16 h-16 rounded-full bg-[#137868]/10 flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#137868" fillOpacity="0.1" />
            <path d="M10 16.5l4.5 4.5 7-9" stroke="#137868" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h4
          className="text-xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Message Sent
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          Thank you for reaching out. Michelle will be in touch with you
          shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-xs text-gray-500 mb-1">Fields marked with <span className="text-[#80010A] font-semibold">*</span> are required.</p>
      {error && (
        <p className="text-sm text-[#80010A] bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Something went wrong. Please try again or email michelle@clearclaimRCM.com directly.
        </p>
      )}
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1.5">
            First Name <span className="text-[#80010A]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            aria-required="true"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] focus:shadow-md bg-white transition-all duration-200"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Last Name <span className="text-[#80010A]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            aria-required="true"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] focus:shadow-md bg-white transition-all duration-200"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email <span className="text-[#80010A]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] focus:shadow-md bg-white transition-all duration-200"
          placeholder="jane@yourpractice.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] focus:shadow-md bg-white transition-all duration-200"
          placeholder="303-555-1234"
        />
      </div>
      <div>
        <label htmlFor="practiceName" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Practice Name
        </label>
        <input
          id="practiceName"
          name="practiceName"
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] focus:shadow-md bg-white transition-all duration-200"
          placeholder="Your Practice Name"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          How can we help? <span className="text-[#80010A]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] bg-white resize-none"
          placeholder="Tell us about your practice and what you are looking for..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3.5 rounded-full bg-[#137868] text-white font-semibold text-sm hover:bg-[#0f5f54] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
