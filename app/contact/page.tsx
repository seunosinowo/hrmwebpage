"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Send, Award, CheckCircle, ArrowRight, ArrowDown, BookOpen, Users, Building, Scale, MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"


// Optimized Image Component with Error Handling
function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = ""
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    // Show default logo placeholder
    return (
      <div className={`${className} bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center`} style={{ width, height }}>
        <Award className="w-8 h-8 text-white" />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
        {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Get In Touch</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Let's Transform Your <span className="text-accent">HR Operations</span> Together
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Ready to take your HR to the next level? Contact our team of experts to discuss your needs and discover
                how we can help your organization thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact-form">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Send Message <ArrowDown className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/business-partnering-strategic-meeting.png.jpg"
                alt="HR consultation and strategic meeting"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Fill out the form below and our team will get back to you within 24 hours. We're here to answer your
                questions and help you find the right HR solutions.
              </p>

              {/* Address and Map Section */}
              <div className="mb-8">
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Visit Our Office</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        2nd Floor, Tapa House, 3/5 Immam Dauda St, off Eric Moore Rd, Surulere, Lagos 101271, Lagos
                      </p>
                    </div>
                  </div>

                  {/* Embedded Map */}
                  <div className="mt-6">
                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31714.431922451997!2d3.350495!3d6.483132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8db12acd2439%3A0x1903d46a38b303ab!2sHRMOffice!5e0!3m2!1sen!2sng!4v1757073516252!5m2!1sen!2sng"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="HRM Office Location"
                      ></iframe>
                    </div>
                    <div className="mt-4 text-center">
                      <a
                        href="https://maps.app.goo.gl/M9NWSRYbyVeHtsJE7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        View on Google Maps
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our HR Services</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Discover our comprehensive range of HR solutions designed to transform your business operations and drive success.
                  </p>

                  <div className="grid gap-6">
                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">Training & Certification Programs</h4>
                          <p className="text-muted-foreground">Comprehensive HR training programs, certifications, and professional development courses tailored to Nigerian businesses.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">Recruitment & Talent Acquisition</h4>
                          <p className="text-muted-foreground">End-to-end recruitment services, executive search, and talent acquisition strategies for growing organizations.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Building className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">HR Outsourcing Services</h4>
                          <p className="text-muted-foreground">Complete HR outsourcing solutions including payroll, benefits administration, and compliance management.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Scale className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground mb-2">Business Consulting & Strategy</h4>
                          <p className="text-muted-foreground">Strategic HR consulting, organizational development, and business transformation services for sustainable growth.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
