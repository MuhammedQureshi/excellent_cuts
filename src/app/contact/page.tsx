'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '8:30 AM - 6:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 5:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              VISIT <span className="text-amber-500">US</span>
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Walk-ins welcome. We look forward to serving you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-zinc-900 border-2 rounded-lg border-amber-500/20 p-8 hover:border-amber-500 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-amber-500/10 p-4 rounded-full">
                    <MapPin className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h2 className="text-white text-2xl mb-3">Address</h2>
                    <p className="text-white/70 text-lg">
                        57 Anerley Rd
                      <br />
                        London, SE19 2AS
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-zinc-900 border-2 rounded-lg border-amber-500/20 p-8 hover:border-amber-500 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-amber-500/10 p-4 rounded-full">
                    <Phone className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h2 className="text-white text-2xl mb-3">Phone</h2>
                    <a
                      href="tel:+12125551234"
                      className="text-white/70 text-lg hover:text-amber-500 transition-colors"
                    >
                      02037295065
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-zinc-900 border-2 rounded-lg border-amber-500/20 p-8 hover:border-amber-500 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-amber-500/10 p-4 rounded-full">
                    <Clock className="w-8 h-8 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-white text-2xl mb-4">Business Hours</h2>
                    <div className="space-y-3">
                      {businessHours.map((schedule) => (
                        <div
                          key={schedule.day}
                          className="flex justify-between items-center border-b border-white/10 pb-3"
                        >
                          <span className="text-white/70">{schedule.day}</span>
                          <span className="text-amber-500">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full min-h-[600px]"
            >
              <div className="bg-zinc-900 border-2 border-amber-500/20 h-full p-4 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.2904999743982!2d-0.07479722281057903!3d51.416090071792766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487601423a49e1a1%3A0x39d3156cb204b7d4!2sExcellent%20Cut!5e0!3m2!1sen!2suk!4v1761569675795!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Classic Cuts Barber Shop Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black border-2 border-amber-500 p-8 md:p-12 text-center rounded-lg"
          >
            <h2 className="text-3xl text-white mb-4">Walk-Ins Welcome</h2>
            <p className="text-white/70 text-lg mb-6">
              No appointment necessary. We serve customers on a first-come, first-served basis.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
