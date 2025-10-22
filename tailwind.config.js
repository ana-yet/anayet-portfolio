/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#8B5CF6",
        accent: "#EC4899",
        dark: {
          bg: "#0a0e27",
          card: "#1a1f3a",
          lighter: "#252b4a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
        mono: ["var(--font-fira-code)"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" },
          to: {
            boxShadow:
              "0 0 30px rgba(99, 102, 241, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)",
          },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
