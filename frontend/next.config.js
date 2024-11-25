/** @type {import('next').NextConfig} */
const nextConfig = {

    webpack(config) {
      config.module.rules.push({
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true, // Solo para evitar problemas de compilación
            },
          },
        ],
      });
      return config;
    },
  };
  
  module.exports = {
    reactStrictMode: true,
  };
  