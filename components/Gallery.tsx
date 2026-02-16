"use client"

import { useState, useEffect, useRef } from "react"

type Language = "en" | "es"

const galleryImages = [
  "https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612887390768-fb02affea7a6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1630843599725-32ead7671867?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610992015836-7c249d75782d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1587729927031-830c32f520da?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1601244668565-afba8cbd2b51?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1688583417770-ff6cc18071dc?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584566006505-8923576e70d4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

type GalleryProps = {
  language: Language
}

export default function Gallery({ language }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const touchStartRef = useRef(0)
  const autoPlayTimerRef = useRef<NodeJS.Timeout>()

  const labels = {
    en: {
      title: "Gallery",
      prev: "Previous",
      next: "Next",
      goTo: "Go to image",
    },
    es: {
      title: "Galería",
      prev: "Anterior",
      next: "Siguiente",
      goTo: "Ir a la imagen",
    },
  }

  const t = labels[language]

  // Responsive items per view
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth
      if (width < 768) setItemsPerView(3)
      else if (width < 1024) setItemsPerView(4)
      else if (width < 1536) setItemsPerView(5)
      else setItemsPerView(6)
    }

    updateLayout()
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current)
      return
    }

    autoPlayTimerRef.current = setInterval(() => {
      handleNext()
    }, 4500)

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current)
    }
  }, [isAutoPlay])

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxStartIndex = Math.max(0, galleryImages.length - itemsPerView)
      const nextIndex = prev + 1
      return nextIndex > maxStartIndex ? 0 : nextIndex
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxStartIndex = Math.max(0, galleryImages.length - itemsPerView)
      const nextIndex = prev - 1
      return nextIndex < 0 ? maxStartIndex : nextIndex
    })
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX
    setIsAutoPlay(false)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const distance = touchStartRef.current - touchEnd
    const threshold = 50

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }

    setTimeout(() => setIsAutoPlay(true), 8000)
  }

  return (
    <section id="gallery" className="py-0 px-0" style={{ backgroundColor: "#DBB4A0" }}>
      <div className="w-full py-8 px-4 mb-16" style={{ backgroundColor: "#EED9CE" }}>
        <h2 className="text-4xl font-light text-center tracking-wide text-gray-800">{t.title}</h2>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="relative group">
          {/* Gallery Carousel Container */}
          <div
            className="relative w-full overflow-hidden rounded-lg"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* Images Wrapper with smooth transform */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-1.5 md:px-3 lg:px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <img
                    src={image}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-64 md:h-56 lg:h-72 xl:h-80 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer select-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 hover:text-amber-700 transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100 shadow-lg hover:shadow-xl"
            aria-label={t.prev}
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 hover:text-amber-700 transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100 shadow-lg hover:shadow-xl"
            aria-label={t.next}
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Smooth Dot Indicators */}
        <div className="flex justify-center gap-2 mt-10 md:mt-14">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlay(false)
                setTimeout(() => setIsAutoPlay(true), 8000)
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "bg-amber-700 w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              aria-label={`${t.goTo} ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
