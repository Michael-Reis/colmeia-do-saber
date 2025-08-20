"use client"

import { HeroCarousel } from "@/components/hero-carousel"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MarqueeDemo } from "@/components/comments"
import { HeroParallaxDemo } from "@/components/paralax"
import { TypewriterEffectDemo } from "@/components/school"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"
import { FooterSocial } from "@/components/footer-social"
import { FooterLinks } from "@/components/footer-links"
import { useCallback } from "react"

export default function HomePage() {
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
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-16">
        <HeroCarousel />
      </div>

      {/* About Section */}
      <section id="sobre" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <TypewriterEffectDemo />
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-4">
              Um ambiente acolhedor e estimulante onde cada criança é única e especial, desenvolvendo suas habilidades
              através do brincar e aprender.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/missao/missao.jpg",
                title: "Nossa Missão",
                description:
                  "Proporcionar educação infantil de qualidade, respeitando o desenvolvimento natural de cada criança em um ambiente seguro e amoroso.",
                color: "text-primary",
              },
              {
                image: "/missao/visao.jpg",
                title: "Nossa Visão",
                description:
                  "Ser referência em educação infantil, formando crianças felizes, confiantes e preparadas para os próximos desafios.",
                color: "text-secondary",
              },
              {
                image: "/missao/valores.jpg",
                title: "Nossos Valores",
                description: "Amor, respeito, criatividade, diversão e desenvolvimento integral de cada criança.",
                color: "text-accent",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-90"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3
                    className={`font-heading text-2xl font-bold mb-3 transform transition-transform duration-300 group-hover:translate-y-[-4px] ${item.color}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90 transform transition-all duration-300 group-hover:opacity-100">
                    {item.description}
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-4 transform transition-all duration-300 group-hover:w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeDemo />
      {/* Differentials Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedGradientText className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Nossos Diferenciais
            </AnimatedGradientText>

            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-gray-800"></h2>
            <p className="text-lg text-gray-600 ">
              O que nos torna especiais no cuidado e educação das crianças
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/diferenciais/turma.jpg",
                title: "Turmas Reduzidas",
                desc: "Máximo 16 alunos por sala",
                color: "text-primary",
              },
              {
                image: "/diferenciais/professores.jpg",
                title: "Professores Capacitados",
                desc: "Equipe especializada em educação infantil",
                color: "text-secondary",
              },
              {
                image: "/diferenciais/cuidados.jpg",
                title: "Cuidado Especial",
                desc: "Atenção individualizada para cada criança",
                color: "text-accent",
              },
              {
                image: "/diferenciais/ingles.jpg",
                title: "Inglês Desde Cedo",
                desc: "Aulas de inglês de forma lúdica",
                color: "text-chart-1",
              },
              {
                image: "/diferenciais/bale.png",
                title: "Ballet",
                desc: "Desenvolvimento da coordenação e expressão",
                color: "text-chart-2",
              },
              {
                image: "/diferenciais/judo.png",
                title: "Judô",
                desc: "Disciplina e respeito através das artes marciais",
                color: "text-chart-3",
              },
              {
                image: "/diferenciais/artes.png",
                title: "Arte e criatividade",
                desc: "Estimulo à expressão artística",
                color: "text-chart-4",
              },
              {
                image: "/diferenciais/cozinha.jpg",
                title: "Culinária",
                desc: "Espaço para aulas de culinária",
                color: "text-chart-5",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3
                    className={`font-heading text-lg font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px] ${item.color}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed opacity-90 transform transition-all duration-300 group-hover:opacity-100">
                    {item.desc}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-3 transform transition-all duration-300 group-hover:w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HeroParallaxDemo />

      {/* Updated Courses Section */}
      <section id="cursos" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedGradientText className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Nossos Cursos
            </AnimatedGradientText>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
              Educação infantil especializada para cada fase do desenvolvimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                image: "/planos/bercario.jpg",
                title: "Berçário",
                subtitle: "4 meses a 2 anos",
                features: [
                  "Cuidados especializados para bebês",
                  "Estímulos sensoriais e motores",
                  "Rotina de alimentação e sono",
                  "Ambiente seguro e acolhedor",
                ],
                color: "text-primary",
              },
              {
                image: "/planos/educacao.jpg",
                title: "Educação Infantil",
                subtitle: "2 a 5 anos",
                features: [
                  "Desenvolvimento através do brincar",
                  "Preparação para alfabetização",
                  "Inglês de forma lúdica",
                  "Atividades artísticas e motoras",
                ],
                color: "text-secondary",
              },
              {
                image: "/planos/recreacao.jpg",
                title: "Recreação",
                subtitle: "2 a 5 anos",
                features: [
                  "Atividades lúdicas e esportivas",
                  "Brincadeiras dirigidas e livres",
                  "Integração social e trabalho em equipe",
                  "Momentos de contação de histórias",
                ],
                color: "text-accent",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-95"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 text-white">
                  <h3
                    className={`font-heading text-xl md:text-1xl lg:text-1xl font-bold transform transition-transform duration-300 group-hover:translate-y-[-4px] ${course.color}`}
                  >
                    {course.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg font-medium mb-4 opacity-90">{course.subtitle}</p>
                  <ul className="space-y-2 text-xs md:text-sm lg:text-base opacity-90 transform transition-all duration-300 group-hover:opacity-100">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-6 transform transition-all duration-300 group-hover:w-32"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Updated Infrastructure Section */}
      < section id="infraestrutura" className="py-16 px-4" >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedGradientText className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              Nossa Infraestrutura
            </AnimatedGradientText>

            <p className="text-lg text-muted-foreground">
              Espaços seguros e estimulantes para o desenvolvimento das crianças
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[

              {
                image: "/espacos/parque.jpeg",
                title: "Parque",
                description: "Área externa segura com brinquedos e equipamentos para diversão e desenvolvimento motor",
              },
              {
                image: "/espacos/sala-01.jpeg",
                title: "Salas de Aula",
                description: "Ambientes acolhedores e coloridos, equipados especialmente para o aprendizado infantil",
              },

              {
                image: "/espacos/cinema-02.jpeg",
                title: "Sala de Televisão",
                description: "Espaço confortável para atividades audiovisuais educativas e momentos de relaxamento",
              },
              {
                image: "/espacos/jardim.jpeg",
                title: "Sala de aula",
                description: "Sala de aula ampla e iluminada, com recursos pedagógicos modernos e confortáveis",
              },
              {
                image: "/espacos/playground-02.jpeg",
                title: "Playground Coberto",
                description: "Área coberta com brinquedos seguros para atividades físicas em qualquer clima",
              },

              {
                image: "/espacos/refeitorio-01.jpeg",
                title: "Refeitório",
                description:
                  "Local aconchegante para refeições nutritivas e desenvolvimento de hábitos alimentares saudáveis",
              },

            ].map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-heading text-2xl font-bold mb-3 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90 transform transition-all duration-300 group-hover:opacity-100">
                    {item.description}
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-4 transform transition-all duration-300 group-hover:w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Updated FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5" >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">

            <AnimatedGradientText className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Perguntas Frequentes
            </AnimatedGradientText>

            <p className="text-lg text-muted-foreground mt-1">Tire suas dúvidas sobre nossa pré-escola</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Qual o horário de funcionamento da pré-escola?",
                answer:
                  "Funcionamos das 7h às 19h, com opções de meio período (manhã ou tarde) e período integral para atender às necessidades das famílias.",
              },
              {
                question: "Como funciona o processo de matrícula?",
                answer:
                  "As matrículas estão sempre abertas! Basta agendar uma visita, conhecer nossa proposta pedagógica e apresentar a documentação necessária para garantir a vaga da criança.",
              },
              {
                question: "Quantas crianças há por turma?",
                answer:
                  "Trabalhamos com turmas reduzidas de no máximo 16 alunos por sala, garantindo atenção individualizada para cada criança.",
              },
              {
                question: "A partir de que idade vocês recebem as crianças?",
                answer: "Recebemos bebês a partir de 4 meses no berçário e crianças até 5 anos na educação infantil.",
              },
              {
                question: "Como é a alimentação na escola?",
                answer:
                  "Oferecemos alimentação balanceada preparada por nutricionista, respeitando restrições alimentares e necessidades especiais de cada criança.",
              },
              {
                question: "Vocês oferecem atividades extracurriculares?",
                answer:
                  "Sim! Oferecemos ballet, judô, inglês e atividades artísticas como parte da nossa proposta pedagógica, sem custo adicional.",
              },
              {
                question: "Como é feita a comunicação com os pais?",
                answer:
                  "Mantemos comunicação constante através de agenda diária, reuniões periódicas, WhatsApp e relatórios de desenvolvimento da criança.",
              },
              {
                question: "Aceita auxilio creche?",
                answer:
                  "Sim, aceitamos auxílio creche e outros benefícios para facilitar o acesso à educação infantil"
              },
              {
                question: "Como posso agendar uma visita?",
                answer:
                  "Basta entrar em contato conosco pelo telefone ou WhatsApp para agendar uma visita guiada e conhecer nossas instalações.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-1s   transition-colors"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="font-heading text-lg text-primary text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section >

      {/* Contact Section */}
      {/* <section id="contato" className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground">Estamos prontos para receber sua família</p>
          </div>

          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-bold mb-8 text-foreground">Informações de Contato</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="font-medium text-lg text-foreground mb-2">Endereço</p>
                  <p className="text-muted-foreground">
                    Rua das Crianças, 456 - Jardim Feliz
                    <br />
                    São Paulo - SP, 01234-567
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-lg text-foreground mb-2">Telefone</p>
                  <p className="text-muted-foreground">(11) 3456-7890</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-lg text-foreground mb-2">E-mail</p>
                  <p className="text-muted-foreground">contato@colmeiadosaber.com.br</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-lg text-foreground mb-2">Horário de Atendimento</p>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 7h às 18h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="endereco" className="py-0 px-4 mt-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">

            <AnimatedGradientText className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Nosso endereço
            </AnimatedGradientText>
            <p className="text-xl md:text-1xl text-muted-foreground mt-2">
              Av. Padre Vicente Melillo, 1497 - Jardim D'abril, Osasco - SP, 06036-018
            </p>
            <p className="text-base md:text-lg text-gray-500 mt-1 max-w-2xl mx-auto">
              Venha nos visitar! Nossa escola está localizada em um bairro tranquilo e de fácil acesso, com infraestrutura completa para receber sua família com carinho.
            </p>
          </div>
        </div>


      </section>


      <div className="w-full">
        <iframe
          title="Google Maps - Colmeia do Saber"
          src="https://www.google.com/maps?q=Avenida+Padre+Vicente+Melillo,+1497,+Umuarama,+Osasco,+SP,+06036-018&output=embed"
          className="w-full h-[400px] md:h-[400px] lg:h-[300px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>



      {/* Footer */}

      <footer className="bg-muted px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8 border-t border-gray-300 pt-8">
            <div>
              <div className="flex items-center gap-2 mb-4">

                <AnimatedGradientText className="font-heading font-bold text-xl" colorFrom="#F0DC00" colorTo="#FB26FF" >
                  Colmeia do Saber
                </AnimatedGradientText>

              </div>
              <p className="text-muted-foreground text-sm">Cuidando e educando com amor desde os primeiros passos.</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-foreground">Links</h4>
              <FooterLinks />
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-foreground">Informações</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a onClick={e => handleFooterSmoothScroll(e, "#faq")} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Matrículas
                  </a>
                </li>
                <li>
                  <a onClick={e => handleFooterSmoothScroll(e, "#faq")} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Calendário
                  </a>
                </li>
                <li>
                  <a onClick={e => handleFooterSmoothScroll(e, "#faq")} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Documentos
                  </a>
                </li>

              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4 text-foreground">Redes Sociais</h4>
              <FooterSocial />
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Pré-Escola Colmeia do Saber. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div >
  )
}
