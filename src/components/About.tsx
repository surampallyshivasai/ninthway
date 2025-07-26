import { motion } from "framer-motion"
import { Crown, Zap, Target, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Crown className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">About Ninthway</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting Legacies
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              At Ninthway Branding Agency, we don't just build brands — we craft legacies. Born out of a passion for bold aesthetics and strategic storytelling, we are a premium design powerhouse helping startups, founders, and businesses turn their visions into memorable, futuristic brands.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We believe branding is more than just a logo or color palette. It's the soul of your business. It's how you communicate, connect, and conquer your market. That's why every element we create — from your identity design to digital presence — is driven by Swiss-style precision, visual richness, and business strategy.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary">Premium Design</h3>
              <p className="text-sm text-foreground/60 mt-2">Swiss-style precision meets bold aesthetics</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Zap className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-secondary">Fast Delivery</h3>
              <p className="text-sm text-foreground/60 mt-2">Quick turnaround without compromising quality</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Target className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-accent">Business Focused</h3>
              <p className="text-sm text-foreground/60 mt-2">Strategy-driven design that drives results</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Crown className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary">Future Ready</h3>
              <p className="text-sm text-foreground/60 mt-2">Cutting-edge designs for tomorrow's brands</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}