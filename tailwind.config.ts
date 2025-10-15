import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00D4FF',
        'neon-cyan': '#00FFF0',
        'neon-purple': '#B026FF',
        midnight: '#05020F',
      },
      backgroundImage: {
        'gradient-electric': 'linear-gradient(135deg, #00D4FF 0%, #00FFF0 50%, #B026FF 100%)',
      },
      boxShadow: {
        glow: '0 22px 45px rgba(0, 212, 255, 0.25), 0 12px 25px rgba(176, 38, 255, 0.15)',
        'glow-strong': '0 28px 65px rgba(0, 212, 255, 0.3), 0 18px 35px rgba(176, 38, 255, 0.25)',
        'electric-blue/10': '0 18px 45px rgba(0, 212, 255, 0.1)',
        'electric-blue/50': '0 20px 55px rgba(0, 212, 255, 0.45)',
      },
    },
  },
  plugins: [],
}

export default config
