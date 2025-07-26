import { HeroGeometric } from "@/components/ui/shape-landing-hero"

export function Hero() {
  return (
    <section id="hero">
      <HeroGeometric 
        badge="Branding Agency"
        title1="NinthWay"
        title2="Branders"
        description="We don’t design for today — we build for the future.
Let’s create a brand that reigns, not just exists."
      />
    </section>
  )
}