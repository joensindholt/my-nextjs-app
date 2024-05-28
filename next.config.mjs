/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/((?!.swa).*)<YOUR MATCHING RULE>",
        destination: "<YOUR REDIRECT RULE>",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
