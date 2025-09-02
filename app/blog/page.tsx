"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of HR: Embracing Digital Transformation",
    excerpt:
      "Explore how digital transformation is reshaping HR practices and what organizations need to know to stay competitive.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Digital HR",
    image: "/blog-digital-transformation-hr.png",
    featured: true,
  },
  {
    title: "Building a Strong Company Culture in Remote Work Era",
    excerpt:
      "Strategies for maintaining and strengthening company culture when teams are distributed across different locations.",
    author: "Michael Chen",
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "Company Culture",
    image: "/blog-remote-work-culture.png",
    featured: false,
  },
  {
    title: "People Analytics: Making Data-Driven HR Decisions",
    excerpt:
      "Learn how to leverage people analytics to make informed decisions about talent management and organizational development.",
    author: "Emily Rodriguez",
    date: "December 10, 2024",
    readTime: "10 min read",
    category: "Analytics",
    image: "/blog-people-analytics.png",
    featured: false,
  },
  {
    title: "Effective Recruitment Strategies for 2025",
    excerpt:
      "Discover the latest recruitment trends and strategies that will help you attract top talent in the coming year.",
    author: "David Thompson",
    date: "December 8, 2024",
    readTime: "7 min read",
    category: "Recruitment",
    image: "/blog-recruitment-strategies-2025.png",
    featured: false,
  },
  {
    title: "Employee Engagement: Beyond Surveys and Metrics",
    excerpt:
      "Moving beyond traditional engagement surveys to create meaningful connections and drive real organizational change.",
    author: "Sarah Johnson",
    date: "December 5, 2024",
    readTime: "9 min read",
    category: "Employee Engagement",
    image: "/blog-employee-engagement.png",
    featured: false,
  },
  {
    title: "Compliance in the Modern Workplace: A Complete Guide",
    excerpt:
      "Navigate the complex landscape of workplace compliance with practical tips and best practices for HR professionals.",
    author: "Michael Chen",
    date: "December 3, 2024",
    readTime: "12 min read",
    category: "Compliance",
    image: "/blog-workplace-compliance.png",
    featured: false,
  },
]

const categories = [
  "All",
  "Digital HR",
  "Company Culture",
  "Analytics",
  "Recruitment",
  "Employee Engagement",
  "Compliance",
]

export default function BlogPage() {
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
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">HR Insights & Resources</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Stay Ahead with <span className="text-accent">HR Insights</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Expert insights, industry trends, and practical advice to help you navigate the evolving world of human
              resources and organizational development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="#featured">
                  Read Latest Posts <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/contact">Subscribe to Newsletter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Article</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-white">{blogPosts[0].category}</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl md:text-3xl text-foreground mb-4 text-balance">
                      {blogPosts[0].title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground text-pretty">
                      {blogPosts[0].excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Stay updated with the latest trends, insights, and best practices in human resources management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent text-white">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground mb-2 text-balance">{post.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground text-pretty">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-white bg-transparent"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Never Miss an Update</h2>
            <p className="text-xl text-white/90 mb-8 text-pretty">
              Subscribe to our newsletter and get the latest HR insights, trends, and best practices delivered directly
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/contact">
                  Subscribe Now <ArrowRight className="w-5 h-5 ml-2" />
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
