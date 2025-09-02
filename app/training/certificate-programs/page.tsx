"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Clock, Users, Star, ExternalLink, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const certificationPrograms = [
  {
    title: "HR Analytics & Metrics Certificate",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.9,
    students: "12,000+",
    price: "$1,299",
    description: "Master data-driven HR decision making with advanced analytics and metrics",
    features: [
      "Advanced Excel & Power BI for HR",
      "Predictive Analytics in HR",
      "ROI Measurement & Business Impact",
      "Dashboard Creation & Reporting",
      "Statistical Analysis for HR",
    ],
    outcomes: [
      "Build comprehensive HR dashboards",
      "Measure and improve HR ROI",
      "Predict employee turnover",
      "Create data-driven HR strategies",
    ],
  },
  {
    title: "Strategic HR Business Partner",
    duration: "10 weeks",
    level: "Advanced",
    rating: 4.8,
    students: "8,500+",
    price: "$1,599",
    description: "Transform into a strategic business partner driving organizational success",
    features: [
      "Strategic Workforce Planning",
      "Change Management Leadership",
      "Business Acumen for HR",
      "Stakeholder Management",
      "Performance Consulting",
    ],
    outcomes: [
      "Lead strategic HR initiatives",
      "Partner with C-suite executives",
      "Drive organizational transformation",
      "Develop business-aligned HR strategies",
    ],
  },
  {
    title: "Digital HR Transformation",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.7,
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
]

export default function CertificateProgramsPage() {
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
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Certificate Programs</h1>
                <p className="text-accent font-semibold">Powered by AIHR Partnership</p>
              </div>
            </div>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Advance your HR career with globally recognized certifications. Our partnership with AIHR brings you
              world-class training programs designed by industry experts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">4.8/5 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">50,000+ Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-semibold">95% Career Advancement Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Banner */}
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
            <h2 className="text-2xl font-bold mb-2">Official AIHR Certified Partner</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              We're proud to partner with AIHR, the world's leading HR certification body, to bring you internationally
              recognized credentials that advance your career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificate Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Certificate Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of certification programs, each designed to elevate your HR expertise
              and career prospects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/50 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {program.level}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{program.price}</div>
                        <div className="text-sm text-muted-foreground">One-time payment</div>
                      </div>
                    </div>

                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>

                    <div className="flex items-center space-x-4 pt-2">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium">{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">{program.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{program.students}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Career Outcomes:</h4>
                      <ul className="space-y-2">
                        {program.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold"
                    >
                      <a
                        href="https://www.aihr.com/human-resources-certifications/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>Enroll Now via AIHR</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Partnership */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our AIHR Partnership?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our exclusive partnership with AIHR ensures you receive the highest quality HR education with local
              support and guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Global Recognition",
                description: "AIHR certificates are recognized by top employers worldwide",
              },
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Learn from industry leaders and HR practitioners",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description: "95% of graduates report career advancement within 12 months",
              },
              {
                icon: CheckCircle,
                title: "Local Support",
                description: "Get personalized guidance from our certified HR consultants",
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Advance Your HR Career?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of HR professionals who have transformed their careers through our AIHR partnership
              programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <a
                  href="https://www.aihr.com/human-resources-certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Browse All Programs
                </a>
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Get Personal Guidance
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
