# Simpllified AI - Seamless AI Automation From Startup to Scale

A modern, responsive Next.js 14 + Turbopack website showcasing Simpllified AI's AI-powered workflow automation platform.

## Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Turbopack
- **Stunning Visuals**: Full black background with glassmorphism design elements
- **Advanced Animations**: Powered by Framer Motion with smooth transitions and parallax effects
- **Particle Effects**: Interactive particle background with neural network connections
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Lazy loading, optimized images, and smooth transitions
- **SEO Ready**: Semantic HTML with proper meta tags and Open Graph setup

## Design Features

- **Glassmorphism UI**: Beautiful glass-style cards with backdrop blur effects
- **Gradient Accents**: Electric blue, cyan, and neon purple gradients
- **Smooth Animations**: Fade-ins, slide-ins, and parallax motion effects
- **Interactive Elements**: Hover effects with depth and glow reflections
- **Modern Typography**: Using Inter, Sora, and Poppins fonts

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server with Turbopack:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Simpllified AI-website/
app/
ayout.tsx          # Root layout with metadata
page.tsx            # Main home page
globals.css         # Global styles and utilities
omponents/
Navbar.tsx          # Navigation bar
Hero.tsx            # Hero section
Benefits.tsx        # Key benefits section
HowItWorks.tsx      # How it works timeline
Industries.tsx      # Industry use cases
About.tsx           # About section
Testimonials.tsx    # Testimonials carousel
CTA.tsx             # Call-to-action section
Footer.tsx          # Footer
ParticleBackground.tsx  # Animated particle background
public/
nav-logo.png        # Navbar logo (placeholder)
footer-logo.png     # Footer logo (placeholder)
tailwind.config.ts      # Tailwind configuration
```

## Sections

1. **Navbar**: Transparent glassmorphic navigation with smooth scroll
2. **Hero**: Full-screen immersive hero with animated gradients
3. **Benefits**: Four key value propositions with glass cards
4. **How It Works**: Interactive timeline showing the automation process
5. **Industries**: Use cases for different industry verticals
6. **About**: Company mission and values
7. **Testimonials**: Rotating testimonial cards with metrics
8. **CTA**: Call-to-action section with contact methods
9. **Footer**: Comprehensive footer with links and social media

## Technologies Used

- **Framework**: Next.js 14 with Turbopack
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter, Sora, Poppins (Google Fonts)

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Color Palette

- **Electric Blue**: `#00D4FF`
- **Neon Cyan**: `#00FFF0`
- **Neon Purple**: `#B026FF`
- **Background**: `#000000`
- **Glass White**: `rgba(255, 255, 255, 0.1)`

## Customization

### Update Logo

Replace the placeholder logo files in the `public/` directory:
- `public/nav-logo.png` - Navbar logo
- `public/footer-logo.png` - Footer logo

### Modify Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  'electric-blue': '#00D4FF',
  'neon-cyan': '#00FFF0',
  'neon-purple': '#B026FF',
}
```

### Customize Content

All content is located in the individual component files in the `components/` directory. Simply edit the text, titles, and descriptions as needed.

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

### Deploy to Other Platforms

Build the production-ready application:

```bash
npm run build
npm start
```

## License

This project is created for Simpllified AI. All rights reserved.

## Support

For support, email contact@Simpllified AI.com or visit our website.

---

Built with <3 for seamless automation


