export function CanadianConnection() {
  return (
    <section id="canadian" className="py-20 px-4 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <MapleLeafIcon className="w-10 h-10 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Canadian Connection
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          With Silent Tactic scratched, all Canadian eyes turn to a familiar trio with
          a championship pedigree under the Twin Spires.
        </p>

        {/* Scratched Notice */}
        <div className="mb-10 bg-background border border-destructive/40 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4">
          <span className="px-3 py-1 bg-destructive text-destructive-foreground rounded-full text-xs font-bold tracking-wide shrink-0">
            SCRATCHED
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Silent Tactic</strong> (Mark Casse / Cristian Torres),
            originally drawn into Post 13, has been <strong className="text-foreground">scratched from the field</strong>.
            Casse&apos;s pursuit of his first Kentucky Derby victory will have to wait another year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Reddam Racing Feature */}
          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <TrophyIcon className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Reddam Racing</h3>
                <p className="text-accent font-medium">The Canadian-Owned Powerhouse</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Owned by Canadian businessman <strong className="text-foreground">Paul Reddam</strong>,
              Reddam Racing returns to Churchill Downs with{" "}
              <strong className="text-foreground">Pavlovian</strong>, trained by{" "}
              <strong className="text-foreground">Doug O&apos;Neill</strong> and ridden by{" "}
              <strong className="text-foreground">Mario Gutierrez</strong> &mdash; the same trio that
              brought home <strong className="text-foreground">two Kentucky Derby victories</strong>.
            </p>

            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground italic">
                &quot;We&apos;ve been chasing roses for a long time. To bring a third one home to
                Canada would mean everything.&quot;
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                &mdash; Paul Reddam, Owner
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-accent/10 rounded-lg">
                <div className="text-3xl font-bold text-accent">2012</div>
                <div className="text-xs text-muted-foreground">I&apos;ll Have Another</div>
              </div>
              <div className="text-center p-3 bg-accent/10 rounded-lg">
                <div className="text-3xl font-bold text-accent">2016</div>
                <div className="text-xs text-muted-foreground">Nyquist (Undefeated)</div>
              </div>
            </div>
          </div>

          {/* Pavlovian Card */}
          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                Post 16
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Canadian Entry
              </span>
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-2">Pavlovian</h3>
            <p className="text-2xl text-primary font-bold mb-6">30-1</p>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Owner</span>
                <span className="text-foreground font-medium">Reddam Racing (CAN)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Trainer</span>
                <span className="text-foreground font-medium">Doug O&apos;Neill</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Jockey</span>
                <span className="text-foreground font-medium">Mario Gutierrez</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Key Prep</span>
                <span className="text-foreground font-medium">Santa Anita Derby (G1) - 3rd</span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              A long shot on the morning line, but never count out the Reddam/O&apos;Neill/Gutierrez
              combination at Churchill Downs. Mario Gutierrez has piloted both of Reddam&apos;s Derby
              winners and knows exactly how to navigate a 20-horse field.
            </p>
          </div>
        </div>

        {/* Canadian Derby History */}
        <div className="mt-12 bg-background rounded-xl border border-border p-6 md:p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Canadian Connections in Recent Kentucky Derbies
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-secondary mb-1">2012</div>
              <div className="text-lg font-semibold text-foreground">I&apos;ll Have Another</div>
              <div className="text-sm text-muted-foreground">
                Owner: Paul Reddam (CAN)<br />
                Jockey: Mario Gutierrez
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-secondary mb-1">2016</div>
              <div className="text-lg font-semibold text-foreground">Nyquist</div>
              <div className="text-sm text-muted-foreground">
                Owner: Paul Reddam (CAN)<br />
                Undefeated Champion
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-secondary mb-1">2019</div>
              <div className="text-lg font-semibold text-foreground">War of Will</div>
              <div className="text-sm text-muted-foreground">
                Trainer: Mark Casse (CAN)<br />
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
