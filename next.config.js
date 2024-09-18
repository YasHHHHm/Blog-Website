/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["lh3.googleusercontent.com","firebasestorage.googleapis.com"],
    },
    webpack: (config) => {
      // Add a rule to transpile the `undici` module
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/undici/,  // Only apply to `undici` module
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  