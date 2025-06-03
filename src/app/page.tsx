import { FaBalanceScale, FaUsers, FaShoppingCart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <header className="bg-gray-800 text-white py-6 shadow-md relative">
        {/* Background sóbrio no topo */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/siteadv1/fotoJustica.jpg"
            alt="Background Direito"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 relative z-10">
          <div className="flex items-center gap-3">
            <img src="/siteadv1/justica-ambiental.png" alt="Logo" style={{ width: 55, height: 55 }} className="-my-2" />
            <span className="text-2xl font-bold tracking-tight">Dr. Glauco Menezes</span>
          </div>
          <nav className="mt-4 sm:mt-0 flex gap-6 text-lg text-center sm:text-left">
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#atuacao" className="hover:underline">Áreas de Atuação</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-10">
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16 text-center md:text-left" id="sobre">
          {/* Foto real de advogado */}
          <img
            src="/siteadv1/fotoAdvogado.jpg"
            alt="Advogado"
            width={180}
            height={240}
            className="rounded-lg border-4 border-gray-800 shadow-lg object-cover object-top"
            style={{ aspectRatio: '3/4' }}
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">Dr. Glauco Menezes</h1>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">OAB/SP 123456</h2>
            <p className="text-lg mb-2">Advogado especializado em Direito Civil, com mais de 15 anos de experiência atendendo pessoas físicas e jurídicas.</p>
            <p className="text-lg mb-2">Atuo com dedicação, ética e profundo conhecimento jurídico, buscando sempre as melhores soluções para meus clientes. Meu compromisso é oferecer um atendimento personalizado, transparente e eficiente, acompanhando cada etapa do processo e esclarecendo todas as dúvidas.</p>
            <p className="text-lg">Seja para questões consultivas ou contenciosas, estou preparado para defender seus interesses com seriedade e responsabilidade.</p>
          </div>
        </section>

        <section className="mb-16" id="atuacao">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">Áreas de Atuação</h2>
          <p className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto text-center">Com ampla experiência e constante atualização, ofereço assessoria jurídica completa em diversas áreas do Direito. Conheça um pouco mais sobre cada especialidade e como posso ajudar você ou sua empresa a resolver demandas jurídicas com segurança e eficiência.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              {/* Ícone Direito Civil */}
              <FaBalanceScale size={48} className="mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">Direito Civil</h3>
              <p className="text-center mb-2">Contratos, responsabilidade civil, indenizações, cobranças, inventários e partilhas.</p>
              <p className="text-sm text-gray-600 text-center">Atuação em elaboração, revisão e análise de contratos, defesa em ações de indenização, cobrança judicial e extrajudicial, além de processos de inventário e partilha de bens. Soluções jurídicas para pessoas físicas e empresas.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              {/* Ícone Direito de Família */}
              <FaUsers size={48} className="mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">Direito de Família</h3>
              <p className="text-center mb-2">Divórcios, pensão alimentícia, guarda, regulamentação de visitas, união estável.</p>
              <p className="text-sm text-gray-600 text-center">Aconselhamento e atuação em processos de separação, divórcio consensual ou litigioso, definição de guarda e visitas, reconhecimento e dissolução de união estável, além de ações de alimentos e regulamentação de convivência familiar.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              {/* Ícone Direito do Consumidor */}
              <FaShoppingCart size={48} className="mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">Direito do Consumidor</h3>
              <p className="text-center mb-2">Defesa do consumidor, ações contra empresas, vícios de produtos e serviços.</p>
              <p className="text-sm text-gray-600 text-center">Atuação em demandas judiciais e extrajudiciais para garantir os direitos do consumidor, como problemas com compras, contratos, cobranças indevidas, produtos com defeito e má prestação de serviços. Orientação completa para consumidores e fornecedores.</p>
            </div>
          </div>
        </section>

        <section className="mb-16" id="contato">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">Contato</h2>
          <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto text-center">Entre em contato para agendar uma consulta, esclarecer dúvidas ou obter mais informações sobre os serviços jurídicos oferecidos. O atendimento é realizado de forma personalizada, com total sigilo e respeito à sua necessidade.</p>
          <form className="bg-white rounded-lg shadow p-8 max-w-xl mx-auto flex flex-col gap-4">
            <div>
              <label htmlFor="nome" className="block font-semibold mb-1">Nome</label>
              <input id="nome" name="nome" type="text" className="w-full border border-gray-300 rounded px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">E-mail</label>
              <input id="email" name="email" type="email" className="w-full border border-gray-300 rounded px-3 py-2" required />
            </div>
            <div>
              <label htmlFor="mensagem" className="block font-semibold mb-1">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={4} className="w-full border border-gray-300 rounded px-3 py-2" required></textarea>
            </div>
            <button type="submit" className="bg-gray-800 text-white font-semibold rounded px-6 py-2 hover:bg-gray-700 transition">Enviar</button>
          </form>
          <div className="text-center mt-8 text-lg">
            <p><strong>E-mail:</strong> glauco.menezes@adv.br</p>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
            <p><strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo/SP</p>
            {/* Ícone WhatsApp */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Dr. Glauco Menezes - Todos os direitos reservados.</p>
      </footer>

      {/* Botão WhatsApp fixo à direita */}
      <a
        href="https://wa.me/5541995296747"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#618200] hover:bg-gray-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg transition"
        title="Fale conosco pelo WhatsApp"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path fill="#fff" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.62 1.46 5.17L2 22l4.97-1.44A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18c-1.61 0-3.19-.43-4.56-1.25l-.32-.19-2.95.86.84-2.88-.21-.33A7.96 7.96 0 0 1 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8Zm4.13-5.47c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.13-.68-.6-1.14-1.34-1.28-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.41-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.29-.01-.45-.01-.16 0-.41.06-.62.29-.21.23-.81.79-.81 1.93 0 1.14.83 2.25.95 2.41.12.15 1.63 2.5 3.95 3.4.55.19.98.3 1.31.38.55.13 1.05.11 1.44.07.44-.05 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.28Z"/>
        </svg>
        WhatsApp
      </a>
    </div>
  );
}
