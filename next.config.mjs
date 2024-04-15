/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      OPENAI_KEY: process.env.OPENAI_KEY,
    }
};

export default nextConfig;
