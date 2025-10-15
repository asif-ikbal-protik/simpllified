'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen grid place-items-center overflow-hidden pt-20">
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-sm text-gray-300">Powering Your Business with AI Agents</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-extrabold leading-tight tracking-tight text-[6vw] sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            <span className="block w-full text-center whitespace-nowrap gradient-text">Automate Your Business with AI AGENTS</span>
            <span className="block w-full text-center whitespace-nowrap text-white">That Call, Chats & Work for You - 24/7</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
          >
            Streamline, optimize, and grow with Simpllified AI — your partner in intelligent automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#benefits" className="px-8 py-4 bg-gradient-electric rounded-lg font-semibold text-black shadow-glow">
              <span className="inline-flex items-center gap-2">
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-lg font-semibold text-white glass-strong border border-electric-blue/30">
              <span className="inline-flex items-center gap-2">
                <Zap className="w-5 h-5 text-electric-blue" />
                <span>Talk to Us</span>
              </span>
            </a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-screen-xl mx-auto px-4 flex flex-nowrap items-stretch justify-center gap-6 overflow-x-auto"
          >
            {[
              { label: '50+', desc: 'AI Projects Completed' },
              { label: '98%', desc: 'Client Satisfaction' },
              { label: '24/7', desc: 'Support Available' },
              { label: '99.9%', desc: 'Uptime' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass p-6 rounded-xl border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 whitespace-nowrap flex flex-col items-center justify-center text-center min-w-[220px]"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


