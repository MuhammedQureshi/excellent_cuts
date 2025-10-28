import { Scissors, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-amber-500" />
              <span className="tracking-wider">
                EXCELLENT <span className="text-amber-500">CUTS</span>
              </span>
            </div>
            <p className="text-white/70">
              Where tradition meets style. Your neighborhood barber shop since 2003.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-amber-500">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/70 hover:text-amber-500 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-white/70 hover:text-amber-500 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-amber-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-amber-500">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; 2025 Excellent Cuts Barber Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
