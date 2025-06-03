import type { NextConfig } from "next";

const repo = 'siteadv1';
const basePath = `/${repo}`;
const assetPrefix = `/${repo}/`;

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  // Garante que os caminhos dos assets sejam relativos ao basePath
  trailingSlash: true,
};

export default nextConfig;
