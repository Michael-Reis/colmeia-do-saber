"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Mãe da Sofia - 4 anos",
    content:
      "Minha filha ama ir à escola todos os dias! Os professores são carinhosos e a Sofia desenvolveu muito desde que começou aqui.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Pai do Pedro - 3 anos",
    content: "Ambiente acolhedor e seguro. O Pedro se adaptou rapidamente e já fala algumas palavras em inglês!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Mãe da Laura - 5 anos",
    content:
      "Excelente preparação para o ensino fundamental. A Laura está super preparada e confiante para a próxima etapa.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Pai do Miguel - 2 anos",
    content: "Berçário maravilhoso! Cuidado especial com os pequenos e comunicação constante com os pais.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Mãe da Júlia - 4 anos",
    content: "Turmas pequenas fazem toda a diferença! Minha filha recebe atenção individualizada e está florescendo.",
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {getVisibleTestimonials().map((testimonial, index) => (
        <Card
          key={`${testimonial.name}-${currentIndex}-${index}`}
          className="hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
        >
          <CardHeader>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <CardTitle className="font-heading text-lg text-primary">{testimonial.name}</CardTitle>
            <CardDescription className="text-secondary">{testimonial.role}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
