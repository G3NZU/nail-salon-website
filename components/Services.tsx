"use client"

import { useEffect, useState } from "react"

type Language = "en" | "es"

type ServiceItem = {
  title: string
  description: string
  image: string
  details: { name: string; price: string }[]
  expandedDescription?: string
}

const servicesByLanguage: Record<Language, ServiceItem[]> = {
  en: [
    {
      title: "Manicure",
      description: "More than just nails—this is self-care. Sit back and relax while we shape, buff, and beautify your hands for a flawless, feel-good finish.",
      expandedDescription: "Russian manicure • Cleansing • Hydration • Massage • Semi-permanent gel or premium polish",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop",
      details: [
        { name: "With polish", price: "60 EUR" },
        { name: "Without polish", price: "50 EUR" },
      ],
    },
    {
      title: "Pedicure",
      description: "Because polished toes are always in season. My pedicures deliver clean lines, beautiful color, and that just-pampered glow.",
      expandedDescription: "Hygiene • Callus removal • Cuticles • Hydration • Massage • Semi-permanent or classic polish",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.6",
      details: [
        { name: "With polish", price: "65 EUR" },
        { name: "Without polish", price: "55 EUR" },
      ],
    },
    {
      title: "Product Removal",
      description: "Remove gel, semi-permanent polish, or extensions from other salons with care and precision.",
      expandedDescription: "Gel • Semi-permanent polish • Extensions (only work done at other salons)",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=400&fit=crop",
      details: [{ name: "Removal", price: "20 EUR" }],
    },
    {
      title: "Extras",
      description: "Small details to personalize your service.",
      image: "https://images.unsplash.com/photo-1587729927031-830c32f520da?w=500&h=400&fit=crop",
      details: [
        { name: "Reconstruction or extension (per nail)", price: "5 EUR" },
        { name: "Cat eye", price: "+10 EUR" },
        { name: "French", price: "+10 EUR" },
        { name: "Decoration", price: "By design" },
      ],
    },
    {
      title: "Extensions",
      description: "Choose the length that best suits your style.",
      image: "https://images.unsplash.com/photo-1601244668565-afba8cbd2b51?w=500&h=400&fit=crop",
      details: [
        { name: "Short", price: "80 EUR" },
        { name: "Medium", price: "90 EUR" },
        { name: "Long", price: "100 EUR" },
      ],
    },
  ],
  es: [
    {
      title: "Manicura",
      description: "Más que unas uñas, es autocuidado. Relájate mientras damos forma, pulimos y embellecemos tus manos para un acabado impecable.",
      expandedDescription: "Manicura rusa • Limpieza • Hidratación • Masaje • Gel semipermanente o esmalte premium",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop",
      details: [
        { name: "Con esmaltado", price: "60 EUR" },
        { name: "Sin esmaltado", price: "50 EUR" },
      ],
    },
    {
      title: "Pedicura",
      description: "Porque unos pies bien cuidados siempre están de temporada. Pedicura con líneas limpias, color bonito y ese acabado recién hecho.",
      expandedDescription: "Higiene • Durezas • Cutículas • Hidratación • Masaje • Esmaltado semipermanente o normal",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.6",
      details: [
        { name: "Con esmaltado", price: "65 EUR" },
        { name: "Sin esmaltado", price: "55 EUR" },
      ],
    },
    {
      title: "Retirada de Producto",
      description: "Retira gel, esmalte semipermanente o extensiones de otros salones con cuidado y precisión.",
      expandedDescription: "Gel • Esmalte semipermanente • Extensiones (solo trabajos de otros salones)",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=400&fit=crop",
      details: [{ name: "Retirada", price: "20 EUR" }],
    },
    {
      title: "Extras",
      description: "Pequeños detalles para personalizar tu servicio.",
      image: "https://images.unsplash.com/photo-1587729927031-830c32f520da?w=500&h=400&fit=crop",
      details: [
        { name: "Reconstrucción o alargamiento (por una uña)", price: "5 EUR" },
        { name: "Ojo de gato", price: "+10 EUR" },
        { name: "Francés", price: "+10 EUR" },
        { name: "Decoración", price: "Según diseño" },
      ],
    },
    {
      title: "Extensiones",
      description: "Elige la longitud que mejor se adapte a tu estilo.",
      image: "https://images.unsplash.com/photo-1601244668565-afba8cbd2b51?w=500&h=400&fit=crop",
      details: [
        { name: "Cortas", price: "80 EUR" },
        { name: "Medianas", price: "90 EUR" },
        { name: "Largas", price: "100 EUR" },
      ],
    },
  ],
}

type ServicesProps = {
  language: Language
}

export default function Services({ language }: ServicesProps) {
  const [expanded, setExpanded] = useState<number | null>(null)
  const services = servicesByLanguage[language]

  const labels = {
    en: {
      sectionTitle: "Services",
      readMore: "READ MORE",
      hide: "HIDE",
      available: "Available Services",
    },
    es: {
      sectionTitle: "Servicios",
      readMore: "VER MAS",
      hide: "OCULTAR",
      available: "Servicios disponibles",
    },
  }

  const t = labels[language]

  useEffect(() => {
    setExpanded(null)
  }, [language])

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index)
  }

  return (
    <section id="services" className="py-0 px-0" style={{ backgroundColor: "#C6B7A6" }}>
      <div className="w-full py-8 px-4 mb-16" style={{ backgroundColor: "#EED9CE" }}>
        <h2 className="text-4xl font-light text-center tracking-wide text-gray-800">{t.sectionTitle}</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center bg-[#EED9CE] rounded-2xl overflow-hidden shadow-md flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 md:h-60 lg:h-64 xl:h-72 object-cover"
              />
              <div className="px-6 pt-5 pb-8 flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">{service.description}</p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-auto text-amber-800 font-semibold text-xs tracking-[0.2em] hover:text-amber-900"
                >
                  {expanded === index ? t.hide : t.readMore}
                </button>
              </div>

              {/* Expanded Details */}
              {expanded === index && (
                <div className="px-6 pb-8 pt-2 border-t border-amber-200">
                  {service.expandedDescription && (
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                      {service.expandedDescription}
                    </p>
                  )}
                  <h4 className="text-lg font-light mb-6 text-gray-800">{t.available}</h4>
                  <div className="space-y-4 text-left">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="text-gray-700 text-sm flex-1 pr-4">{detail.name}</span>
                        <span className="text-amber-800 font-semibold shrink-0">{detail.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
