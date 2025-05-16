import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "developer.apple.com",
      },
    ],
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // async headers() {
  //   return [
  //     {
  //       source: "/.well-known/apple-app-site-association",
  //       headers: [{ key: "content-type", value: "application/json" }],
  //     },
  //   ];
  // },
  output: 'export',
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
