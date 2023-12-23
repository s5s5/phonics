const withSerwist = require("@serwist/next").default({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 31622400,
  },
};

// module.exports = nextConfig;

module.exports = withSerwist({
  // Your Next.js config
  ...nextConfig,
});
