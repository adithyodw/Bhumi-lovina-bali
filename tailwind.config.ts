import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C4A3E",
        "primary-dark": "#1E3329",
        "on-primary": "#FFFFFF",
        secondary: "#8B6F47",
        "secondary-light": "#C4A574",
        sand: "#F5F0E8",
        beige: "#EDE6D6",
        cream: "#FAF9F5",
        ocean: "#3D6B7E",
        "ocean-light": "#5A8FA3",
        sage: "#6B8F71",
        "sage-light": "#A8C4AB",
        wood: "#725A39",
        charcoal: "#2A2A28",
        muted: "#6B6B66",
        background: "#FAF9F5",
        surface: "#FFFFFF",
        "surface-warm": "#F4F0E8",
        "on-surface": "#2A2A28",
        "on-surface-muted": "#6B6B66",
        outline: "#E5E0D6",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      letterSpacing: {
        widest: "0.2em",
        "4xl": "0.4em",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(42, 42, 40, 0.06)",
        card: "0 8px 32px rgba(42, 42, 40, 0.08)",
        elevated: "0 16px 48px rgba(42, 42, 40, 0.12)",
        glass: "0 8px 32px rgba(42, 42, 40, 0.06), inset 0 1px 0 rgba(255,255,255,0.4)",
      },
      backdropBlur: {
        glass: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
