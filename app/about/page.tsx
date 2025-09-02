"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Users, Target, Award, Heart, ArrowRight, CheckCircle, Briefcase, Lightbulb, Flame } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Briefcase,
    title: "Professionalism",
    description: "We are reliable in following global best practices and guided by high ethical standards and we promote same in our client organisations.",
  },
  {
    icon: CheckCircle,
    title: "Responsibility",
    description: "We show leadership through responsibility and accountability, handling every clients business with sense of ownership.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are innovative, creative and responsive in the way we think, learn and act. Hence no challenge too great for us to tackle and we are committed to doing the best it takes to achieve quality outcomes and inspire exceptional performance.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We share experiences, knowledge and ideas to foster greater communication, interaction and cohesiveness and the result of this collaboration is reflected in the quality of service we deliver.",
  },
  {
    icon: Heart,
    title: "Relationship",
    description: "With a clear understanding that people make organisation what they become, we are committed to creating and implementing solutions that helps attract, talents thereby creating positive, long lasting relationships",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We've got insight into the role innovation play in the achievement of organisational vision and mandate. To this end we foster a culture that encourages all staff and partners to think outside the box and maximize their potential.",
  },
  {
    icon: Flame,
    title: "Passion",
    description: "Driven by a desire to make a difference, and enhance workforce performance of different organisations, we firmly believe passion is at the heart of our business model as it is for every member of our team.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "/team-ceo-sarah-johnson.png",
    description: "20+ years of HR leadership experience across Fortune 500 companies.",
  },
  {
    name: "Michael Chen",
    role: "Head of Training & Development",
    image: "/team-head-training-michael-chen.png",
    description: "AIHR certified expert with extensive experience in HR education and certification.",
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Recruitment",
    image: "/team-director-recruitment-emily-rodriguez.png",
    description: "Specialist in executive search and talent acquisition with 15+ years experience.",
  },
  {
    name: "David Thompson",
    role: "Head of HR Technology",
    image: "/team-head-technology-david-thompson.png",
    description: "Technology leader focused on innovative HR software solutions and digital transformation.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/95 via-primary to-primary/90 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10"></div>
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-background/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 backdrop-blur-sm px-4 py-1.5">About Us</Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance tracking-tight">
              About Us
            </h1>
            <p className="text-xl text-white/90 mb-10 text-pretty max-w-3xl mx-auto leading-relaxed">
              We consistently deliver outstanding results in Recruitment and On-boarding, Human Capital Development, Performance Management, Payroll Administration, Organisational Development and Human Resource Outsourcing in a technology enabled environment.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-7 bg-primary rounded-md mr-3"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance tracking-tight">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                  To consistently deliver outstanding results across the Human Resource Management value chain, using world class technologies that enable organisations run their HR departments more strategically, efficiently and at a reduced cost, with real time digital data reporting and virtual collaboration as extra value added. 
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-7 bg-primary rounded-md mr-3"></div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  To be the number one automated and integrated Human Resource Management services provider in Africa. 
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/aboutusTeam.jpg"
                  alt="HRM Office team collaboration"
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">Guiding Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              As a dedicated team of professionals, we pride ourselves on delivering superior service and live by an inherent set of values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <Card className="h-full group border-0 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-1 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="pb-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground text-center">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground text-pretty text-center">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance tracking-tight">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Experienced professionals dedicated to delivering exceptional HR solutions and driving your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <Card className="h-full text-center border-0 bg-transparent shadow-none group">
                  <CardHeader className="pb-4">
                    <div className="relative mx-auto mb-5 w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover relative z-10 border-4 border-background shadow-lg"
                      />
                    </div>
                    <CardTitle className="text-lg text-foreground tracking-tight">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-medium mt-1">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}