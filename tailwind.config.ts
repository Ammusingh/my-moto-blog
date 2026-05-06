// tailwind.config.js
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-black": "#0a0a0a",
        "brand-surface": "#111111",
        "brand-carbon": "#1a1a1a",
        "brand-orange": "#FF4D1C",
        "brand-cream": "#F5F1EA",
      },
      fontFamily: {
        display: ["'Anton'", "sans-serif"],   // bold italic headlines
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grain": "url('/grain.png')",
      },
    },
  },
};
