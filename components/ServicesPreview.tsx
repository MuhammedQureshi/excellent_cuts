'use client'
import { motion } from 'framer-motion'
import {Beaker, ChevronRight, Scissors, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ServicesPreview() {
        const services = [
          { name: 'Hair cut', price: '£17', icon: Scissors },
          { name: 'Skin Fade', price: '£19', icon: Zap },
          { name: 'Beard Trim', price: '£11', icon: Beaker },
        ];
  return (
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                OUR <span className="text-amber-500">SERVICES</span>
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto" />
            </motion.div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-black border-2 rounded-xl border-amber-500/20 p-8 text-center group hover:border-amber-500 transition-all duration-300"
                >
                  <service.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-white text-xl mb-2">{service.name}</h3>
                  <p className="text-amber-500 text-2xl">{service.price}</p>
                </motion.div>
              ))}
            </div>
  
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
            <Link
                href="/services"
                className="bg-amber-500 rounded-xl hover:bg-amber-600 text-black px-8 py-4 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                View Services
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            </motion.div>
          </div>
        </section>
  )
}
