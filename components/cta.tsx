"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your <span className="text-accent">HR Strategy?</span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Join thousands of HR professionals who have elevated their careers through our AIHR-certified programs.
            Start your transformation journey today with Nigeria's leading HR services partner.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/training" className="inline-flex items-center gap-2">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Start Your Certification <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              <span>+234 811 477 888</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-accent" />
              <span>info@hrmoffice.com</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
