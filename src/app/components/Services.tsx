'use client'

import Icon from '/icons/justice.svg' // Altere esse caminho para o seu ícone específico
import Image from 'next/image'

export default function Services() {
  const areas = [
    {
      title: 'Direito Civil',
      description: 'Assessoria em contratos, indenizações, responsabilidade civil e muito mais.',
      icon: '/icons/justice.svg',
    },
    {
      title: 'Direito Trabalhista',
      description: 'Defesa dos seus direitos como trabalhador ou empregador.',
      icon: '/icons/justice.svg',
    },
    {
      title: 'Direito de Família',
      description: 'Divórcios, pensão alimentícia, guarda e questões familiares.',
      icon: '/icons/justice.svg',
    },
    {
      title: 'Consultoria Jurídica',
      description: 'Orientações jurídicas personalizadas para pessoas e empresas.',
      icon: '/icons/justice.svg',
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[#223855] text-5xl font-bold text-center mb-12">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="border-2 border-[#E5E8EB] bg-white p-6 rounded-xl hover:shadow-lg transition duration-300 text-[#223855]">
              <div className="flex items-start gap-4">
                <Image src={area.icon} alt="" width={64} height={64} />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{area.title}</h3>
                  <p className="text-sm text-[#223855]">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
