"use client"

import { motion } from "framer-motion"

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Main spinning circle */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 border-4 border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Loading text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <p className="text-lg font-medium text-foreground">Loading...</p>
          <p className="text-sm text-muted-foreground">Please wait</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo/Brand */}
        <motion.div
          className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">HR</span>
          </div>
        </motion.div>

        {/* Loading bars */}
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-8 bg-primary rounded-full"
              animate={{
                scaleY: [1, 0.3, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-2">HRM Office</h2>
          <p className="text-muted-foreground">Transforming HR Operations</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-muted rounded-lg p-6 space-y-4">
        <div className="h-4 bg-muted-foreground/20 rounded w-1/2"></div>
        <div className="h-3 bg-muted-foreground/20 rounded w-3/4"></div>
        <div className="h-3 bg-muted-foreground/20 rounded w-1/2"></div>
        <div className="h-8 bg-muted-foreground/20 rounded w-24"></div>
      </div>
    </div>
  )
}