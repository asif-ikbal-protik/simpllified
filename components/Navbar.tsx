'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#benefits' },
    { name: 'Industries', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className={`max-w-6xl mx-auto px-5 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/60 border border-white/20 shadow-lg shadow-electric-blue/10' 
              : 'bg-white/5 border border-white/10'
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.a
                href="#home"
                className="flex items-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/logos/navbar.png"
                  alt="Simpllified AI logo"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
                <span className="sr-only">Simpllified AI</span>
              </motion.a>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-1.5 text-sm text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-electric group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <motion.a
                  href="#contact"
                  className="px-5 py-1.5 bg-gradient-electric text-black text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-electric-blue/50 transition-all duration-300 flex items-center space-x-1.5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Started</span>
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-8 h-8 flex items-center justify-center text-white"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-8 py-3 bg-gradient-electric text-black font-bold rounded-full shadow-lg shadow-electric-blue/50 flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Sparkles className="w-5 h-5" />
              <span>Get Started</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar




