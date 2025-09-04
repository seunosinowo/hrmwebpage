"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  FileText,
  Calculator,
  UserCheck,
  Settings,
} from "lucide-react"
import Link from "next/link"

const outsourcingServices = [
  {
    icon: Calculator,
    title: "Payroll Outsourcing",
    description: "Complete payroll management including calculations, tax compliance, and reporting.",
    features: [
      "Automated payroll processing",
      "Tax calculations & filing",
      "Direct deposit management",
      "Compliance reporting",
    ],
    savings: "40%",
    efficiency: "95%",
  },
  {
    icon: FileText,
    title: "HR Administration",
    description: "Comprehensive HR administrative services to streamline your operations.",
    features: ["Employee record management", "Policy development", "Documentation handling", "Compliance management"],
    savings: "35%",
    efficiency: "90%",
  },
  {
    icon: Users,
    title: "Employee Relations",
    description: "Professional employee relations management and conflict resolution.",
    features: ["Grievance handling", "Disciplinary procedures", "Performance management", "Employee counseling"],
    savings: "30%",
    efficiency: "88%",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Ensure full compliance with labor laws and regulatory requirements.",
    features: ["Legal compliance audits", "Policy updates", "Risk assessment", "Regulatory reporting"],
    savings: "45%",
    efficiency: "98%",
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Reduce HR operational costs by up to 40% while maintaining quality",
  },
  {
    icon: TrendingUp,
    title: "Improved Efficiency",
    description: "Streamlined processes and expert management increase productivity",
  },
  {
    icon: UserCheck,
    title: "Expert Management",
    description: "Access to specialized HR professionals and industry expertise",
  },
  {
    icon: Settings,
    title: "Scalable Solutions",
    description: "Flexible services that grow and adapt with your business needs",
  },
]

const industries = [
  "Technology & IT",
  "Manufacturing",
  "Healthcare",
  "Financial Services",
  "Retail & E-commerce",
  "Education",
  "Construction",
  "Hospitality",
]

export default function OutsourcingPage() {
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
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">HR Outsourcing Solutions</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                Focus on Your <span className="text-accent">Core Business</span> While We Handle HR
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Comprehensive HR outsourcing services that reduce costs, improve efficiency, and ensure compliance while
                you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="/contact">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
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
                src="/hr-outsourcing-team-working.png"
                alt="HR outsourcing team at work"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose HR Outsourcing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Transform your HR operations with our comprehensive outsourcing solutions designed for modern businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
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
              Comprehensive Outsourcing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From payroll processing to compliance management, we handle all aspects of your HR operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {outsourcingServices.map((service, index) => (
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
                        <div className="text-sm text-muted-foreground">Cost Savings</div>
                        <div className="text-lg font-bold text-accent">{service.savings}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <TrendingUp className="w-4 h-4" />
                      <span>Efficiency: {service.efficiency}</span>
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

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our HR outsourcing expertise spans across multiple industries with specialized knowledge and compliance
              requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-card rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-foreground font-medium">{industry}</div>
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
              Ready to Streamline Your HR Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Let us handle your HR complexities while you focus on what matters most - growing your business. Contact
              us for a customized outsourcing solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">
                  Get Quote <ArrowRight className="w-5 h-5 ml-2" />
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
    </div>
  )
}
