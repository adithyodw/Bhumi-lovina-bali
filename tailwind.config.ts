import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#001d2f",
        "primary-container": "#00334e",
        "on-primary": "#ffffff",
        "primary-fixed-dim": "#a4cbec",
        secondary: "#725a39",
        "secondary-fixed": "#feddb3",
        "secondary-fixed-dim": "#e1c299",
        tertiary: "#2f1400",
        "tertiary-fixed-dim": "#f4bb92",
        background: "#faf9f5",
        surface: "#faf9f5",
        "surface-bright": "#faf9f5",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4f4f0",
        "surface-container": "#efeeea",
        "surface-container-high": "#e9e8e4",
        "surface-container-highest": "#e3e2df",
        "surface-dim": "#dbdad6",
        "on-background": "#1b1c1a",
        "on-surface": "#1b1c1a",
        "on-surface-variant": "#42474d",
        outline: "#72787e",
        "outline-variant": "#c2c7ce",
        "inverse-surface": "#2f312e",
        "inverse-on-surface": "#f2f1ed",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "0.75rem",
      },
      letterSpacing: {
        widest: "0.2em",
        "4xl": "0.4em",
      },
      boxShadow: {
        botanical: "0px 20px 40px rgba(27, 28, 26, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
