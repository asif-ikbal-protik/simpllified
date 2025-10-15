'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Calendar, MessageSquare } from 'lucide-react'

const CTA = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      action: 'contact@Simpllified AI.com',
    },
    {
      icon: Calendar,
      title: 'Schedule a Demo',
      description: 'See Simpllified AI in action',
      action: 'Book Now',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team',
      action: 'Start Chat',
    },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(176, 38, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(0, 255, 240, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative glass-strong p-12 md:p-16 rounded-3xl border border-gray-800 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 glass rounded-full mb-6"
              >
                <span className="text-sm gradient-text font-semibold">Ready to Transform Your Workflow?</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Let's Automate Your <span className="gradient-text">Workflow</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
              >
                Join hundreds of businesses already saving time and scaling operations with Simpllified AI. 
                Start your automation journey today with a free consultation.
              </motion.p>

              {/* Primary CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-electric rounded-lg font-semibold text-lg text-black shadow-glow-strong overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>

              {/* Contact Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass p-6 rounded-xl border border-gray-800 hover:border-electric-blue/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue to-neon-purple p-0.5 mb-4 mx-auto">
                      <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-electric transition-all duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                    <p className="text-electric-blue text-sm font-semibold">{method.action}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="mt-10 pt-10 border-t border-gray-800"
              >
                
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8"
        >
          <div className="glass p-6 rounded-xl text-center border border-gray-800">
            <h4 className="font-bold text-white mb-2">Quick Response</h4>
            <p className="text-gray-400 text-sm">We typically respond within 24 hours</p>
          </div>
          <div className="glass p-6 rounded-xl text-center border border-gray-800">
            <h4 className="font-bold text-white mb-2">Custom Solutions</h4>
            <p className="text-gray-400 text-sm">Tailored automation for your unique needs</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA



