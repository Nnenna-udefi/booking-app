import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        philosopher: "var(--font-philosopher)",
      },
      backgroundImage: {
        about: "url('/image/Twist.jpeg')",
        hero: "url('/image/watermelon.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
