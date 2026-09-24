/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F46",
          blue: "#0755D9",
          electric: "#087CFA",
          cyan: "#08C7E8",
          pale: "#EFF7FF",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 31, 70, 0.10)",
        card: "0 14px 34px rgba(11, 31, 70, 0.08)",
      },
      borderRadius: {
        brand: "0.875rem",
      },
    },
  },
};

export default config;
