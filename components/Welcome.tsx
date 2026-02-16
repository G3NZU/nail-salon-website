"use client"

type Language = "en" | "es"

type WelcomeProps = {
  language: Language
}

export default function Welcome({ language }: WelcomeProps) {
  const content = {
    en: {
      title: "Welcome",
      paragraphs: [
        [
          "Welcome to a space created exclusively for you,",
          "where time slows and the outside world gently fades away.",
        ],
        [
          "More than a manicure or pedicure, this is a curated self-care experience.",
          "Recline in comfort on a treatment table while a large screen and headphones",
          "immerse you in your favorite film or series. Every detail is designed for deep",
          "relaxation as you unwind and I take care of the rest.",
        ],
        [
          "This is your moment to disconnect, breathe, and indulge in a serene space",
          "where beauty and well-being meet.",
        ],
      ],
    },
    es: {
      title: "Bienvenida",
      paragraphs: [
        [
          "Bienvenida a un espacio creado exclusivamente para ti,",
          "donde el tiempo se detiene y el mundo exterior se desvanece suavemente.",
        ],
        [
          "Más que una manicura o pedicura, esta es una experiencia de autocuidado.",
          "Reclínate con comodidad en una camilla mientras una gran pantalla y auriculares",
          "te sumergen en tu película o serie favorita. Cada detalle está pensado para una",
          "relajación profunda mientras te desconectas y yo me encargo del resto.",
        ],
        [
          "Este es tu momento para desconectar, respirar y disfrutar de un espacio sereno",
          "donde la belleza y el bienestar se encuentran.",
        ],
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "#DBB4A0" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-8 text-gray-800">{t.title}</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-center">
          {t.paragraphs.map((lines, index) => (
            <p key={index}>
              {lines.map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
