/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#060505',
        background: '#ffffff',
        primary: '#1e88e5',
        secondary: '#eeeeee',
        accent: '#1e88e5',
      },
    },
  },
  plugins: [],
};
