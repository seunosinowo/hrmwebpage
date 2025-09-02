"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Users, Search, Target, CheckCircle, ArrowRight, Clock, UserCheck } from "lucide-react"
import Link from "next/link"

const recruitmentServices = [
  {
    icon: Search,
    title: "Executive Search",
    description: "Find top-tier executives and senior leadership talent for your organization.",
    features: [
      "C-level executive placement",
      "Board member recruitment",
      "Succession planning",
      "Leadership assessment",
    ],
    timeline: "4-8 weeks",
    successRate: "95%",
  },
  {
    icon: Users,
    title: "Bulk Hiring",
    description: "Efficient mass recruitment solutions for large-scale hiring needs.",
    features: [
      "Campus recruitment drives",
      "Volume hiring campaigns",
      "Multi-location recruitment",
      "Rapid deployment teams",
    ],
    timeline: "2-6 weeks",
    successRate: "92%",
  },
  {
    icon: Target,
    title: "Specialized Talent Sourcing",
    description: "Targeted recruitment for niche roles and specialized skill sets.",
    features: [
      "Technical role placement",
      "Industry-specific expertise",
      "Passive candidate sourcing",
      "Skills-based matching",
    ],
    timeline: "3-6 weeks",
    successRate: "88%",
  },
  {
    icon: UserCheck,
    title: "Contract & Temporary Staffing",
    description: "Flexible staffing solutions for project-based and temporary needs.",
    features: ["Project-based hiring", "Temporary staff placement", "Contract-to-hire options", "Seasonal workforce"],
    timeline: "1-2 weeks",
    successRate: "96%",
  },
]

const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "Deep dive into your hiring needs, company culture, and role specifications.",
  },
  {
    step: "02",
    title: "Talent Sourcing",
    description: "Leverage our extensive network and advanced tools to identify top candidates.",
  },
  {
    step: "03",
    title: "Screening & Assessment",
    description: "Comprehensive evaluation including skills assessment and cultural fit analysis.",
  },
  {
    step: "04",
    title: "Interview Coordination",
    description: "Manage the entire interview process with seamless coordination and feedback.",
  },
  {
    step: "05",
    title: "Offer & Onboarding",
    description: "Support through offer negotiation and smooth onboarding transition.",
  },
]

const stats = [
  { number: "2000+", label: "Successful Placements" },
  { number: "500+", label: "Partner Companies" },
  { number: "15", label: "Industry Verticals" },
  { number: "48hrs", label: "Average Response Time" },
]

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Professional Recruitment</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Find the <span className="text-accent">Right Talent</span> for Your Organization
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Expert recruitment services connecting exceptional talent with forward-thinking organizations. From
                executive search to bulk hiring, we deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="/contact">
                    Start Hiring <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/recruitment-team-interviewing-candidates.png"
                alt="Professional recruitment interview"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Comprehensive Recruitment Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From executive search to bulk hiring, we provide tailored recruitment solutions for every business need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {recruitmentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                        <div className="text-lg font-bold text-accent">{service.successRate}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="w-4 h-4" />
                      <span>Timeline: {service.timeline}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Recruitment Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A proven 5-step process that ensures we find the perfect match for your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Ready to Find Your Next Great Hire?
            </h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Let our expert recruitment team help you build a stronger workforce. Contact us today to discuss your
              hiring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">
                  Start Recruiting <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
