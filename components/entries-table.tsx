"use client"

import { useState } from "react"

const entries = [
  { post: 1, horse: "Renegade", odds: "9-2", trainer: "Steve Asmussen", jockey: "Joel Rosario", favorite: true },
  { post: 2, horse: "Albus", odds: "40-1", trainer: "John Sadler", jockey: "Mike Smith" },
  { post: 3, horse: "Intrepido", odds: "30-1", trainer: "Gustavo Delgado", jockey: "Emisael Jaramillo" },
  { post: 4, horse: "Litmas Test", odds: "35-1", trainer: "Todd Pletcher", jockey: "John Velazquez" },
  { post: 5, horse: "Right to Party", odds: "50-1", trainer: "Wesley Ward", jockey: "Tyler Gaffalione" },
  { post: 6, horse: "Commandment", odds: "6-1", trainer: "Brad Cox", jockey: "Florent Geroux", favorite: true },
  { post: 7, horse: "Danon Bourbon", odds: "50-1", trainer: "Yoshito Yahagi", jockey: "Yuga Kawada" },
  { post: 8, horse: "So Happy", odds: "15-1", trainer: "Chad Brown", jockey: "Irad Ortiz Jr." },
  { post: 9, horse: "The Puma", odds: "10-1", trainer: "Bob Baffert", jockey: "Flavien Prat" },
  { post: 10, horse: "Wonder Dean", odds: "25-1", trainer: "Shug McGaughey", jockey: "Jose Ortiz" },
  { post: 11, horse: "Incredibolt", odds: "25-1", trainer: "Brendan Walsh", jockey: "Brian Hernandez Jr." },
  { post: 12, horse: "Chief Wallabee", odds: "10-1", trainer: "Kenny McPeek", jockey: "Julien Leparoux" },
  { post: 13, horse: "Silent Tactic", odds: "30-1", trainer: "Mark Casse", jockey: "Cristian Torres", canadian: true },
  { post: 14, horse: "Potenete", odds: "15-1", trainer: "Bill Mott", jockey: "Junior Alvarado" },
  { post: 15, horse: "Emerging Market", odds: "20-1", trainer: "Chad Brown", jockey: "Jose Lezcano" },
  { post: 16, horse: "Pavlovian", odds: "40-1", trainer: "Doug O'Neill", jockey: "Mario Gutierrez" },
  { post: 17, horse: "Six Speed", odds: "40-1", trainer: "Dallas Stewart", jockey: "Corey Lanerie" },
  { post: 18, horse: "Further Ado", odds: "5-1", trainer: "Brad Cox", jockey: "Tyler Gaffalione", favorite: true },
  { post: 19, horse: "Golden Tempo", odds: "30-1", trainer: "Michael McCarthy", jockey: "Ramon Vazquez" },
  { post: 20, horse: "Fulleffort", odds: "20-1", trainer: "Tim Yakteen", jockey: "Juan Hernandez" },
]

export function EntriesTable() {
  const [sortBy, setSortBy] = useState<"post" | "odds">("post")
  const [highlightCanadian, setHighlightCanadian] = useState(false)

  const sortedEntries = [...entries].sort((a, b) => {
    if (sortBy === "odds") {
      const parseOdds = (o: string) => {
        const [num, den] = o.split("-").map(Number)
        return num / den
      }
      return parseOdds(a.odds) - parseOdds(b.odds)
    }
    return a.post - b.post
  })

  return (
    <section id="entries" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Post Positions &amp; Entries
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            20 elite thoroughbreds will compete for the coveted garland of roses
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-1">
            <button
              onClick={() => setSortBy("post")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                sortBy === "post"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              By Post Position
            </button>
            <button
              onClick={() => setSortBy("odds")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                sortBy === "odds"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              By Odds (Favorites)
            </button>
          </div>
          <button
            onClick={() => setHighlightCanadian(!highlightCanadian)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
              highlightCanadian
                ? "bg-accent text-accent-foreground border-accent"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <MapleLeafIcon className="w-4 h-4" />
            Show Canadian Connection
          </button>
        </div>

        {/* Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedEntries.map((entry) => (
            <div
              key={entry.post}
              className={`relative bg-card border rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                entry.canadian && highlightCanadian
                  ? "border-accent ring-2 ring-accent/50"
                  : entry.favorite
                  ? "border-secondary"
                  : "border-border"
              }`}
            >
              {/* Post position badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {entry.post}
              </div>

              {/* Canadian badge */}
              {entry.canadian && (
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                  <MapleLeafIcon className="w-4 h-4" />
                </div>
              )}

              {/* Favorite badge */}
              {entry.favorite && !entry.canadian && (
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-bold">
                  TOP 3
                </div>
              )}

              <div className="mt-2">
                <h3 className="text-lg font-bold text-foreground mb-1">{entry.horse}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{entry.odds}</div>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground">
                    <span className="text-foreground/70">T:</span> {entry.trainer}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground/70">J:</span> {entry.jockey}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primary" />
            <span className="text-muted-foreground">Post Position</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-bold">
              TOP 3
            </div>
            <span className="text-muted-foreground">Morning Line Favorites</span>
          </div>
          <div className="flex items-center gap-2">
            <MapleLeafIcon className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">Canadian Connection</span>
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
