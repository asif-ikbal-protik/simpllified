'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Settings2, Rocket, BarChart } from 'lucide-react'
import { useRef } from 'react'

const HowItWorks = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Identify Repetitive Tasks',
      description: 'Analyze your workflow to pinpoint time-consuming, repetitive processes that can be automated.',
      color: 'electric-blue',
    },
    {
      icon: Settings2,
      number: '02',
      title: 'Configure AI Workflow',
      description: 'Use our intuitive no-code interface to design and customize your automation workflows.',
      color: 'neon-cyan',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Deploy Automation',
      description: 'Launch your automated workflows seamlessly across your systems and watch them work.',
      color: 'neon-purple',
    },
    {
      icon: BarChart,
      number: '04',
      title: 'Monitor & Optimize',
      description: 'Track performance metrics and continuously improve with AI-powered insights and recommendations.',
      color: 'electric-blue',
    },
  ]

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How <span className="gradient-text">Simpllified AI</span> Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Four simple steps to transform your business with intelligent automation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-neon-cyan to-neon-purple opacity-30"></div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 group"
                  >
                    <div className="relative glass-strong p-8 rounded-2xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative">
                        {/* Step Number */}
                        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-electric opacity-20 mb-4">
                          {step.number}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {step.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 flex-shrink-0"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-neon-purple p-0.5 shadow-glow">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-electric rounded-lg font-semibold text-black shadow-glow"
          >
            Start Automating Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks



