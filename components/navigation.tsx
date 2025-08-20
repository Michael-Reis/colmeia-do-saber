"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AnimatedShinyText } from "./magicui/animated-shiny-text"
import { AnimatedGradientText } from "./magicui/animated-gradient-text"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#cursos", label: "Cursos" },
    { href: "#infraestrutura", label: "Infraestrutura" },
    { href: "https://api.whatsapp.com/send/?phone=551145655210", label: "Contato" },
  ]

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-23">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="logo.png"
              alt="logo"
              className="h-20 md:h-20 lg:h-23 w-auto"
            // style={{ maxHeight: "3rem" }}
            />
            {/* <AnimatedGradientText className="font-heading font-bold text-xl" colorFrom="#F0DC00" colorTo="#FB26FF" >
              Colmeia do Saber
            </AnimatedGradientText> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (

              item.label === "Contato" ? (
                <a
                  key={item.href}
                  // href={item.href}
                  className="text-gray-600 transition-colors font-light cursor-pointer"
                  onClick={() => window.open(item.href, "_blank")}
                >
                  {item.label}
                </a>
              ) : (

                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 transition-colors font-light"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              )
            ))}
            <Button
              className="bg-yellow-300 text-black hover:bg-yellow-300 sm:bg-yellow-300 sm:text-black cursor-pointer"
              onClick={() =>
                window.location.href =
                "https://api.whatsapp.com/send/?phone=551145655210&text&type=phone_number&app_absent=0"
              }
            >
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
                item.label === "Contato" ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => window.open(item.href, "_blank")}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={(e) => {
                      handleSmoothScroll(e, item.href)
                      setIsOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <Button className="bg-yellow-300 text-black hover:bg-yellow-300 sm:bg-yellow-300 sm:text-black cursor-pointer mt-2">Matricule-se</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
