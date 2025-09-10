"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Award, Sparkles, BookOpen, Users, TrendingUp, BarChart3, Brain, Target } from "lucide-react"

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

// Certificate program data structure
const certificatePrograms = {
  categories: [
    {
      title: "Certificate Programs",
      icon: BookOpen,
      items: [
        { name: "Professional Certification", badge: "accredited" },
        { name: "Industry Recognition", badge: "official" },
      ],
    },
    {
      title: "People Analytics",
      icon: BarChart3,
      items: [
        { name: "Data-Driven HR", badge: "analytics" },
        { name: "Workforce Insights", badge: "strategic" },
      ],
    },
    {
      title: "Digital HR",
      icon: TrendingUp,
      items: [
        { name: "HR Technology", badge: "innovative" },
        { name: "Digital Transformation", badge: "future" },
      ],
    },
    {
      title: "Business Partnering",
      icon: Target,
      items: [
        { name: "Strategic Leadership", badge: "executive" },
        { name: "Business Alignment", badge: "partnership" },
      ],
    },
    {
      title: "HR Essentials",
      icon: Users,
      items: [
        { name: "Core HR Skills", badge: "foundational" },
        { name: "Professional Development", badge: "essential" },
      ],
    },
    {
      title: "Full Academy",
      icon: Sparkles,
      items: [
        { name: "Complete Curriculum", badge: "comprehensive" },
        { name: "Expert Certification", badge: "premium" },
      ],
    },
  ]
}

