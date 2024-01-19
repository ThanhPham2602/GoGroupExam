import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        primary: "1200px",
      },
      colors: {
        buttonColor: "#503CED",
        gray1: "#333333",
        gray2: "#4F4F4F",
        primaryColor: "linear-gradient(45deg, #00fcde 0%,#d100d1 100%)"
      },
    },
  },
  plugins: [],
};
export default config;
