/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0284c7',
          primaryHover: '#0369a1',
          secondary: '#e0f2fe',
          teal: '#0d9488',
          green: '#10b981',
          purple: '#4f46e5',
          dark: '#0f172a',
          light: '#f8fafc',
          cardBg: '#ffffff',
          borderSubtle: '#e2e8f0'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 3.5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
