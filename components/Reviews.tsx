"use client"
import { motion } from 'framer-motion'


export default function Reviews() {
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
              CLIENT <span className="text-amber-500">REVIEWS</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jack Danton',
                review: 'Very experienced and knowledgeable barbers. Also very welcoming and make you feel comfortable',
                rating: 5,
              },
              {
                name: 'James Peterson',
                review: 'Been coming here for two years and they are the most consistent barbers Ive ever had. Never had a bad haircut. Also helps that the owner is a great bloke!',
                rating: 5,
              },
              {
                name: 'David Thompson',
                review: 'Great experience here! The barber took his time, gave me a clean fade, and really paid attention to detail. Friendly atmosphere too — definitely my new go-to spot.',
                rating: 5,
              },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black border-2 rounded-lg border-amber-500/20 p-8 hover:border-amber-500 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-amber-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 mb-6 italic">"{review.review}"</p>
                <p className="text-amber-500">- {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
