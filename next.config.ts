import type { NextConfig } from "next";

const repo = 'siteadv1';
const basePath = `/${repo}`;
const assetPrefix = `/${repo}/`;

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  generateBuildId: async () => "static", // buildId fixo para garantir caminhos consistentes
};

export default nextConfig;
