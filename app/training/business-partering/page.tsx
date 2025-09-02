"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, TrendingUp, Award, Clock, ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export default function BusinessPartneringPage() {
  const modules = [
    {
      title: "Strategic HR Business Partnership",
      duration: "4 weeks",
      topics: ["Strategic alignment", "Business acumen", "Stakeholder management", "Value creation"],
    },
    {
      title: "Data-Driven HR Decision Making",
      duration: "3 weeks",
      topics: ["HR metrics", "Business intelligence", "ROI measurement", "Predictive analytics"],
    },
    {
      title: "Change Management & Transformation",
      duration: "4 weeks",
      topics: ["Change leadership", "Transformation strategies", "Communication", "Resistance management"],
    },
    {
      title: "Organizational Development",
      duration: "3 weeks",
      topics: ["Culture design", "Team effectiveness", "Leadership development", "Performance optimization"],
    },
  ]

  const outcomes = [
    "Develop strategic business acumen and commercial awareness",
    "Master stakeholder management and influence without authority",
    "Create data-driven HR strategies that drive business results",
    "Lead organizational change and transformation initiatives",
    "Build strong partnerships with business leaders",
    "Measure and communicate HR's business impact",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
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
                    Certified Partnership
                  </Badge>
                </div>

                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    <Award className="w-4 h-4 mr-2" />
                    Strategic HR Business Partnering
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                    Become a Strategic
                    <span className="text-primary"> HR Business Partner</span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                    Transform from HR administrator to strategic business partner. Master the skills to drive business
                    results, influence leadership, and create organizational impact through our comprehensive AIHR
                    partnership program.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Career Advancement</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-accent">14 Weeks</div>
                    <div className="text-sm text-muted-foreground">Comprehensive Program</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <a
                      href="https://www.aihr.com/courses/hr-business-partner/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enroll Now at AIHR
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Curriculum
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
                    src="/business-partnering-strategic-meeting.png"
                    alt="HR Business Partnering Strategic Meeting"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Floating Achievement Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Strategic Impact</div>
                      <div className="text-sm text-muted-foreground">Drive Business Results</div>
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
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Leadership Influence</div>
                      <div className="text-sm text-muted-foreground">C-Suite Partnership</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Program Modules */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Comprehensive Curriculum</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Master Strategic HR Business Partnering</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Our AIHR-certified program covers everything you need to become a strategic HR business partner who
                drives organizational success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {module.duration}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Career Transformation</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">What You'll Achieve</h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Transform your HR career and become the strategic partner your organization needs to drive business
                  success.
                </p>

                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/hr-business-partner-presenting-to-executives.png"
                    alt="HR Business Partner Presenting to Executives"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Become a Strategic HR Business Partner?</h2>
              <p className="text-xl opacity-90 mb-8 text-pretty">
                Join thousands of HR professionals who have transformed their careers through our AIHR partnership
                program.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://www.aihr.com/courses/hr-business-partner/" target="_blank" rel="noopener noreferrer">
                    Start Your Journey at AIHR
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
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
