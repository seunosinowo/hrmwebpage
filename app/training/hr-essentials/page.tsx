"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen, Users, Clock, Globe, ArrowRight, Play, Download } from "lucide-react"
import Image from "next/image"

export default function HREssentialsPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Library",
      description: "Access 200+ HR resources, templates, and guides",
    },
    {
      icon: Play,
      title: "Video Learning",
      description: "50+ hours of expert-led video content",
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Connect with 10,000+ HR professionals worldwide",
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description: "Templates, checklists, and practical tools",
    },
  ]

  const topics = [
    "HR Fundamentals & Best Practices",
    "Employment Law & Compliance",
    "Recruitment & Selection Strategies",
    "Performance Management Systems",
    "Employee Relations & Engagement",
    "Compensation & Benefits Design",
    "Learning & Development Programs",
    "HR Analytics & Metrics",
    "Diversity, Equity & Inclusion",
    "Change Management in HR",
    "Digital HR Transformation",
    "Strategic HR Planning",
  ]

  const benefits = [
    "Stay updated with latest HR trends and regulations",
    "Access practical tools and templates for daily HR tasks",
    "Learn from industry experts and thought leaders",
    "Network with global HR community",
    "Earn continuing education credits",
    "Get answers to your HR questions from experts",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/hrm-office-logo-white.png"
                    alt="HRM Office"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <span className="text-muted-foreground">×</span>
                  <Image
                    src="/aihr-academy-logo-white.png"
                    alt="AIHR Academy"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                    Exclusive Partnership
                  </Badge>
                </div>

                <div>
                  <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                    <BookOpen className="w-4 h-4 mr-2" />
                    HR Essentials Membership
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                    Your Complete
                    <span className="text-accent"> HR Resource Hub</span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                    Access everything you need to excel in HR through our exclusive AIHR partnership. From fundamentals
                    to advanced strategies, get unlimited access to premium HR content and community.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-accent">200+</div>
                    <div className="text-sm text-muted-foreground">Resources</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Video Hours</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-accent">10K+</div>
                    <div className="text-sm text-muted-foreground">Members</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                    <a href="https://www.aihr.com/hr-essentials/" target="_blank" rel="noopener noreferrer">
                      Join AIHR Essentials
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline">
                    View Sample Content
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/hr-essentials-learning-platform.png"
                    alt="HR Essentials Learning Platform"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
                </div>

                {/* Floating Feature Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Global Community</div>
                      <div className="text-sm text-muted-foreground">Connect Worldwide</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">24/7 Access</div>
                      <div className="text-sm text-muted-foreground">Learn Anytime</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Membership Benefits</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Everything You Need in One Place</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Get unlimited access to premium HR content, tools, and community through our exclusive AIHR partnership.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics Covered */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Comprehensive Coverage</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Topics That Matter</h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  From HR fundamentals to advanced strategic topics, our membership covers everything you need to know.
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {topics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-card rounded-lg border"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-medium">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/hr-professional-using-digital-resources.png"
                    alt="HR Professional Using Digital Resources"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose HR Essentials?</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Start Your HR Essentials Journey Today</h2>
              <p className="text-xl opacity-90 mb-8 text-pretty">
                Join thousands of HR professionals who rely on AIHR Essentials for their daily HR needs and career
                growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://www.aihr.com/hr-essentials/" target="_blank" rel="noopener noreferrer">
                    Get AIHR Essentials Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
                >
                  Contact Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
