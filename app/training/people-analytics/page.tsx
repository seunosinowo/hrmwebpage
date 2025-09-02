"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, Star, ExternalLink, CheckCircle, Brain, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const analyticsModules = [
  {
    title: "HR Metrics & KPIs Mastery",
    duration: "2 weeks",
    description: "Master the essential HR metrics that drive business decisions",
    topics: [
      "Employee Turnover Analysis",
      "Cost-per-Hire Optimization",
      "Time-to-Fill Metrics",
      "Employee Engagement Scores",
      "Productivity Measurements",
    ],
  },
  {
    title: "Predictive Analytics in HR",
    duration: "3 weeks",
    description: "Use data to predict and prevent HR challenges before they occur",
    topics: [
      "Turnover Prediction Models",
      "Performance Forecasting",
      "Succession Planning Analytics",
      "Recruitment Success Prediction",
      "Employee Satisfaction Trends",
    ],
  },
  {
    title: "Advanced Data Visualization",
    duration: "2 weeks",
    description: "Create compelling dashboards and reports that tell your HR story",
    topics: [
      "Power BI for HR Professionals",
      "Executive Dashboard Creation",
      "Storytelling with Data",
      "Interactive Report Building",
      "Real-time Analytics Setup",
    ],
  },
  {
    title: "Statistical Analysis for HR",
    duration: "3 weeks",
    description: "Apply statistical methods to solve complex HR problems",
    topics: [
      "Correlation & Regression Analysis",
      "A/B Testing in HR",
      "Survey Data Analysis",
      "Compensation Analytics",
      "Diversity & Inclusion Metrics",
    ],
  },
]

const careerPaths = [
  {
    title: "HR Data Analyst",
    salary: "$65,000 - $85,000",
    growth: "+23% job growth",
    description: "Analyze HR data to identify trends and provide insights for strategic decision-making",
  },
  {
    title: "People Analytics Manager",
    salary: "$90,000 - $120,000",
    growth: "+31% job growth",
    description: "Lead analytics initiatives and build data-driven HR strategies across the organization",
  },
  {
    title: "HR Business Intelligence Lead",
    salary: "$110,000 - $150,000",
    growth: "+28% job growth",
    description: "Drive organizational transformation through advanced people analytics and insights",
  },
]

export default function PeopleAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
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
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">People Analytics</h1>
                <p className="text-accent font-semibold">AIHR Certified Program</p>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your HR function with data-driven insights. Master the art and science of people analytics to
              make strategic decisions that drive business success.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">8,500+ Graduates</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-semibold">10 Weeks Program</span>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8"
            >
              <Link
                href="https://www.aihr.com/human-resources-certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>Start Your Analytics Journey</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why People Analytics Matters</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In today's data-driven world, HR professionals who can analyze and interpret people data are invaluable.
                This program equips you with the skills to turn HR data into strategic business insights.
              </p>

              <div className="space-y-4">
                {[
                  "Make evidence-based HR decisions",
                  "Predict and prevent employee turnover",
                  "Optimize recruitment and retention strategies",
                  "Demonstrate HR's business impact with data",
                  "Build compelling dashboards and reports",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/people-analytics-dashboard-with-charts-and-graphs.png"
                alt="People Analytics Dashboard"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <div>
                    <div className="font-semibold text-foreground">92% Accuracy</div>
                    <div className="text-sm text-muted-foreground">Turnover Prediction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Curriculum</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our 10-week program covers everything from basic HR metrics to advanced predictive analytics, ensuring you
              graduate with practical, job-ready skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {analyticsModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {module.duration}
                      </Badge>
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription className="text-base">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-foreground mb-3">Key Topics:</h4>
                    <ul className="space-y-2">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Brain className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
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

      {/* Career Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Career Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              People analytics is one of the fastest-growing fields in HR. Our graduates are landing high-paying roles
              at top companies worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {careerPaths.map((career, index) => (
              <motion.div
                key={career.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{career.title}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">{career.salary}</div>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {career.growth}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{career.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Image
                src="/hrm-office-logo-white.png"
                alt="HRM Office"
                width={120}
                height={60}
                className="bg-white/20 rounded-lg p-2"
              />
              <div className="text-4xl font-bold">×</div>
              <Image
                src="/aihr-academy-logo-white.png"
                alt="AIHR Academy"
                width={120}
                height={60}
                className="bg-white/20 rounded-lg p-2"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Certified by AIHR - Recognized Globally</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Our People Analytics certification is powered by AIHR, the world's leading HR certification body. Get the
              credentials that employers trust and value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link
                  href="https://www.aihr.com/human-resources-certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll Now via AIHR
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/contact">Get More Information</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
