import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HRM Office - Professional HR Services & Training",
  description:
    "Leading HR services company providing training, certification, recruitment, and outsourcing solutions. AIHR certified programs and comprehensive HR software.",
  generator: "v0.app",
  keywords: "HR services, human resources, training, certification, recruitment, outsourcing, AIHR, HR software",
  authors: [{ name: "HRM Office" }],
  openGraph: {
    title: "HRM Office - Professional HR Services & Training",
    description:
      "Leading HR services company providing training, certification, recruitment, and outsourcing solutions.",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <Suspense fallback={null}>
          <main>{children}</main>
        </Suspense>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
