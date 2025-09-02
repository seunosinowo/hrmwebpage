import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Footer } from "@/components/footer"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Partnership } from "@/components/partnership"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Partnership />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
