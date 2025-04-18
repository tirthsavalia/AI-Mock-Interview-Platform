/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        net: false,
        tls: false,
        assert: false,
        crypto: false,
        http: false,
        https: false,
        os: false,
        path: false,
        stream: false,
        util: false,
        zlib: false,
      };
    }
    return config;
  },
};

export default nextConfig; 