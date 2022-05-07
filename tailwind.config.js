module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  tailwindConfig: './styles/tailwind.config.js',
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
