'use client'
import { motion } from 'framer-motion'
import { Award, Clock, Shield } from 'lucide-react';

export default function AboutUs() {
    const features = [
        {
          icon: Award,
          title: 'Expert Barbers',
          description: 'Trained professionals with years of experience',
        },
        {
          icon: Clock,
          title: 'Walk-ins Welcome',
          description: 'No appointment needed, come anytime',
        },
        {
          icon: Shield,
          title: 'Premium Products',
          description: 'Only the finest grooming products',
        },
      ];
    
  return (
    <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/about.jpg"
                alt="Professional Barber"
                className="w-full h-[600px] object-cover border-4 border-amber-500/20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                TRADITION & <span className="text-amber-500">EXCELLENCE</span>
              </h2>
              <div className="w-24 h-1 bg-amber-500 mb-6" />
              <p className="text-white/70 text-lg mb-6">
                Founded in 2003, Excellent Cuts has been the premier destination for men's grooming
                in the city. Our master barbers bring decades of combined experience and a
                passion for the craft.
              </p>
              <p className="text-white/70 text-lg mb-8">
                We blend time-honored techniques with contemporary styles to give you the
                perfect cut every time. Step into our chair and experience the difference
                that true craftsmanship makes.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-amber-500/10 p-3 rounded-full">
                      <feature.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">{feature.title}</h3>
                      <p className="text-white/60">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  )
}
