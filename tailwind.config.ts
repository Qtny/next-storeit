import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FA7275",
          "200": "EA6365",
        },
        secondary: {
          "100": "131524",
          "200": "04050C",
        },
        text: {
          "100": "#333F4E",
          "200": "#A3B2C7",
          "300": "#F2F5F9",
          "400": "#F2F4F8",
        },
        accent: {
          red: "#FF7474",
          green: "#3DD9B3",
          orange: "#F9AB72",
          purple: "#EEA8FD",
          blue: "#56B8FF",
        },
        error: "#B80000",
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"]
    }
  },
  plugins: [],
};
export default config;
