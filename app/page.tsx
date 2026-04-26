import { HeroSection } from "@/components/hero-section"
import { EntriesTable } from "@/components/entries-table"
import { CanadianConnection } from "@/components/canadian-connection"
import { EventDetails } from "@/components/event-details"
import { Footer } from "@/components/footer"

export default function KentuckyDerbyPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventDetails />
      <EntriesTable />
      <CanadianConnection />
      <Footer />
    </main>
  )
}
