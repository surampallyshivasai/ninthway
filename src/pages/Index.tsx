import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Portfolio } from "@/components/Portfolio"
import { Testimonials } from "@/components/Testimonials"
import { Pricing } from "@/components/Pricing"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <div id="pricing">
  <Pricing />
</div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
