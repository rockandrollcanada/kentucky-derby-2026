"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const derbyDate = new Date("2026-05-02T18:57:00-04:00")

    const timer = setInterval(() => {
      const now = new Date()
      const difference = derbyDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Floating roses animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <RoseIcon className="w-8 h-8 text-primary/30" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Horseshoe decoration */}
        <div className="flex justify-center mb-6">
          <HorseshoeIcon className="w-16 h-16 text-secondary animate-pulse" />
        </div>

        <p className="text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-4">
          The 152nd Running
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight">
          <span className="text-balance">Kentucky Derby</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-secondary/50" />
          <p className="text-2xl md:text-3xl text-secondary font-light italic">
            The Run for the Roses
          </p>
          <div className="h-px w-16 bg-secondary/50" />
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12">
          Saturday, May 2, 2026 &bull; Churchill Downs &bull; Louisville, Kentucky
        </p>

        {/* Countdown timer */}
        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-xl mx-auto mb-12">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-3 md:p-6"
            >
              <div className="text-3xl md:text-5xl font-bold text-primary tabular-nums">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#entries"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View Post Positions
            <ChevronDownIcon className="w-5 h-5" />
          </a>
          <a
            href="#canadian"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/10 transition-colors"
          >
            <MapleLeafIcon className="w-5 h-5" />
            Canadian Connection
          </a>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

function RoseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C12.5 4 14 6 17 7C14 8 12.5 10 12 12C11.5 10 10 8 7 7C10 6 11.5 4 12 2ZM12 12C12.5 14 14 16 17 17C14 18 12.5 20 12 22C11.5 20 10 18 7 17C10 16 11.5 14 12 12Z" />
    </svg>
  )
}

function HorseshoeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20c0-8 4-12 8-12s8 4 8 12" />
      <circle cx="4" cy="20" r="2" fill="currentColor" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <path d="M6 16c0-5 2.5-8 6-8s6 3 6 8" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function MapleLeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9 7L3 8L6 13L4 19L12 17L20 19L18 13L21 8L15 7L12 2Z" />
    </svg>
  )
}
