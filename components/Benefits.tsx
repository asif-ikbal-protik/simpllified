'use client'

import { motion } from 'framer-motion'
import { Brain, Settings, Rocket, Lightbulb } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'AI-driven Automation',
      description: 'Smart systems that learn and adapt to your business needs, continuously improving efficiency and accuracy.',
      gradient: 'from-electric-blue to-neon-cyan',
    },
    {
      icon: Settings,
      title: 'Scalable Workflows',
      description: 'From startups to enterprise â€” our automation scales seamlessly with your business growth.',
      gradient: 'from-neon-cyan to-neon-purple',
    },
    {
      icon: Rocket,
      title: 'Efficiency & Growth',
      description: 'Automate repetitive tasks and scale faster, allowing your team to focus on strategic initiatives.',
      gradient: 'from-neon-purple to-electric-blue',
    },
    {
      icon: Lightbulb,
      title: 'Smart Simplicity',
      description: 'Intuitive, no-code workflow setup that empowers anyone to build powerful automation.',
      gradient: 'from-electric-blue to-neon-purple',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="benefits" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="gradient-text">Simpllified AI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powerful automation that adapts to your business needs, delivering measurable results from day one.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card */}
              <div className="relative glass-strong p-8 rounded-2xl h-full border border-gray-800 group-hover:border-electric-blue/50 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-electric transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-20`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits



