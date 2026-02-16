import type { Metadata } from "next"
import { Adamina, Castoro_Titling } from "next/font/google"
import "./globals.css"

const adamina = Adamina({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-adamina"
})

const castoro = Castoro_Titling({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-castoro"
})

export const metadata: Metadata = {
  title: "The Goddess Of Nails",
  description: "Professional nail care",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${adamina.variable} ${castoro.variable}`}>{children}</body>
    </html>
  )
}
