'use client'

import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Code, Users } from 'lucide-react'

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Automate property listings, client follow-ups, document processing, and lead management.',
      benefits: ['Lead Automation', 'Document Processing', 'CRM Integration'],
      gradient: 'from-electric-blue to-neon-cyan',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Streamline inventory management, order processing, customer service, and marketing campaigns.',
      benefits: ['Order Processing', 'Inventory Sync', 'Customer Support'],
      gradient: 'from-neon-cyan to-neon-purple',
    },
    {
      icon: Code,
      title: 'SaaS & Tech',
      description: 'Automate user onboarding, support tickets, data analytics, and deployment workflows.',
      benefits: ['User Onboarding', 'DevOps Automation', 'Analytics'],
      gradient: 'from-neon-purple to-electric-blue',
    },
    {
      icon: Users,
      title: 'Operations & HR',
      description: 'Transform hiring processes, employee onboarding, payroll management, and compliance tracking.',
      benefits: ['Recruitment', 'Onboarding', 'Payroll Automation'],
      gradient: 'from-electric-blue to-neon-purple',
    },
  ]

  return (
    <section id="industries" className="relative py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>

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
            Industries We <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tailored automation solutions for every industry, delivering measurable impact across your organization.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className="relative glass-strong p-8 rounded-2xl border border-gray-800 group-hover:border-electric-blue/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-electric transition-all duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2">
                  {industry.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-3 py-1 text-xs glass rounded-full text-gray-300 border border-gray-700 group-hover:border-electric-blue/30 transition-all duration-300"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Animated Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-30 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats/Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-4">
              Not seeing your industry? <span className="gradient-text font-semibold">We adapt to any workflow.</span>
            </p>
            <p className="text-gray-400">
              Our flexible automation platform can be customized for any business model or industry vertical.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries



