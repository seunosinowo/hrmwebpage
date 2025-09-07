import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { SimpleLoadingSpinner } from "@/components/loading"
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
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        }>
          <main>{children}</main>
        </Suspense>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
