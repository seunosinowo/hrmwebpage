"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Award, Sparkles } from "lucide-react"

const navigationItems = [
  {
    name: "Trainings & Certification",
    href: "/training",
    hasSubmenu: true,
    submenu: [
      { name: "Certificate Programs", href: "/training/certificate-programs" },
      { name: "People Analytics", href: "/training/people-analytics" },
      { name: "Digital HR", href: "/training/digital-hr" },
      { name: "Business Partnering", href: "/training/business-partering" },
      { name: "HR Essentials Membership", href: "/training/hr-essentials" },
      { name: "Full Academy Access", href: "/training/full-academy" },
    ],
  },
  { name: "HR Software", href: "/hr-software" },
  { name: "Recruitment", href: "/recruitment" },
  { name: "Outsourcing", href: "/outsourcing" },
  { name: "About Us", href: "/about" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState<string | null>(null)
  const submenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-primary backdrop-blur-lg border-b border-accent/30 shadow-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-accent/20 to-accent/10 border-b border-accent/20 py-1.5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="flex items-center space-x-2 text-white/90 text-sm bg-white/5 px-4 py-1 rounded-full backdrop-blur-sm">
              <div className="flex items-center">
                <Award className="w-4 h-4 text-accent mr-2" />
                <span className="font-medium">Official AIHR Certified Partner</span>
              </div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
              <Sparkles className="w-3.5 h-3.5 text-accent" />
            </div>
            <Link
              href="/contact"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-all duration-300 font-medium text-sm py-1 px-3 rounded-full hover:bg-white/10"
            >
              <Award className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <motion.div 
            className="flex-shrink-0" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <div className="w-40 h-12 overflow-hidden relative">
                <Image src="/hrm_white.png" alt="HRM Office Logo" fill className="object-contain w-full h-full" />
              </div>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group" ref={submenuRef}>
                {item.hasSubmenu ? (
                  <div
                    className="flex items-center space-x-1 text-white/90 hover:text-white transition-all duration-300 cursor-pointer py-2 px-4 rounded-xl hover:bg-white/5"
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                    onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                  >
                    <span className="font-medium text-sm">{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.name ? "rotate-180" : ""}`} />

                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 overflow-hidden"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-2 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-white/20">
                            <div className="flex items-center space-x-2 px-3 py-2">
                              <Award className="w-4 h-4 text-accent" />
                              <span className="text-sm font-medium text-foreground">AIHR Partnership Programs</span>
                            </div>
                          </div>
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              prefetch={true}
                              className="block px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-200 border-l-4 border-transparent hover:border-accent group/item"
                            >
                              <div className="font-medium text-sm flex items-center">
                                {subItem.name}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-2 opacity-0 group-hover/item:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">In collaboration with AIHR</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="text-white/90 hover:text-white transition-all duration-300 font-medium text-sm py-2 px-4 rounded-xl hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <Award className="w-4 h-4 mr-2" />
                <span>Get Certified</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen(!isOpen)
                if (isOpen) {
                  setIsMobileSubmenuOpen(null)
                }
              }}
              className="text-white hover:text-accent hover:bg-white/10 rounded-xl p-2 h-10 w-10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-4 space-y-1 bg-primary/98 backdrop-blur-lg rounded-b-xl border-t border-accent/20 mt-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          className="w-full text-left px-4 py-3 text-white hover:text-accent transition-colors flex items-center justify-between rounded-xl hover:bg-white/5"
                          onClick={() => setIsMobileSubmenuOpen(isMobileSubmenuOpen === item.name ? null : item.name)}
                        >
                          <span className="font-medium text-sm">{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${isMobileSubmenuOpen === item.name ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {isMobileSubmenuOpen === item.name && (
                            <motion.div
                              className="pl-6 space-y-1 mt-1"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.submenu?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  prefetch={true}
                                  className="block px-4 py-2.5 text-white/80 hover:text-accent transition-colors rounded-lg hover:bg-white/5"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setIsMobileSubmenuOpen(null)
                                  }}
                                >
                                  <div className="font-medium text-sm flex items-center">
                                    {subItem.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <div className="text-xs text-white/60">In collaboration with AIHR</div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        prefetch={true}
                        className="block px-4 py-3 text-white hover:text-accent transition-colors rounded-xl hover:bg-white/5 font-medium text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-2">
                  <Link href="https://www.aihr.com/partner/hrmoffice/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold rounded-xl py-3">
                      <Award className="w-4 h-4 mr-2" />
                      <span>Get Certified</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
