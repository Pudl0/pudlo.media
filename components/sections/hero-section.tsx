"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const useTypingEffect = (
  words: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  pauseDuration: number = 1000
) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const type = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else {
        timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return text;
};

export default function HeroSection() {
  const typedText = useTypingEffect(
    [
      "Streaming",
      "Moderation",
      "Individuelle Softwarelösungen",
      "IT-Infrastruktur",
    ],
    100,
    50,
    1000
  );

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center h-full animate-fade-in-up text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-blue-400">
            Willkommen bei
          </h1>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl font-bold mb-6 sm:mb-8 text-white leading-none">
            pudlo.media
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 text-gray-300">
            Dein Experte für
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 font-semibold min-h-[3em]">
            {typedText}
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 animate-bounce" />
      </div>
    </section>
  );
}
