'use client';
import { useState } from "react";
import { FaBalanceScale, FaUsers, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img src="/siteadv1/justica-ambiental.png" alt="Logo" style={{ width: 44, height: 44 }} className="" />
            <span className="text-xl font-bold tracking-tight">Dr. Glauco Menezes</span>
          </div>
          {/* Desktop Navbar */}
          <nav className="hidden md:flex gap-6 text-base">
            <a href="#sobre" className="hover:text-green-700 transition">Sobre</a>
            <a href="#atuacao" className="hover:text-green-700 transition">Atuação</a>
            <a href="#contato" className="hover:text-green-700 transition">Contato</a>
          </nav>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-900 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow px-4 py-4 flex flex-col gap-4 absolute w-full left-0 z-20 animate-fade-in">
            <a href="#sobre" className="hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#atuacao" className="hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>Atuação</a>
            <a href="#contato" className="hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
        )}
      </header>

      <main className="flex-1 w-full px-0 py-0">
        {/* Sobre */}
        <section id="sobre" className="flex flex-col items-center text-center mb-16 w-full min-h-[420px] bg-blue-700 py-16 shadow-sm px-4">
          <img
            src="/siteadv1/fotoAdvogado.jpg"
            alt="Advogado"
            width={160}
            height={160}
            className="rounded-full shadow object-cover object-top mb-6 border-0"
            style={{ aspectRatio: '1/1' }}
          />
          <h1 className="text-3xl font-bold mb-2 text-white">Dr. Glauco Menezes</h1>
          <p className="text-lg text-blue-100 mb-2">OAB/SP 123456</p>
          <p className="max-w-xl text-blue-100 mb-4">Advogado especialista em Direito Civil, Empresarial e Ambiental. Atendimento personalizado e soluções jurídicas modernas para você ou sua empresa.</p>
        </section>
        <div className="container mx-auto px-4">
          {/* Áreas de Atuação */}
          <section id="atuacao" className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Áreas de Atuação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <FaBalanceScale className="text-3xl text-green-700 mb-2" />
                <h3 className="font-semibold text-lg mb-1">Direito Civil</h3>
                <p className="text-gray-600 text-center text-sm">Contratos, responsabilidade civil, família e sucessões.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <FaUsers className="text-3xl text-green-700 mb-2" />
                <h3 className="font-semibold text-lg mb-1">Direito Empresarial</h3>
                <p className="text-gray-600 text-center text-sm">Consultoria, contratos empresariais, recuperação judicial.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <img src="/siteadv1/justica-ambiental.png" alt="Ambiental" className="w-8 h-8 mb-2" />
                <h3 className="font-semibold text-lg mb-1">Direito Ambiental</h3>
                <p className="text-gray-600 text-center text-sm">Licenciamento, defesas administrativas e judiciais.</p>
              </div>
            </div>
          </section>

          {/* Depoimentos */}
          <section id="depoimentos" className="bg-gray-100 py-14">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">Depoimentos</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                  <img src="/siteadv1/google.svg" alt="Google" className="w-8 h-8 mb-2" />
                  <p className="text-gray-700 text-center italic mb-2">“Atendimento excelente, muito atencioso e resolveu meu problema rapidamente. Recomendo!”</p>
                  <span className="text-sm text-gray-500">— Maria S.</span>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                  <img src="/siteadv1/google.svg" alt="Google" className="w-8 h-8 mb-2" />
                  <p className="text-gray-700 text-center italic mb-2">“Profissional dedicado, transparente e eficiente. Voltarei a contratar!”</p>
                  <span className="text-sm text-gray-500">— João P.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Equipe */}
          <section id="equipe" className="py-14">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">Nossa Equipe</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4 bg-white rounded-xl shadow p-6">
                  <img src="/siteadv1/fotoAdvogado.jpg" alt="Dr. Glauco Menezes" className="w-20 h-24 rounded-lg object-cover border-2 border-gray-300" />
                  <div>
                    <h3 className="font-semibold text-lg">Dr. Glauco Menezes</h3>
                    <p className="text-gray-600 text-sm">Advogado titular, especialista em Direito Civil, Empresarial e Ambiental.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-xl shadow p-6">
                  <img src="/siteadv1/fotoAdvogada.jpg" alt="Dra. Ana Paula" className="w-20 h-24 rounded-lg object-cover border-2 border-gray-300" />
                  <div>
                    <h3 className="font-semibold text-lg">Dra. Ana Paula</h3>
                    <p className="text-gray-600 text-sm">Advogada associada, especialista em Direito de Família e Sucessões.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog */}
          <section id="blog" className="bg-gray-100 py-14">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-center mb-8">Últimos Artigos</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2">Como funciona o licenciamento ambiental?</h3>
                  <p className="text-gray-600 text-sm mb-4">Entenda o passo a passo do licenciamento ambiental e sua importância para empresas e sociedade.</p>
                  <a href="#" className="text-green-700 font-semibold hover:underline mt-auto">Leia mais</a>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2">Direito de Família: principais dúvidas</h3>
                  <p className="text-gray-600 text-sm mb-4">Respondemos as dúvidas mais comuns sobre divórcio, guarda e pensão alimentícia.</p>
                  <a href="#" className="text-green-700 font-semibold hover:underline mt-auto">Leia mais</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Contato no final */}
      <section id="contato" className="max-w-lg mx-auto bg-white rounded-xl shadow p-8 mb-8 mt-10">
        <h2 className="text-xl font-bold mb-4 text-center">Fale Conosco</h2>
        <form className="flex flex-col gap-4">
          <input id="nome" name="nome" type="text" placeholder="Seu nome" className="border border-gray-300 rounded px-3 py-2" required />
          <input id="email" name="email" type="email" placeholder="Seu e-mail" className="border border-gray-300 rounded px-3 py-2" required />
          <textarea id="mensagem" name="mensagem" rows={4} placeholder="Sua mensagem" className="border border-gray-300 rounded px-3 py-2" required></textarea>
          <button type="submit" className="bg-green-700 text-white font-semibold rounded px-6 py-2 hover:bg-green-800 transition">Enviar</button>
        </form>
        <div className="text-center mt-6 text-base text-gray-700">
          <p><strong>E-mail:</strong> glauco.menezes@adv.br</p>
          <p><strong>Telefone:</strong> (11) 99999-9999</p>
          <p><strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo/SP</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-200 py-3 text-center text-sm mt-8">
        <p>&copy; {new Date().getFullYear()} Dr. Glauco Menezes. Todos os direitos reservados.</p>
      </footer>

      {/* Botão WhatsApp flutuante */}
      <a
        href="https://wa.me/5541995296747"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-green-700 hover:bg-green-800 text-white p-4 rounded-full shadow-lg transition"
        title="Fale conosco pelo WhatsApp"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}