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
        primary: '#57453F',
      },
      fontFamily: {
        sans: ['inter', 'sans-serif'],
        serif: ['Qatar2022Arabic-Bold', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
