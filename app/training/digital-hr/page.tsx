"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Clock, Users, Star, ExternalLink, CheckCircle, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const digitalHRCourses = [
  {
    title: "Digital HR Transformation",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.8,
    students: "15,000+",
    price: "$999",
    description: "Lead digital transformation initiatives in HR and people operations",
    features: [
      "HR Technology Strategy",
      "Digital Employee Experience",
      "Automation & AI in HR",
      "Change Management",
      "Data Privacy & Compliance",
    ],
    outcomes: [
      "Design digital HR strategies",
      "Implement HR technology solutions",
      "Automate HR processes",
      "Enhance employee digital experience",
    ],
  },
  {
    title: "HR Analytics & Digital Insights",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.9,
    students: "12,000+",
    price: "$1,299",
    description: "Master data-driven HR decisions with advanced analytics and digital tools",
    features: [
      "Advanced Excel & Power BI for HR",
      "Digital HR Dashboards",
      "Predictive Analytics in HR",
      "Employee Experience Metrics",
      "Digital Workforce Planning",
    ],
    outcomes: [
      "Build comprehensive digital HR dashboards",
      "Measure and improve digital employee experience",
      "Predict employee engagement trends",
      "Create data-driven digital HR strategies",
    ],
  },
  {
    title: "Digital Talent Management",
    duration: "10 weeks",
    level: "Advanced",
    rating: 4.7,
    students: "8,500+",
    price: "$1,599",
    description: "Transform talent management with digital tools and strategies",
    features: [
      "Digital Recruitment Platforms",
      "AI-Powered Talent Acquisition",
      "Digital Learning & Development",
      "Virtual Team Management",
      "Digital Performance Management",
    ],
    outcomes: [
      "Implement digital talent acquisition",
      "Design virtual learning programs",
      "Manage remote and hybrid teams",
      "Optimize digital performance systems",
    ],
  },
]

const navigationItems = [
  { title: "Certificate Programs", href: "/training/certificate-programs", icon: "Award" },
  { title: "People Analytics", href: "/training/people-analytics", icon: "BarChart3" },
  { title: "Digital HR", href: "/training/digital-hr", icon: "Monitor", current: true },
  { title: "Business Partnering", href: "/training/business-partering", icon: "Users" },
  { title: "HR Essentials", href: "/training/hr-essentials", icon: "BookOpen" },
  { title: "Full Academy", href: "/training/full-academy", icon: "GraduationCap" },
]

export default function DigitalHRPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Link href="/training" className="hover:text-primary">Training</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Digital HR</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {navigationItems.map((item) => (
              <Link key={item.title} href={item.href}>
                <Badge
                  variant={item.current ? "default" : "secondary"}
                  className={`cursor-pointer hover:bg-primary hover:text-white transition-colors ${
                    item.current ? "bg-primary text-white" : ""
                  }`}
                >
                  {item.title}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Digital HR</h1>
                <p className="text-accent font-semibold">In collaboration with AIHR</p>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Master digital HR strategies and technology implementation. Our partnership with AIHR brings you
              cutting-edge training programs designed to lead digital transformation in HR.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">4.8/5 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">35,000+ Digital HR Professionals</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-semibold">90% Digital Transformation Success</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enroll Now Section */}
      <section className="py-12 bg-gradient-to-r from-accent/10 to-primary/10 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Digital HR Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Enroll in AIHR's comprehensive Digital HR programs and transform your career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                <a
                  href="https://www.aihr.com/partner/hrmoffice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>🚀 Enroll Now at AIHR</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                <a
                  href="https://www.aihr.com/partner/hrmoffice/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Course Details
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Official AIHR Partner Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Image
                src="/hrm.png"
                alt="HRM Office"
                width={120}
                height={60}
                className="bg-white/20 rounded-lg p-2"
              />
              <div className="text-4xl font-bold">×</div>
              <Image
                src="/aihr.png"
                alt="AIHR Academy"
                width={120}
                height={60}
                className="bg-white/20 rounded-lg p-2"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Official AIHR Partner</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              We're proud to collaborate with AIHR to bring you internationally recognized HR credentials
              that advance your career.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Why Choose Our AIHR Collaboration */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our AIHR Collaboration?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our collaboration with AIHR ensures you receive the highest quality digital HR education with local
              support and guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: "Digital Expertise",
                description: "Learn from digital HR specialists and technology experts",
              },
              {
                icon: Users,
                title: "Industry Recognition",
                description: "AIHR digital HR certificates are valued by top employers",
              },
              {
                icon: TrendingUp,
                title: "Career Advancement",
                description: "90% of graduates advance in digital HR roles within 12 months",
              },
              {
                icon: CheckCircle,
                title: "Practical Focus",
                description: "Hands-on training with real digital HR tools and platforms",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}