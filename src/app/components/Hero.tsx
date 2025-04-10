// components/Hero.tsx
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gray-100 pt-28 pb-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Defesa com excelência para o seu direito
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Atuação estratégica nas áreas cível, trabalhista e previdenciária. Atendimento personalizado e eficaz.
        </p>

        <Link href="https://api.whatsapp.com/send/?phone=5521964091552&text=Ol%C3%A1%21+Gostaria+de+falar+com+voc%C3%AA+sobre+uma+consulta+jur%C3%ADdica.&type=phone_number&app_absent=0">
          <button className="mt-8 bg-[#328596] hover:bg-[#467077] text-white px-6 py-3 rounded-4xl text-base font-semibold transition cursor-pointer">
            Agende sua consulta
          </button>
        </Link>
      </div>
    </section>
  )
}
