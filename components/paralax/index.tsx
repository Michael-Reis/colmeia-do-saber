"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
    return <HeroParallax products={products} />;
}

export const products = Array.from({ length: 15 }, (_, i) => ({
    key: `crianca-${i + 1}`,
    title: `Crianças ${i + 1}`,
    link: "#",
    thumbnail: `/criancas/crianca-${String(i + 1).padStart(2, "0")}.jpeg`,
}));
