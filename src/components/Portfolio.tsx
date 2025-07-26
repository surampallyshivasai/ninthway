import { motion } from "framer-motion"
import { Marquee } from "@/components/ui/marquee"
import clientLogos1 from "@/assets/as1.jpg"
import clientLogos2 from "@/assets/as2.jpg"
import clientLogos3 from "@/assets/as3.jpg"
import clientLogos4 from "@/assets/as4.jpg"
import clientLogos5 from "@/assets/as5.jpg"
import clientLogos6 from "@/assets/as6.jpg"
import clientLogos7 from "@/assets/as7.jpg"
import clientLogos8 from "@/assets/as8.jpg"
import { Crown } from "lucide-react"

const clientLogos = [
  clientLogos1,
  clientLogos2,
  clientLogos3,
  clientLogos4,
  clientLogos5,
  clientLogos6,
  clientLogos7,
  clientLogos8,
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Crown className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Clients</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Leaders
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We've had the privilege of crafting legacies for industry leaders and innovative startups
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Marquee pauseOnHover speed={40}>
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 min-w-[120px]"
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-16 w-auto opacity-100 hover:opacity-100 transition duration-300 ease-in-out filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  )
}
