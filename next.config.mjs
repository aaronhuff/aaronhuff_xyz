/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
