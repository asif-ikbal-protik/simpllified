'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Zap, Shield } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses to achieve more with less effort through intelligent automation.',
    },
    {
      icon: Heart,
      title: 'Human-Centric',
      description: 'AI that augments human capabilities, not replaces them. We build tools that work for you.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Constantly evolving with cutting-edge AI technology to deliver future-proof solutions.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and compliance, protecting your data at every step.',
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Animated Background Network */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(176, 38, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(0, 255, 240, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: '100% 100%',
          }}
        />
      </div>

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
            Built to Simplify the <span className="gradient-text">Future of Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Simpllified AI, we believe in the power of AI to transform how businesses operate. 
            Our mission is to make advanced automation accessible, intuitive, and impactful for organizations of all sizes.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-strong p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                We envision a world where businesses can focus on what truly mattersâ€”innovation, 
                growth, and human connectionâ€”while AI handles the repetitive, time-consuming tasks.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From startups taking their first steps to enterprises scaling globally, 
                Simpllified AI adapts to your journey, providing automation that grows with you.
              </p>
            </div>

            <div className="glass-strong p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Why We're Different</h3>
              <ul className="space-y-3">
                {[
                  'No-code platform designed for non-technical users',
                  'AI that learns and improves over time',
                  'Seamless integration with your existing tools',
                  'Dedicated support from automation experts',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-electric mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-strong p-6 rounded-xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue to-neon-purple p-0.5 mb-4">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-electric transition-all duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-strong p-8 md:p-12 rounded-2xl border border-gray-800 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">
            Join the <span className="gradient-text">Automation Revolution</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Be part of a growing community of businesses leveraging AI to work smarter, not harder.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-electric rounded-lg font-semibold text-black shadow-glow"
          >
            Learn More About Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default About



