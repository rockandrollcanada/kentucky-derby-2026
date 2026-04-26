export function Footer() {
  return (
    <footer className="py-12 px-4 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        {/* Rose garland decoration */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <RoseIcon className="w-6 h-6 text-primary" />
          <RoseIcon className="w-8 h-8 text-primary" />
          <HorseshoeIcon className="w-10 h-10 text-secondary" />
          <RoseIcon className="w-8 h-8 text-primary" />
          <RoseIcon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4">
          May 2, 2026 &bull; Churchill Downs
        </h3>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          The Kentucky Derby has been held annually at Churchill Downs since 1875, 
          making it the longest continuously held horse race in the United States.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://www.kentuckyderby.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Official Website
          </a>
          <span className="text-border">|</span>
          <a
            href="https://www.churchilldowns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Churchill Downs
          </a>
          <span className="text-border">|</span>
          <a
            href="https://www.peacocktv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Watch on Peacock
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          This is a fan-made promotional page. The Kentucky Derby and Run for the Roses 
          are registered trademarks of Churchill Downs Incorporated.
        </p>
      </div>
    </footer>
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
