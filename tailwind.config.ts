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
        "admin-notification": "rgba(0, 0, 255, 0.8)",
      },
      backgroundImage: {
        "admin-theme": "linear-gradient(to right,rgb(51, 85, 234),rgb(72, 184, 236))",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
