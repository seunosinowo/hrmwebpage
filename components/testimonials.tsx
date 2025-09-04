"use client"

import { motion } from "framer-motion"
import { Star, Quote, User } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director",
    company: "TechCorp Nigeria",
    image: "/team-ceo-sarah-johnson.png",
    content:
      "HRM Office transformed our entire HR strategy. Their AIHR-certified training programs elevated our team's capabilities beyond expectations. The ROI has been phenomenal.",
    rating: 5,
  },
  {
    name: "Michael Adebayo",
    role: "CEO",
    company: "Growth Ventures",
    image: "/team-head-training-michael-chen.png",
    content:
      "The recruitment services provided by HRM Office are unmatched. They found us top-tier talent that perfectly aligned with our company culture and values.",
    rating: 5,
  },
  {
    name: "Funmi Okafor",
    role: "People Operations Lead",
    company: "FinTech Solutions",
    image: "/hr-professional-using-digital-resources.png",
    content:
      "Their HR outsourcing services allowed us to focus on core business while ensuring our people operations ran seamlessly. Highly professional and reliable.",
    rating: 5,
  },
]

// Optimized Image Component with Error Handling
function OptimizedAvatar({
  src,
  alt,
  name,
  className = "w-12 h-12 rounded-full object-cover mr-4"
}: {
  src: string
  alt: string
  name: string
  className?: string
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    // Show default avatar with initials
    const initials = name.split(' ').map((n: string) => n[0]).join('').toUpperCase()
    return (
      <div className={`${className} bg-gradient-to-br from-primary to-accent flex items-center justify-center`}>
        <span className="text-white font-semibold text-sm">{initials}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  )
}

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. Here's what industry leaders say about their experience with HRM Office.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Quote className="w-8 h-8 text-accent mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center">
                <OptimizedAvatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  name={testimonial.name}
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
