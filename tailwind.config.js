/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        night: "#020617",
        terminal: {
          base: "#050505",
          panel: "#0b0b0b",
          border: "#1f1f1f",
          accent: "#4CFF8F",
          accentDim: "#1fdd7c",
        },
      },
      animation: {
        "slow-pulse": "pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
