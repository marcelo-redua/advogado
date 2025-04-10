// app/page.tsx
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Services from './components/Services'


export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
