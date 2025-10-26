'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'


export default function Cta() {
  return (
    <section className="py-20 bg-amber-500">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl text-black mb-6">
          READY FOR A FRESH CUT?
        </h2>
        <p className="text-black/80 text-xl mb-8">
          Walk-ins welcome. No appointment necessary.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-xl bg-black hover:bg-zinc-800 text-white px-8 py-4  transition-all duration-300"
        >
          Visit Us Today
        </Link>
      </motion.div>
    </div>
  </section>
  )
}
