import { Home, User, Briefcase, Crown, MessageSquare, Phone } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Portfolio', url: '#portfolio', icon: Crown },
    { name: 'Testimonials', url: '#testimonials', icon: MessageSquare },
    { name: 'Contact', url: '#contact', icon: Phone }
  ]

  return <NavBar items={navItems} />
}