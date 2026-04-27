export function CanadianConnection() {
  return (
    <section id="canadian" className="py-20 px-4 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <MapleLeafIcon className="w-10 h-10 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center">
            <span className="block">🇨🇦 The Canadian Connection 🇨🇦</span>
            <span className="block text-3xl md:text-4xl mt-2">Rock and Roll Canada</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mark Casse Feature */}
          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <TrophyIcon className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Mark Casse</h3>
                <p className="text-accent font-medium">Hall of Fame Trainer</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Canadian trainer Mark Casse, inducted into the Racing Hall of Fame in 2020, 
              brings <strong className="text-foreground">Silent Tactic</strong> to the 2026 Kentucky Derby. 
              The dual Canadian and American Hall of Famer has been the leading trainer at 
              <strong className="text-foreground"> Woodbine Racetrack in Toronto an incredible 14 times</strong>.
            </p>

            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground italic">
                &quot;Cristian learned to ride at our training center, and his brother still works for us today. 
                You couldn&apos;t ask for a more wonderful young man, and he&apos;s worked hard.&quot;
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Mark Casse on jockey Cristian Torres</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-accent/10 rounded-lg">
                <div className="text-3xl font-bold text-accent">14×</div>
                <div className="text-xs text-muted-foreground">Woodbine Champion</div>
              </div>
              <div className="text-center p-3 bg-accent/10 rounded-lg">
                <div className="text-3xl font-bold text-accent">2020</div>
                <div className="text-xs text-muted-foreground">Hall of Fame</div>
              </div>
            </div>
          </div>

          {/* Silent Tactic Card */}
          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                Post 13
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Canadian Entry
              </span>
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-2">Silent Tactic</h3>
            <p className="text-2xl text-primary font-bold mb-6">30-1</p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Sire</span>
                <span className="text-foreground font-medium">Tacitus</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Trainer</span>
                <span className="text-foreground font-medium">Mark Casse</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Jockey</span>
                <span className="text-foreground font-medium">Cristian Torres</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Key Prep</span>
                <span className="text-foreground font-medium">Arkansas Derby (G1) - 2nd</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Arkansas Derby runner-up Silent Tactic represents Casse&apos;s continued pursuit of 
              his first Kentucky Derby victory. The son of Tacitus has shown consistency 
              throughout his campaign, finishing in the top two in most of his prep races.
            </p>
          </div>
        </div>

        {/* Canadian Derby History */}
        <div className="mt-12 bg-background rounded-xl border border-border p-6 md:p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Recent Canadian Connections in the Kentucky Derby
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-secondary mb-1">2016</div>
              <div className="text-lg font-semibold text-foreground">Nyquist</div>
              <div className="text-sm text-muted-foreground">
                Canadian-owned winner<br />
                Jockey: Mario Gutierrez
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-secondary mb-1">2017</div>
              <div className="text-lg font-semibold text-foreground">Classic Empire</div>
              <div className="text-sm text-muted-foreground">
                Trainer: Mark Casse<br />
                Finished 4th
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-secondary mb-1">2019</div>
              <div className="text-lg font-semibold text-foreground">War of Will</div>
              <div className="text-sm text-muted-foreground">
                Trainer: Mark Casse<br />
                Preakness Winner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapleLeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9 7L3 8L6 13L4 19L12 17L20 19L18 13L21 8L15 7L12 2Z" />
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
