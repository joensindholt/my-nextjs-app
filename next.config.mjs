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
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/((?!.swa).*)<YOUR MATCHING RULE>",
          destination: "<YOUR REWRITE RULE>",
        },
      ],
    };
  },
};

export default nextConfig;
