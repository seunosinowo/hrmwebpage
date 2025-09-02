"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { MapPin, Clock, DollarSign, ArrowRight, Briefcase } from "lucide-react"
import Link from "next/link"

const jobOpenings = [
  {
    title: "Senior HR Consultant",
    department: "Consulting",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦2,500,000 - ₦3,500,000",
    description: "Lead HR consulting projects and provide strategic guidance to our clients.",
    requirements: [
      "8+ years of HR consulting experience",
      "AIHR certification preferred",
      "Strong analytical and communication skills",
      "Experience with HR transformation projects",
    ],
    posted: "2 days ago",
  },
  {
    title: "Training Specialist",
    department: "Training & Development",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦1,800,000 - ₦2,500,000",
    description: "Design and deliver comprehensive HR training programs for our clients.",
    requirements: [
      "5+ years in training and development",
      "Adult learning principles expertise",
      "Excellent presentation skills",
      "Experience with e-learning platforms",
    ],
    posted: "1 week ago",
  },
  {
    title: "Recruitment Consultant",
    department: "Recruitment",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦1,500,000 - ₦2,200,000",
    description: "Manage end-to-end recruitment processes for various client organizations.",
    requirements: [
      "3+ years in recruitment",
      "Strong sourcing and interviewing skills",
      "Experience with ATS systems",
      "Excellent relationship building abilities",
    ],
    posted: "3 days ago",
  },
  {
    title: "HR Technology Analyst",
    department: "Technology",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦2,000,000 - ₦2,800,000",
    description: "Support HR technology implementations and system optimizations.",
    requirements: [
      "4+ years in HR technology",
      "Experience with HRIS systems",
      "Data analysis and reporting skills",
      "Project management experience",
    ],
    posted: "5 days ago",
  },
  {
    title: "Business Development Manager",
    department: "Sales & Marketing",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦2,200,000 - ₦3,000,000",
    description: "Drive business growth through client acquisition and relationship management.",
    requirements: [
      "6+ years in B2B sales",
      "HR services industry experience",
      "Strong negotiation skills",
      "Proven track record of meeting targets",
    ],
    posted: "1 week ago",
  },
  {
    title: "Junior HR Analyst",
    department: "Analytics",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦1,200,000 - ₦1,800,000",
    description: "Support data analysis and reporting for HR metrics and insights.",
    requirements: [
      "2+ years in data analysis",
      "Proficiency in Excel and data visualization tools",
      "Understanding of HR metrics",
      "Bachelor's degree in relevant field",
    ],
    posted: "4 days ago",
  },
]

const benefits = [
  "Competitive salary and performance bonuses",
  "Comprehensive health insurance",
  "Professional development opportunities",
  "Flexible working arrangements",
  "Annual leave and wellness programs",
  "Career advancement pathways",
]

export default function JobsPage() {
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
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Join Our Team</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Build Your Career with <span className="text-accent">HRM Office</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Join a dynamic team of HR professionals dedicated to transforming organizations and advancing careers.
              Discover exciting opportunities to grow with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="#openings">
                  View Open Positions <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Why Join HRM Office?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Be part of a team that's shaping the future of HR services across Africa while advancing your own career.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-3 bg-card rounded-lg p-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Current Job Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore exciting career opportunities across various departments and find your perfect role.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground mb-2">{job.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardDescription className="text-base text-muted-foreground mb-4">
                      {job.description}
                    </CardDescription>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Posted {job.posted}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 group-hover:bg-accent group-hover:text-white transition-colors">
                        <Link href="/contact" className="flex items-center justify-center gap-2">
                          Apply Now <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Don't See the Right Role?</h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how
              you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">
                  Send Your Resume <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/about">Learn More About Us</Link>
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
