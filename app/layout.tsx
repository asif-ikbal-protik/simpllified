import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simpllified AI - Seamless AI Automation From Startup to Scale',
  description: 'Simpllified AI is an AI-powered workflow automation company that helps businesses streamline repetitive tasks, improve efficiency, and scale operations effortlessly.',
  keywords: 'AI automation, workflow automation, business automation, AI-powered, startup automation, enterprise automation',
  authors: [{ name: 'Simpllified AI' }],
  openGraph: {
    title: 'Simpllified AI - Seamless AI Automation From Startup to Scale',
    description: 'Streamline, optimize, and grow with Simpllified AI â€” your partner in intelligent automation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simpllified AI - Seamless AI Automation From Startup to Scale',
    description: 'Streamline, optimize, and grow with Simpllified AI â€” your partner in intelligent automation.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



