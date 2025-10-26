"use client"
import { motion } from 'framer-motion'

export default function Gallery() {
  return (
    <section className="py-20 bg-black overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl text-white mb-4">
          OUR <span className="text-amber-500">GALLERY</span>
        </h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto" />
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Large Image - Top Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-2 row-span-2 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1687422808328-11cf750a5051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjE0NTQ2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Barber cutting hair"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
          </div>
        </motion.div>

        {/* Small Image 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-1 row-span-1 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative h-full min-h-[195px]">
            <img
              src="https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYxNDI0NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Barbershop interior"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
          </div>
        </motion.div>

        {/* Small Image 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 row-span-1 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative h-full min-h-[195px]">
            <img
              src="https://images.unsplash.com/photo-1656921350153-b6389adaad57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjB0b29scyUyMHNjaXNzb3JzfGVufDF8fHx8MTc2MTM4OTYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Barber tools"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
          </div>
        </motion.div>

        {/* Medium Image - Vertical */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-1 row-span-2 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1598524374668-5d565a3c42e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaGFpcmN1dHxlbnwxfHx8fDE3NjE0MTEzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional haircut"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
          </div>
        </motion.div>

        {/* Medium Image - Vertical */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-1 row-span-2 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1593702233354-259d1f794ed1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBmYWRlfGVufDF8fHx8MTc2MTQ5NTYwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fade haircut"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
          </div>
        </motion.div>

        {/* Small Image 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="col-span-1 row-span-1 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative h-full min-h-[195px]">
            <img
              src="https://images.unsplash.com/photo-1761064039763-0d9aa5124510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFyYmVyJTIwY2hhaXJ8ZW58MXx8fHwxNzYxNDg5MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Classic barber chair"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
          </div>
        </motion.div>

        {/* Small Image 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="col-span-1 row-span-1 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative h-full min-h-[195px]">
            <img
              src="https://images.unsplash.com/photo-1601612628452-9e99ced43524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZ3Jvb21pbmd8ZW58MXx8fHwxNzYxNDk1NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mens grooming"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
          </div>
        </motion.div>

        {/* Large Image - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="col-span-2 row-span-2 relative overflow-hidden group cursor-pointer"
        >
          <div className="relative h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1733995471058-3d6ff2013de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaGF2aW5nJTIwYmVhcmR8ZW58MXx8fHwxNzYxNDg5MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Beard shave"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-300" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
}
