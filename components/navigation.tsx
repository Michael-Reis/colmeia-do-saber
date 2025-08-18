"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AnimatedShinyText } from "./magicui/animated-shiny-text"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#cursos", label: "Cursos" },
    { href: "#infraestrutura", label: "Infraestrutura" },
    { href: "#atividades", label: "Atividades" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl text-yellow-400">Colmeia do Saber</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 transition-colors font-light"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-yellow-300 text-black">
              <AnimatedShinyText>Matricule-se</AnimatedShinyText>

            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2">Matricule-se</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
