const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * Tailwind CSS configuration for the BiasGuard project. The `content` array
 * tells Tailwind where to look for class names. This configuration also
 * extends the default font family with Inter to give the UI a modern look.
 */
module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',
    './libs/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};