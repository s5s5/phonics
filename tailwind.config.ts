import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        doodle: ["Rubik Doodle Shadow"],
        playpen: ["Playpen Sans", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
