"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [visibleLetters, setVisibleLetters] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleLetters((prev) => {
          if (prev >= text.length) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 100)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay])

  return (
    <span className={className}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            index < visibleLetters ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          }`}
          style={{
            transitionDelay: `${index * 50}ms`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  )
}
