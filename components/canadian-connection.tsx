export function CanadianConnection() {
  return (
    <section id="canadian" className="py-20 px-4 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <MapleLeafIcon className="w-10 h-10 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            The Canadian Connection
          </h2>
        </div>

        {/* Scratch notice */}
        <div className="max-w-3xl mx-auto mb-12 bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-center">
          <p className="text-sm md:text-base text-foreground">
            <span className="font-bold text-destructive uppercase tracking-wide">Scratched:</span>{" "}
            Mark Casse&apos;s <strong>Silent Tactic</strong> has been scratched from the 2026 Kentucky Derby
            field. The Canadian banner now passes to Hall of Fame trainer{" "}
            <strong>Josie Carroll</strong> and her promising colt <strong>Maple Monarch</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Josie Carroll Feature */}
          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <TrophyIcon className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Josie Carroll</h3>
                <p className="text-accent font-medium">Canadian Hall of Fame Trainer</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Toronto-based trainer Josie Carroll, inducted into the Canadian Horse Racing Hall of Fame in 2018,
              steps onto the Churchill Downs stage with{" "}
              <strong className="text-foreground">Maple Monarch</strong>. The trailblazing
              conditioner became the{" "}
              <strong className="text-foreground">first woman to train a Queen&apos;s Plate winner</strong>{" "}
              with Edenwold in 2006, and repeated the feat with Inglorious in 2011.
            </p>

            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground italic">
                &quot;This colt has the pedigree, the stride, and the heart for a mile and a quarter.
                Patrick has known him since he was a yearling — there&apos;s no jockey I&apos;d rather have
                under those Twin Spires.&quot;
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Josie Carroll on Maple Monarch and Patrick Husbands</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-accent/10 rounded-lg">
                <div className="text-3xl font-bold text-accent">2×</div>
                <div className="text-xs text-muted-foreground">Queen&apos;s Plate Winner</div>
              </div>
              <div className="text-center p-3 bg-accent/10 rounded-lg">
                <div className="text-3xl font-bold text-accent">2018</div>
                <div className="text-xs text-muted-foreground">Hall of Fame</div>
              </div>
            </div>
          </div>

          {/* Maple Monarch Card */}
          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                Post 13
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Canadian Entry
              </span>
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-2">Maple Monarch</h3>
            <p className="text-2xl text-primary font-bold mb-6">20-1</p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Sire</span>
                <span className="text-foreground font-medium">Mitole</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Trainer</span>
                <span className="text-foreground font-medium">Josie Carroll</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Jockey</span>
                <span className="text-foreground font-medium">Patrick Husbands</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Key Prep</span>
                <span className="text-foreground font-medium">Blue Grass Stakes (G1) - 3rd</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              A late-running son of Mitole, Maple Monarch closed strongly to finish third in the
              Blue Grass at Keeneland and earned his way into the Derby gate via the Road to the
              Kentucky Derby points standings. With Canadian Hall of Fame jockey Patrick Husbands
              aboard, the Woodbine-bred colt carries the Maple Leaf into post 13.
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
                Canadian-owned winner
                <br />
                Jockey: Mario Gutierrez
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-secondary mb-1">2019</div>
              <div className="text-lg font-semibold text-foreground">War of Will</div>
              <div className="text-sm text-muted-foreground">
                Trainer: Mark Casse
                <br />
                Preakness Winner
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-secondary mb-1">2024</div>
              <div className="text-lg font-semibold text-foreground">Catching Freedom</div>
              <div className="text-sm text-muted-foreground">
                Canadian co-ownership
                <br />
                Finished 4th
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
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
