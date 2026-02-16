"use client"

type Language = "en" | "es"

type HeaderProps = {
  language: Language
  onLanguageChange: (language: Language) => void
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const labels = {
    en: {
      services: "Services",
      gallery: "Gallery",
      contact: "Contact me",
      subtitle: "Your sanctuary for beauty and wellness",
      cta: "Contact me",
    },
    es: {
      services: "Servicios",
      gallery: "Galería",
      contact: "Contáctame",
      subtitle: "Tu santuario de belleza y bienestar",
      cta: "Contáctame",
    },
  }

  const t = labels[language]

  return (
    <>
      {/* Navigation - Fixed at top */}
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-md" style={{ backgroundColor: "#EED9CE" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src="/logo.png"
              alt="The Goddess Of Nails logo"
              className="h-12 md:h-14 w-auto"
            />
          </a>
          <ul className="flex gap-12 text-sm tracking-wide">
            <li><a href="#services" className="text-gray-700 hover:text-amber-800 transition">{t.services}</a></li>
            <li><a href="#gallery" className="text-gray-700 hover:text-amber-800 transition">{t.gallery}</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-amber-800 transition">{t.contact}</a></li>
          </ul>
        </div>
      </nav>

      <div className="fixed right-4 top-[110px] z-40 flex items-center gap-2 rounded-full bg-white/75 backdrop-blur px-2 py-1 shadow-md">
        <button
          type="button"
          onClick={() => onLanguageChange("es")}
          className={`h-7 w-7 rounded-full text-base leading-none transition flex items-center justify-center ${
            language === "es" ? "bg-amber-800 text-white" : "text-gray-700 hover:bg-white"
          }`}
          aria-label="Cambiar a español"
          aria-pressed={language === "es"}
        >
          <img
            src="/flag-es.svg"
            alt="Spanish"
            className="h-4 w-4"
          />
        </button>
        <button
          type="button"
          onClick={() => onLanguageChange("en")}
          className={`h-7 w-7 rounded-full text-base leading-none transition flex items-center justify-center ${
            language === "en" ? "bg-amber-800 text-white" : "text-gray-700 hover:bg-white"
          }`}
          aria-label="Switch to English"
          aria-pressed={language === "en"}
        >
          <img
            src="/flag-uk.svg"
            alt="English"
            className="h-4 w-4"
          />
        </button>
      </div>

      {/* Hero Header with Background Image */}
      <header 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=800&fit=crop')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-6" style={{ fontFamily: "var(--font-castoro)" }}>The Goddess Of Nails</h1>
          <p className="text-lg md:text-xl font-light tracking-wide">{t.subtitle}</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center mt-6 px-6 py-3 text-sm md:text-base tracking-wide text-white border border-white/70 rounded-full hover:bg-white/15 hover:border-white transition"
          >
            {t.cta}
          </a>
        </div>
      </header>
    </>
  )
}
