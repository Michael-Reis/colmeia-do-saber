"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
    const words = [
        {
            text: "Sobre",
        },
        {
            text: "Nossa",
        },
        {
            text: "Escola",
            className: "text-yellow-300",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center ">
            <TypewriterEffect words={words} />
        </div>
    );
}
