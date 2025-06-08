/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL("https://apod.nasa.gov/apod/image/**")],
  },
};

module.exports = nextConfig;
