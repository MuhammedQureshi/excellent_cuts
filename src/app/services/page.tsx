'use client';

import { motion } from 'framer-motion';
import { Scissors, Zap, Crown, User, Baby, Droplet, Heart, Circle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Scissors,
      name: 'Hair cut',
      price: '£17',
      description: 'A classic haircut tailored to your style and preferences — finished with precision and care.',
      duration: '25 min',
      image: 'https://images.unsplash.com/photo-1706769015484-248bd241945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3lzJTIwaGFpcmN1dCUyMGJhcmJlcnNob3B8ZW58MXx8fHwxNzYxNjgyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Zap,
      name: 'Skin Fade',
      price: '£19',
      description: 'A sharp, modern skin fade with clean transitions and detailed finishing around the edges.',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBza2luJTIwZmFkZXxlbnwxfHx8fDE3NjE2ODIzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Scissors,
      name: 'Crew Cut',
      price: '£14',
      description: 'An even, low-maintenance all-over clipper cut for a clean and neat appearance.',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1690028377764-b038477bc7fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmV3JTIwY3V0JTIwaGFpcmN1dHxlbnwxfHx8fDE3NjE2ODIzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Scissors,
      name: 'Beard Trim',
      price: '£11',
      description: 'Professional beard shaping and trimming to maintain a tidy and stylish look.',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686',
    },
    {
      icon: Crown,
      name: 'Beard Trim & Shape Up',
      price: '£15',
      description: 'Complete beard service including shaping, trimming, and defining edges for a sharp finish.',
      duration: '25 min',
      image: 'https://images.unsplash.com/photo-1643898804248-1239ef388ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHNoYXBpbmclMjBzdHlsaW5nfGVufDF8fHx8MTc2MTY4MjM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: User,
      name: 'Boys Hair Cut',
      price: '£15',
      description: 'A clean and stylish haircut for boys aged 10–15, finished with attention to detail.',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1521490878864-a50e9fcb5718?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    },
    {
      icon: Baby,
      name: 'Boys Hair Cut under 10',
      price: '£13',
      description: 'Gentle and precise haircut for younger boys under 10 — quick, calm, and professional.',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1759408174071-f2971472dc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjbGFzc2ljJTIwaGFpcmN1dHxlbnwxfHx8fDE3NjE2ODIzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Droplet,
      name: 'Hot Towel Shave',
      price: '£14',
      description: 'A traditional wet shave with hot towels, rich lather, and soothing aftershave for ultimate comfort.',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1761148438883-e34e0289a214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjB0b3dlbCUyMHNoYXZlfGVufDF8fHx8MTc2MTY4MjM2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Scissors,
      name: 'Clipper Cut Fade',
      price: '£14',
      description: 'A tidy clipper-only cut with a blended fade for a sharp, modern finish.',
      duration: '25 min',
      image: 'https://i.ytimg.com/vi/kNbVQ1sirTA/maxresdefault.jpg',
    },
    {
      icon: Heart,
      name: 'OAP',
      price: '£12',
      description: 'A classic, comfortable haircut for senior gentlemen, delivered with care and precision.',
      duration: '25 min',
      image: 'https://images.unsplash.com/photo-1549663369-22ac6b052faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBoYWlyY3V0JTIwYmFyYmVyc2hvcHxlbnwxfHx8fDE3NjE2ODIzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
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
                className="bg-zinc-900 border-2 border-amber-500/20 hover:border-amber-500 transition-all duration-300 group overflow-hidden rounded-lg"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-amber-500/10 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center border border-amber-500/30">
                    <service.icon className="w-7 h-7 text-amber-500" />
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <h3 className="text-white text-2xl mb-3">{service.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-500 text-3xl">{service.price}</span>
                    <span className="text-white/50">{service.duration}</span>
                  </div>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
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
            className="bg-black border-2 border-amber-500 p-8 md:p-12"
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
