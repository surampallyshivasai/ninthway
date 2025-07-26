import { motion } from "framer-motion"
import { GlowCard } from "@/components/ui/spotlight-card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Voleti Karthik",
    role: "Co-Founder, Flashoot",
    content: "Working with NinthWay was a game-changer. They instantly got our vision and crafted a brand identity that captures Flashoot’s fast, bold, and innovative spirit.",
    rating: 5,
    glowColor: "blue" as const
  },
  {
    name: "Revanth Reddy",
    role: "Founder, Go Adventure",
    content: "NinthWay didn’t just redesign our brand — they reshaped our digital journey. From sharper leads to stronger engagement, their marketing magic helped us reach more travelers than ever before.",
    rating: 5,
    glowColor: "purple" as const
  },
  {
    name: "Praveenkumar Gummadala",
    role: "Director, Akan Brewing",
    content: "NinthWay turned our vibe into a brand. Their creative strategy brought life to our digital presence — now our weekends are packed, both online and off.",
    rating: 5,
    glowColor: "orange" as const
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Hear from the leaders who trusted us to craft their legacies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <GlowCard 
                glowColor={testimonial.glowColor}
                customSize
                className="w-full h-full min-h-[300px] p-6 flex flex-col"
              >
                <div className="flex flex-col h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground/80 mb-6 leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-foreground/60">{testimonial.role}</div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}