// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold">Dr. João da Silva</h4>
            <p className="text-sm text-gray-400">OAB RJ 123456</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
  
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#services" className="text-sm hover:text-white transition">Serviços</a>
            <a href="#contato" className="text-sm hover:text-white transition">Contato</a>
            <a href="https://www.instagram.com" target="_blank" className="text-sm hover:text-white transition">Instagram</a>
          </div>
        </div>
      </footer>
    )
  }
  