"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Welcome from "@/components/Welcome"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import Contact from "@/components/Contact"

type Language = "en" | "es"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <main className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      <Welcome language={language} />
      <Services language={language} />
      <Gallery language={language} />
      <Contact language={language} />
    </main>
  )
}
