"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Crown, Users, TrendingUp, Clock, ArrowRight, Star, Infinity, Zap } from "lucide-react"
import Image from "next/image"

export default function FullAcademyPage() {
  const programs = [
    {
      title: "HR Business Partner Certification",
      level: "Advanced",
      duration: "14 weeks",
      rating: 4.9,
      students: "2,500+",
    },
    {
      title: "People Analytics Certification",
      level: "Intermediate",
      duration: "12 weeks",
      rating: 4.8,
      students: "1,800+",
    },
    {
      title: "Digital HR Transformation",
      level: "Advanced",
      duration: "10 weeks",
      rating: 4.9,
      students: "1,200+",
    },
    {
      title: "Talent Acquisition Specialist",
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.7,
      students: "3,100+",
    },
    {
      title: "Learning & Development Manager",
      level: "Advanced",
      duration: "12 weeks",
      rating: 4.8,
      students: "1,600+",
    },
    {
      title: "Compensation & Benefits Expert",
      level: "Intermediate",
      duration: "10 weeks",
      rating: 4.7,
      students: "1,400+",
    },
  ]

  const benefits = [
    {
      icon: Infinity,
      title: "Unlimited Access",
      description: "Access all current and future courses, resources, and content",
    },
    {
      icon: Crown,
      title: "Premium Support",
      description: "Priority support from AIHR experts and dedicated success manager",
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Join elite network of senior HR professionals and thought leaders",
    },
    {
      icon: Zap,
      title: "Early Access",
      description: "Get first access to new courses, features, and industry insights",
    },
  ]

  const outcomes = [
    "Complete mastery of all HR disciplines and specializations",
    "Access to exclusive C-level HR leadership content",
    "Personalized learning paths based on your career goals",
    "Direct mentorship opportunities with industry experts",
    "Priority job placement assistance and career coaching",
    "Lifetime access to all AIHR content and updates",
    "Exclusive invitations to AIHR events and masterclasses",
    "Advanced certifications recognized globally",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
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
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/20"
                  >
                    <Crown className="w-3 h-3 mr-1" />
                    Premium Partnership
                  </Badge>
                </div>

                <div>
                  <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
                    <Crown className="w-4 h-4 mr-2" />
                    AIHR Full Academy Access
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6">
                    Master Every Aspect of
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {" "}
                      Modern HR
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                    Get unlimited access to AIHR's complete academy through our exclusive partnership. From foundational
                    skills to C-level expertise, transform your HR career with the world's most comprehensive HR
                    education platform.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">Courses</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      500+
                    </div>
                    <div className="text-sm text-muted-foreground">Hours Content</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ∞
                    </div>
                    <div className="text-sm text-muted-foreground">Lifetime Access</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    asChild
                  >
                    <a href="https://www.aihr.com/academy/" target="_blank" rel="noopener noreferrer">
                      Get Full Academy Access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Demo
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
                    src="/aihr-full-academy-dashboard.png"
                    alt="AIHR Full Academy Dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20" />
                </div>

                {/* Floating Achievement Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Career Growth</div>
                      <div className="text-sm text-muted-foreground">Accelerated Path</div>
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
                    <div className="w-12 h-12 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full flex items-center justify-center">
                      <Crown className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">Elite Status</div>
                      <div className="text-sm text-muted-foreground">Premium Member</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Complete Curriculum</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">All AIHR Programs Included</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Get unlimited access to every AIHR certification program, course, and resource with your Full Academy
                membership.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
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
                        <Badge variant={program.level === "Advanced" ? "default" : "secondary"} className="text-xs">
                          {program.level}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{program.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {program.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {program.students}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Included in Full Access</span>
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Premium Benefits</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Full Academy Access?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Get the ultimate HR education experience with exclusive benefits and unlimited access to everything AIHR
                offers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Career Transformation</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">What Full Academy Access Delivers</h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Transform your HR career with comprehensive access to the world's leading HR education platform.
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
                    src="/hr-executive-leading-strategic-meeting.png"
                    alt="HR Executive Leading Strategic Meeting"
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
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Crown className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Master Modern HR?</h2>
              <p className="text-xl opacity-90 mb-8 text-pretty">
                Join the elite community of HR professionals who have unlimited access to the world's best HR education
                through our AIHR partnership.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://www.aihr.com/academy/" target="_blank" rel="noopener noreferrer">
                    Get Full Academy Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Schedule Consultation
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
