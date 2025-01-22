/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };
    return config;
  },
  // Add this to handle WebAssembly
  experimental: {
    webassemblyModules: true,
  },
};

module.exports = nextConfig;
