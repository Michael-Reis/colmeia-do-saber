import type React from "react"
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
  title: "Pequenos Sonhadores - Pré-Escola e Berçário",
  description:
    "Pré-escola e berçário com ambiente acolhedor e estimulante. Educação infantil de qualidade com turmas reduzidas e professores capacitados.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${roboto.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
