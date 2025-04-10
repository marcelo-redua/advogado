// components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nome */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Dr. João da Silva
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <Link href="#services" className="hover:text-black transition">Serviços</Link>
          <Link href="#testimonials" className="hover:text-black transition">Depoimentos</Link>
          <Link href="#contato" className="hover:text-black transition">Contato</Link>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
          <Link href="#services" className="block text-gray-700 hover:text-black">Serviços</Link>
          <Link href="#testimonials" className="block text-gray-700 hover:text-black">Depoimentos</Link>
          <Link href="#contato" className="block text-gray-700 hover:text-black">Contato</Link>
        </div>
      )}
    </header>
  )
}
