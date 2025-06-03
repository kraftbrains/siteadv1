export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <header className="bg-blue-900 text-white py-6 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img src="globe.svg" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold tracking-tight">Dr. João Silva</span>
          </div>
          <nav className="mt-4 sm:mt-0 flex gap-6 text-lg">
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#atuacao" className="hover:underline">Áreas de Atuação</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-10">
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16" id="sobre">
          <img src="file.svg" alt="Advogado" width={180} height={180} className="rounded-full border-4 border-blue-900 shadow-lg" />
          <div>
            <h1 className="text-4xl font-bold mb-4">Dr. João Silva</h1>
            <h2 className="text-xl font-semibold mb-2 text-blue-900">OAB/SP 123456</h2>
            <p className="text-lg mb-2">Advogado especializado em Direito Civil, com mais de 15 anos de experiência atendendo pessoas físicas e jurídicas.</p>
            <p className="text-lg">Atendimento personalizado, ética e compromisso com resultados.</p>
          </div>
        </section>

        <section className="mb-16" id="atuacao">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Áreas de Atuação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" alt="Direito Civil" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Direito Civil</h3>
              <p className="text-center">Contratos, responsabilidade civil, indenizações, cobranças, inventários e partilhas.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Direito de Família" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Direito de Família</h3>
              <p className="text-center">Divórcios, pensão alimentícia, guarda, regulamentação de visitas, união estável.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="Direito do Consumidor" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Direito do Consumidor</h3>
              <p className="text-center">Defesa do consumidor, ações contra empresas, vícios de produtos e serviços.</p>
            </div>
          </div>
        </section>

        <section className="mb-16" id="contato">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Contato</h2>
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
            <button type="submit" className="bg-blue-900 text-white font-semibold rounded px-6 py-2 hover:bg-blue-800 transition">Enviar</button>
          </form>
          <div className="text-center mt-8 text-lg">
            <p><strong>E-mail:</strong> joao.silva@adv.br</p>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
            <p><strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo/SP</p>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-4 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Dr. João Silva - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
