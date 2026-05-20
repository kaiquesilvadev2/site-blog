import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { withContentlayer } from "next-contentlayer";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  turbopack: {},
};

export default withContentlayer(withMDX(nextConfig));