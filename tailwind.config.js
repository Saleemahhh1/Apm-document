module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        apmGreen: '#0A2F21',
        apmGold: '#D4AF37',
        apmAccent: '#0F3B2A'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
                    }
