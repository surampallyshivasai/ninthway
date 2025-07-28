import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Portfolio } from "@/components/Portfolio"
import { Testimonials } from "@/components/Testimonials"
import { Pricing } from "@/components/Pricing"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { SEO } from "@/components/SEO"

const Index = () => {
  return (
    <>
      <SEO 
        title="NinthWay Branders - Premium Branding Agency"
        description="Transform your brand with NinthWay Branders. Premium branding agency specializing in logo design, brand identity, and strategic storytelling. Create a royal legacy for your business."
        keywords="branding agency, logo design, brand identity, brand strategy, marketing agency, startup branding, business branding, digital branding, creative agency"
        url="https://ninthway.netlify.app"
      />
      
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
    </>
  );
};

export default Index;
