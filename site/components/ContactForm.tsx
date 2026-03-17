"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission (no backend connected)
    await new Promise((res) => setTimeout(res, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
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
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-xs text-gray-500 mb-1">Fields marked with <span className="text-[#80010A] font-semibold">*</span> are required.</p>
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            First Name <span className="text-[#80010A]">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] bg-white"
            placeholder="Jane"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Last Name <span className="text-[#80010A]">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] bg-white"
            placeholder="Smith"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email <span className="text-[#80010A]">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] bg-white"
          placeholder="jane@yourpractice.com"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Phone
        </label>
        <input
          type="tel"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] bg-white"
          placeholder="303-555-1234"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Practice Name
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] bg-white"
          placeholder="Your Practice Name"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          How can we help? <span className="text-[#80010A]">*</span>
        </label>
        <textarea
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#137868]/40 focus:border-[#137868] bg-white resize-none"
          placeholder="Tell us about your practice and what you are looking for..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3.5 rounded-full bg-[#137868] text-white font-semibold text-sm hover:bg-[#0f5f54] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
