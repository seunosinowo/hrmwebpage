"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Monitor, Users, Building, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: GraduationCap,
    title: "Training & Certification",
    description: "AIHR certified programs, people analytics, business partnering, and comprehensive HR education.",
    features: ["Certificate Programs", "People Analytics", "Business Partnering", "HR Essentials"],
    href: "/training",
    color: "bg-accent",
  },
  {
    icon: Monitor,
    title: "HR Software Solutions",
    description: "Cutting-edge HR technology solutions to streamline your human resources operations.",
    features: ["HRIS Systems", "Payroll Management", "Performance Tracking", "Analytics Dashboard"],
    href: "/hr-software",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Recruitment Services",
    description: "Expert recruitment and talent acquisition services to find the right people for your organization.",
    features: ["Executive Search", "Bulk Hiring", "Talent Sourcing", "Interview Process"],
    href: "/recruitment",
    color: "bg-accent",
  },
  {
    icon: Building,
    title: "HR Outsourcing",
    description: "Complete HR outsourcing solutions to let you focus on your core business operations.",
    features: ["Payroll Outsourcing", "Compliance Management", "Employee Relations", "HR Administration"],
    href: "/outsourcing",
    color: "bg-primary",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive HR Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From training and certification to complete HR outsourcing, we provide end-to-end solutions that help your
            organization thrive in today's competitive landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="block">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors bg-transparent"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-muted rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            Ready to Transform Your HR Operations?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join hundreds of companies that trust HRM Office for their human resources needs. Let's discuss how we can
            help your organization grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Today
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