export function Header() {
  const pathname = usePathname()
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
      <div className="hidden md:block w-full bg-gradient-to-r from-accent/20 to-accent/10 border-b border-accent/20 py-1.5">
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
                  <>
                    <div
                      className={`flex items-center space-x-1 text-white/90 hover:text-white transition-all duration-300 cursor-pointer py-2 px-4 rounded-xl hover:bg-white/5 ${(item.submenu?.some(sub => pathname === sub.href) || pathname === item.href) ? "bg-accent text-white" : ""}`}
                      onMouseEnter={() => setActiveSubmenu(item.name)}
                      onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                      suppressHydrationWarning
                    >
                      <span className="font-medium text-sm">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.name ? "rotate-180" : ""}`} />
                    </div>

                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-3 w-[750px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/20 overflow-hidden flex"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Left column: Certificate Categories */}
                           <div className="w-1/3 bg-gradient-to-b from-primary/10 to-accent/10 p-4 border-r border-accent/10 flex flex-col justify-center">
                             <div className="text-accent font-bold text-base mb-3 flex items-center gap-2">
                               <Award className="w-4 h-4 text-accent" />
                               Certificate Programs
                             </div>
                             <div className="space-y-0">
                               <Link href="/training/certificate-programs" onClick={() => setActiveSubmenu(null)} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-primary hover:bg-accent/10 transition text-base ${pathname === '/training/certificate-programs' ? 'bg-accent/20 text-accent' : ''}`}>
                                 <BookOpen className="w-4 h-4" />
                                 Certificate Programs
                               </Link>
                               <Link href="/training/people-analytics" onClick={() => setActiveSubmenu(null)} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-primary hover:bg-accent/10 transition text-base ${pathname === '/training/people-analytics' ? 'bg-accent/20 text-accent' : ''}`}>
                                 <BarChart3 className="w-4 h-4" />
                                 People Analytics
                               </Link>
                               <Link href="/training/digital-hr" onClick={() => setActiveSubmenu(null)} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-primary hover:bg-accent/10 transition text-base ${pathname === '/training/digital-hr' ? 'bg-accent/20 text-accent' : ''}`}>
                                 <TrendingUp className="w-4 h-4" />
                                 Digital HR
                               </Link>
                               <Link href="/training/business-partering" onClick={() => setActiveSubmenu(null)} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-primary hover:bg-accent/10 transition text-base ${pathname === '/training/business-partering' ? 'bg-accent/20 text-accent' : ''}`}>
                                 <Target className="w-4 h-4" />
                                 Business Partnering
                               </Link>
                               <Link href="/training/hr-essentials" onClick={() => setActiveSubmenu(null)} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-primary hover:bg-accent/10 transition text-base ${pathname === '/training/hr-essentials' ? 'bg-accent/20 text-accent' : ''}`}>
                                 <Users className="w-4 h-4" />
                                 HR Essentials
                               </Link>
                               <Link href="/training/full-academy" onClick={() => setActiveSubmenu(null)} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-primary hover:bg-accent/10 transition text-base ${pathname === '/training/full-academy' ? 'bg-accent/20 text-accent' : ''}`}>
                                 <Sparkles className="w-4 h-4" />
                                 Full Academy
                               </Link>
                             </div>
                           </div>

                           {/* Right column: Certificate Programs List */}
                           <div className="w-2/3 p-4">
                            <div className="space-y-3">
                              {certificatePrograms.categories.map((category, index) => (
                                <div key={index}>
                                  <div className="flex items-center gap-2 mb-2">
                                    <category.icon className="w-3 h-3 text-accent" />
                                    <h3 className="font-semibold text-primary text-xs">{category.title}</h3>
                                  </div>
                                  <div className="grid grid-cols-2 gap-1">
                                    {category.items.map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="flex items-center justify-between px-2 py-1.5 rounded-md bg-primary/5 text-primary/70 font-medium text-xs cursor-default"
                                      >
                                        <span>{item.name}</span>
                                        {item.badge && (
                                          <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full bg-accent/20 text-accent capitalize">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                  {index < certificatePrograms.categories.length - 1 && (
                                    <hr className="my-2 border-accent/10" />
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                              <span>In collaboration with</span>
                              <Award className="w-3 h-3 text-accent" />
                              <span className="font-medium">AIHR</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    prefetch={true}
                    onMouseEnter={() => setActiveSubmenu(null)}
                    className={`text-white/90 hover:text-white transition-all duration-300 font-medium text-sm py-2 px-4 rounded-xl hover:bg-white/5 ${pathname === item.href ? "bg-accent text-white" : ""}`}
                    suppressHydrationWarning
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="https://www.aihr.com/partner/hrmoffice/ " target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <Award className="w-4 h-4 mr-2" />
                <span>Get Certified</span>
                <svg xmlns="http://www.w3.org/2000/svg " className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
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
                          className={`w-full text-left px-4 py-3 text-white hover:text-accent transition-colors flex items-center justify-between rounded-xl hover:bg-white/5 ${(item.submenu?.some(sub => pathname === sub.href) || pathname === item.href) ? "bg-accent text-white" : ""}`}
                          onClick={() => setIsMobileSubmenuOpen(isMobileSubmenuOpen === item.name ? null : item.name)}
                          suppressHydrationWarning
                        >
                          <span className="font-medium text-sm">{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${isMobileSubmenuOpen === item.name ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {isMobileSubmenuOpen === item.name && (
                            <motion.div
                              className="pl-4 space-y-0.5 mt-0.5"
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
                                  className={`block px-3 py-2 text-white/80 hover:text-accent transition-colors rounded-md hover:bg-white/5 ${pathname === subItem.href ? "bg-accent text-white" : ""}`}
                                  onClick={() => {
                                    setIsOpen(false)
                                    setIsMobileSubmenuOpen(null)
                                  }}
                                  suppressHydrationWarning
                                >
                                  <div className="font-medium text-sm flex items-center">
                                    {subItem.name}
                                    <svg xmlns="http://www.w3.org/2000/svg " className="h-3 w-3 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
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
                        className={`block px-4 py-3 text-white hover:text-accent transition-colors rounded-xl hover:bg-white/5 font-medium text-sm ${pathname === item.href ? "bg-accent text-white" : ""}`}
                        onClick={() => setIsOpen(false)}
                        suppressHydrationWarning
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-2">
                  <Link href="https://www.aihr.com/partner/hrmoffice/ " target="_blank" rel="noopener noreferrer">
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