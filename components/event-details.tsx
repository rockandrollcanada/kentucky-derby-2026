export function EventDetails() {
  return (
    <section className="py-16 px-4 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <TvIcon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Watch Live</h3>
            <p className="text-muted-foreground">
              NBC &amp; USA Network
              <br />
              <span className="text-sm">Stream on Peacock</span>
            </p>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <ClockIcon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Coverage Begins</h3>
            <p className="text-muted-foreground">
              2:30 PM - 7:30 PM ET
              <br />
              <span className="text-sm">Post Time: ~6:57 PM ET</span>
            </p>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <TrophyIcon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">The Distance</h3>
            <p className="text-muted-foreground">
              1¼ Miles (10 Furlongs)
              <br />
              <span className="text-sm">&quot;The Most Exciting Two Minutes in Sports&quot;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TvIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
