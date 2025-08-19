"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides: Array<{
	imageDesktop: string
	imageMobile: string
	title?: string
	subtitle?: string
	cta?: string
	linkDesktop?: string
	linkMobile?: string
}> = [
	{
		imageDesktop: "/banner/banner-06.png",
		imageMobile: "/banner/banner-mobile-1.png",
		linkDesktop: "https://colmeia.com.br/desktop",
		linkMobile: "https://colmeia.com.br/mobile",
	},
	{
		imageDesktop: "/banner/banner-02.png",
		imageMobile: "/banner/banner-mobile-2.png",
		linkDesktop: "https://colmeia.com.br/desktop2",
		linkMobile: "https://colmeia.com.br/mobile2",
	},
	{
		imageDesktop: "/banner/banner-05.png",
		imageMobile: "/banner/banner-mobile-3.png",
		linkDesktop: "https://colmeia.com.br/desktop3",
		linkMobile: "https://colmeia.com.br/mobile3",
	},
]

export function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 5000)
		return () => clearInterval(timer)
	}, [])

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768)
		checkMobile()
		window.addEventListener("resize", checkMobile)
		return () => window.removeEventListener("resize", checkMobile)
	}, [])

	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
	const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

	return (
		<div className="relative h-[600px] overflow-hidden">
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
				>
					<img
						src={isMobile ? slide.imageMobile : slide.imageDesktop}
						alt={slide.title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0" />
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center text-white max-w-4xl px-4">
							{slide.title && (
								<h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
									{slide.title}
								</h1>
							)}
							{slide.subtitle && (
								<p className="text-xl md:text-2xl mb-8 opacity-90">
									{slide.subtitle}
								</p>
							)}
							{slide.cta && (
								<a
									href={isMobile ? slide.linkMobile : slide.linkDesktop}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button
										size="lg"
										className="bg-primary hover:bg-primary/90 text-primary-foreground"
									>
										{slide.cta}
									</Button>
								</a>
							)}
						</div>
					</div>
				</div>
			))}

			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>

			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentSlide(index)}
						className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"
							}`}
					/>
				))}
			</div>
		</div>
	)
}
