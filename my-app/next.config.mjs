/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
    remotePatterns: [new URL('https://cdn.pixabay.com/user/**')],
  },
};

export default nextConfig;
