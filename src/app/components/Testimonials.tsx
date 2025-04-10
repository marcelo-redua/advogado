// components/Testimonials.tsx
export default function Testimonials() {
    return (
      <section id="testimonials" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">O que dizem nossos clientes</h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "Profissional extremamente competente. Resolveu meu processo com agilidade e total transparência."
              </p>
              <p className="mt-4 font-semibold text-gray-900">— Ana C.</p>
            </div>
  
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "Fui muito bem atendido. O Dr. João me explicou tudo com calma e clareza. Recomendo sem dúvidas!"
              </p>
              <p className="mt-4 font-semibold text-gray-900">— Carlos M.</p>
            </div>
  
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "Excelente advogado. Sempre disponível, atencioso e muito preparado tecnicamente."
              </p>
              <p className="mt-4 font-semibold text-gray-900">— Juliana P.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  