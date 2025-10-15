'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc.',
      company: 'SaaS Startup',
      content: 'Simpllified AI transformed our operations completely. We saved 40% of operational time and scaled our team without adding headcount.',
      rating: 5,
      metric: '40% Time Saved',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Director',
      company: 'E-commerce Platform',
      content: 'The automation workflows are incredibly intuitive. We automated our entire order processing system in just two weeks.',
      rating: 5,
      metric: '10x Faster Processing',
    },
    {
      name: 'Emily Watson',
      role: 'Real Estate Agency Owner',
      company: 'Watson Properties',
      content: 'Managing properties became effortless. Lead follow-ups are automatic, and our client satisfaction scores jumped 35%.',
      rating: 5,
      metric: '35% Higher Satisfaction',
    },
    {
      name: 'David Park',
      role: 'HR Manager',
      company: 'Global Solutions Corp',
      content: 'Onboarding new employees is now seamless. What used to take weeks now happens in days, with zero manual effort.',
      rating: 5,
      metric: '80% Faster Onboarding',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black"></div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted by <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how businesses like yours are achieving remarkable results with Simpllified AI
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-5xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="glass-strong p-8 md:p-12 rounded-2xl border border-gray-800">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote size={80} className="text-electric-blue" />
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-electric-blue text-electric-blue" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 relative z-10">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>

                  {/* Metric Badge */}
                  <div className="glass px-6 py-3 rounded-lg border border-electric-blue/30">
                    <div className="text-2xl font-bold gradient-text">
                      {testimonials[activeIndex].metric}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-gradient-electric rounded-full'
                    : 'w-3 h-3 bg-gray-700 rounded-full hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '500+', label: 'Happy Clients' },
            { value: '99%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl text-center border border-gray-800 hover:border-electric-blue/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials



