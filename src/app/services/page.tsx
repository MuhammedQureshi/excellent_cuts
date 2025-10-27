'use client';

import { motion } from 'framer-motion';
import { Scissors, Sparkles, Slice, Droplet, Menu, Wind, Star, Zap, Award, Crown, Heart, Circle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Scissors,
      name: 'Classic Haircut',
      price: '$35',
      description: 'Traditional haircut with clipper and scissor work, styled to perfection',
      duration: '45 min',
    },
    {
      icon: Slice,
      name: 'Hot Towel Shave',
      price: '$40',
      description: 'Luxurious straight razor shave with hot towel treatment and premium products',
      duration: '30 min',
    },
    {
      icon: Menu,
      name: 'Beard Trim & Shape',
      price: '$25',
      description: 'Expert beard trimming and shaping to maintain your perfect style',
      duration: '20 min',
    },
    {
      icon: Sparkles,
      name: 'Premium Cut & Shave',
      price: '$65',
      description: 'Complete grooming package: haircut, hot towel shave, and facial massage',
      duration: '75 min',
    },
    {
      icon: Crown,
      name: 'Executive Cut',
      price: '$50',
      description: 'Premium haircut with consultation, wash, cut, and styling',
      duration: '60 min',
    },
    {
      icon: Droplet,
      name: 'Hair & Scalp Treatment',
      price: '$45',
      description: 'Deep conditioning treatment with relaxing scalp massage',
      duration: '40 min',
    },
    {
      icon: Wind,
      name: 'Fade Haircut',
      price: '$40',
      description: 'Modern fade cut with precise blending and clean lines',
      duration: '50 min',
    },
    {
      icon: Star,
      name: 'Kids Haircut',
      price: '$25',
      description: 'Special care for young gentlemen ages 12 and under',
      duration: '30 min',
    },
    {
      icon: Zap,
      name: 'Style & Finish',
      price: '$15',
      description: 'Professional styling with premium products',
      duration: '15 min',
    },
    {
      icon: Award,
      name: 'Gentleman\'s Facial',
      price: '$55',
      description: 'Rejuvenating facial treatment with steam and hot towels',
      duration: '45 min',
    },
    {
      icon: Heart,
      name: 'Full Grooming Package',
      price: '$90',
      description: 'The complete experience: cut, shave, facial, and grooming consultation',
      duration: '90 min',
    },
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
              OUR <span className="text-amber-500">SERVICES</span>
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Experience premium grooming services delivered by master barbers with years of expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-zinc-900 rounded-lg border-2 border-amber-500/20 p-8 hover:border-amber-500 transition-all duration-300 group"
              >
                <div className="bg-amber-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <service.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-white text-2xl mb-2">{service.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-amber-500 text-3xl">{service.price}</span>
                  <span className="text-white/50">{service.duration}</span>
                </div>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
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
            className="bg-black border-2 border-amber-500 p-8 md:p-12 rounded-lg"
          >
            <div className="text-center mb-8">
              <Circle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl text-white mb-4">Walk-Ins Welcome</h2>
              <p className="text-white/70 text-lg">
                No appointment necessary. We serve customers on a first-come, first-served basis.
                During peak hours, we recommend arriving early to minimize wait times.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <h3 className="text-amber-500 mb-2">Payment Methods</h3>
                <p className="text-white/70">Cash, Credit & Debit Cards</p>
              </div>
              <div className="text-center">
                <h3 className="text-amber-500 mb-2">Age Policy</h3>
                <p className="text-white/70">All ages welcome</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-black mb-6">
              EXPERIENCE THE DIFFERENCE
            </h2>
            <p className="text-black/80 text-xl">
              Visit us today and discover why we're the neighborhood's favorite barber shop
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
