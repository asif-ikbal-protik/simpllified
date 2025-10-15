import {
  Navbar,
  Hero,
  Benefits,
  HowItWorks,
  Industries,
  About,
  Testimonials,
  CTA,
  Footer,
  ParticleBackground,
} from '@/components'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Industries />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}



