import type { NextConfig } from "next";

const repo = 'siteadv1';
const basePath = `/${repo}`;
const assetPrefix = `/${repo}/`;

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  // Removido generateBuildId para evitar pasta extra 'static' nos assets
};

export default nextConfig;
