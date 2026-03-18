import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#137868] to-[#0f5f54] pt-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-8xl sm:text-9xl font-bold text-white/20 mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          404
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Page Not Found
        </h1>
        <p className="text-white/80 text-lg leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved. Let us
          get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#137868] font-semibold text-base hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact-us/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#137868] hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
