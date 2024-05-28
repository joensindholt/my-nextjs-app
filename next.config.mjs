/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/((?!.swa).*)",
        destination: "",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
