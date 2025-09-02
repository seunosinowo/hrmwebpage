"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  "Access to globally recognized HR certifications",
  "Latest industry insights and best practices",
  "Continuous professional development programs",
  "Networking opportunities with HR leaders worldwide",
  "Career advancement through certified expertise",
  "Evidence-based HR methodologies and frameworks",
]

export function Partnership() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-accent mr-3" />
              <span className="text-accent font-semibold text-lg">Official Partnership</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Certified <span className="text-primary">AIHR Partner</span> in Nigeria
            </h2>

            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              As an official AIHR Certified Partner, we bring world-class HR education and certification programs
              directly to Nigerian professionals. Our partnership ensures you receive the same high-quality training
              that's trusted by HR leaders globally.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/training" className="inline-flex items-center gap-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Programs <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn About Partnership
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="/aihr-academy-logo-white.png"
                alt="AIHR Academy Partnership"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Official Partner</div>
                    <div className="text-sm text-muted-foreground">Since 2022</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-4 shadow-lg text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm opacity-90">Certified Professionals</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
