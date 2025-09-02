"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Training & Certification", href: "/training" },
      { name: "HR Software", href: "/hr-software" },
      { name: "Recruitment", href: "/recruitment" },
      { name: "Outsourcing", href: "/outsourcing" },
    ],
  },
  {
    title: "Training Programs",
    links: [
      { name: "Certificate Programs", href: "/training/certificate-programs" },
      { name: "People Analytics", href: "/training/people-analytics" },
      { name: "Business Partnering", href: "/training/business-partnering" },
      { name: "HR Essentials", href: "/training/hr-essentials" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Business Functions", href: "/business-functions" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Jobs & Careers", href: "/jobs" },
      { name: "Blog & Insights", href: "/blog" },
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">HR</span>
                </div>
                <span className="text-white font-bold text-xl">HRM Office</span>
              </div>
              <p className="text-white/80 mb-6 text-pretty">
                Leading HR services company providing comprehensive training, certification, recruitment, and
                outsourcing solutions to help organizations thrive in today's competitive landscape.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-white/80">+234 811 477 888</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-white/80">info@hrmoffice.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-white/80">Lagos, Nigeria</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-accent transition-colors"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-white/20 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm">© 2024 HRM Office. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
