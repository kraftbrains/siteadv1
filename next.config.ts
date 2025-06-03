/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita exportação estática
  basePath: "/siteadv1", // Substitua pelo nome do repositório do GitHub
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
};

module.exports = nextConfig;