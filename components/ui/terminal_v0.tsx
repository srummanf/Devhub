"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export default function Terminal() {
  const [text, setText] = useState("")
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  useEffect(() => {
    const fullText =
      '> fetch resources --category "UI Kits"\n> Loading...\n> 200 OK'
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left - rect.width / 2)
    y.set(event.clientY - rect.top - rect.height / 2)
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className="flex justify-center items-center"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-2xl"
        onMouseMove={handleMouse}
        onMouseLeave={() => {
          x.set(0)
          y.set(0)
        }}
      >
        <motion.div
          className="bg-black/80 rounded-lg p-4 shadow-2xl border border-primary/20 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm text-primary/90 whitespace-pre-wrap">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {text}
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block w-2 h-4 bg-primary ml-1"
            ></motion.span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

