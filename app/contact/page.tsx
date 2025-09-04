"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, Award, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+234 811 477 888",
    description: "Call us during business hours",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@hrmoffice.com",
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "Lagos, Nigeria",
    description: "Visit our main office",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon - Fri: 9AM - 6PM",
    description: "We're here to help",
  },
]

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
      {/* Official AIHR Certified Partner section */}
      <section className="py-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-3">
                <OptimizedImage
                  src="/aihr-academy-logo-white.png.JPG"
                  alt="AIHR Academy"
                  width={60}
                  height={60}
                  className="bg-primary rounded-lg p-2"
                />
                <div className="w-px h-12 bg-border"></div>
                <OptimizedImage
                  src="/hrm-office-logo-white.png.jpg"
                  alt="HRM Office"
                  width={60}
                  height={60}
                  className="bg-accent rounded-lg p-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-2 text-sm font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  OFFICIAL AIHR CERTIFIED PARTNER
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Authorized to deliver world-class HR training and certification programs in partnership with AIHR
                Academy
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
                    Send Message <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#contact-info">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    Contact Info
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
              <img
                src="/business-partnering-strategic-meeting.png.jpg"
                alt="HR consultation and strategic meeting"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="contact-info" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold text-accent mb-2">{info.details}</div>
                    <CardDescription className="text-base text-muted-foreground">{info.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">What can we help you with?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Training and certification programs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      HR software implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Recruitment and talent acquisition
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      HR outsourcing services
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Business consulting and strategy
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Contact Form</CardTitle>
                  <CardDescription>We'll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="training">Training & Certification</option>
                        <option value="software">HR Software</option>
                        <option value="recruitment">Recruitment</option>
                        <option value="outsourcing">HR Outsourcing</option>
                        <option value="consulting">Business Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your HR needs and how we can help..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
