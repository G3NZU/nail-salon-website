"use client"

type Language = "en" | "es"

type ContactProps = {
  language: Language
}

export default function Contact({ language }: ContactProps) {
  const content = {
    en: {
      title: "Contact me",
      addressLabel: "Address",
      addressLines: ["Calle del Sol, 45", "Madrid, 28013", "Spain"],
      whatsappTitle: "WhatsApp Booking",
      whatsappText: "Book your appointment directly on WhatsApp.",
      whatsappButton: "Book on WhatsApp",
      followTitle: "Follow Me",
      copyright: "© 2026 The Goddess Of Nails. All rights reserved.",
    },
    es: {
      title: "Contáctame",
      addressLabel: "Dirección",
      addressLines: ["Calle del Sol, 45", "Madrid, 28013", "España"],
      whatsappTitle: "Reservas por WhatsApp",
      whatsappText: "Reserva tu cita directamente por WhatsApp.",
      whatsappButton: "Reservar en WhatsApp",
      followTitle: "Sígueme",
      copyright: "© 2026 The Goddess Of Nails. Todos los derechos reservados.",
    },
  }

  const t = content[language]

  return (
    <section id="contact" className="py-0 px-0" style={{ backgroundColor: "#E4C9BB" }}>
      <div className="w-full py-8 px-4 mb-16" style={{ backgroundColor: "#EED9CE" }}>
        <h2 className="text-4xl font-light text-center tracking-wide text-gray-800">{t.title}</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Map */}
          <div className="rounded-lg h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps?q=The%20Goddess%20of%20Nails%4040.4168%2C-3.7038&output=embed"
            ></iframe>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 mb-2 md:mb-4">{t.addressLabel}</h3>
              <p className="text-gray-600 md:text-lg lg:text-xl">
                {t.addressLines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < t.addressLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 mb-2 md:mb-4">{t.whatsappTitle}</h3>
              <p className="text-gray-600 md:text-lg lg:text-xl mb-4">
                {t.whatsappText}
              </p>
              <div className="flex items-center gap-3">
              <a href="https://wa.me/34912345678" className="hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.537 0-2.852-1.313-2.852-2.84 0-1.527 1.315-2.84 2.852-2.84 1.537 0 2.852 1.313 2.852 2.84 0 1.527-1.315 2.84-2.848 2.84zm9.267-12.045C19.628 1.392 15.997.007 12.038.007 6.026.007 1.278 4.753 1.278 10.76c0 1.917.464 3.779 1.349 5.428L1.257 23.993l5.973-1.355a10.717 10.717 0 005.09 1.271h.005c6.01 0 10.76-4.745 10.76-10.753 0-2.872-1.118-5.576-3.15-7.614"/>
                </svg>
              </a>
              <a href="https://wa.me/34912345678" className="text-gray-600 md:text-lg lg:text-xl hover:text-gray-800 transition-colors">
                +34 912 345 678
              </a>
              </div>
              <a
                href="https://wa.me/34912345678"
                className="inline-flex items-center justify-center mt-4 px-4 py-2 text-sm md:text-base tracking-wide text-white bg-amber-800 rounded-full hover:bg-amber-900 transition"
              >
                {t.whatsappButton}
              </a>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 mb-2 md:mb-4">{t.followTitle}</h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/sample_nails_studio/"
                  className="hover:opacity-75 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
                </a>
                <a
                  href="https://www.instagram.com/the_goddessofnails/"
                  className="text-gray-600 md:text-lg lg:text-xl hover:text-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                @the_goddessofnails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 md:mt-24 lg:mt-32 w-full py-4 px-4" style={{ backgroundColor: "#EED9CE" }}>
        <p className="text-xs md:text-sm text-gray-600 text-center">
          {t.copyright}
        </p>
      </div>
    </section>
  )
}
