"use client"
import { useCallback } from "react"

export function FooterLinks() {
  const handleFooterSmoothScroll = useCallback((event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      event.preventDefault()
      const targetElement = document.querySelector(href)
      if (targetElement) {
        const header = document.querySelector("nav")
        const headerHeight = header ? header.getBoundingClientRect().height : 0
        const elementTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight
        window.scrollTo({ top: elementTop, behavior: "smooth" })
      }
    }
  }, [])

  return (
    <ul className="space-y-2">
      <li>
        <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => handleFooterSmoothScroll(e, "#sobre")}>Sobre</a>
      </li>
      <li>
        <a href="#cursos" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => handleFooterSmoothScroll(e, "#cursos")}>Cursos</a>
      </li>
      <li>
        <a href="#infraestrutura" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => handleFooterSmoothScroll(e, "#infraestrutura")}>Infraestrutura</a>
      </li>
      <li>
        <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors" onClick={e => handleFooterSmoothScroll(e, "#faq")}>Perguntas Frequentes</a>
      </li>
      <li>
        <a href="https://wa.me/551145655210" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Contato</a>
      </li>
    </ul>
  )
}
