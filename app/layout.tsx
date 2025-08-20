import type React from "react"
import ScrollToTopButton from "../components/scroll-to-top"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Colmeia do saber - Pré-Escola e Berçário",
  description:
    "Pré-escola e berçário com ambiente acolhedor e estimulante. Educação infantil de qualidade com turmas reduzidas e professores capacitados.",
  generator: "v0.app",
  openGraph: {
    title: "Colmeia do saber - Pré-Escola e Berçário",
    description: "Pré-escola e berçário com ambiente acolhedor e estimulante. Educação infantil de qualidade com turmas reduzidas e professores capacitados.",
    url: "https://colmeiadosaber.com.br/",
    siteName: "Colmeia do Saber",
    images: [
      {
        url: "https://colmeiadosaber.com.br/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Colmeia do Saber",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colmeia do saber - Pré-Escola e Berçário",
    description: "Pré-escola e berçário com ambiente acolhedor e estimulante. Educação infantil de qualidade com turmas reduzidas e professores capacitados.",
    images: ["https://colmeiadosaber.com.br/logo.png"],
    site: "@colmeiadosaber",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${roboto.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
