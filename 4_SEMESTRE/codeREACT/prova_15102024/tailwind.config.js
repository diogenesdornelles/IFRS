/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "w-full": 'url("/src/assets/images/library-w-lg.webp")',
        "w-md": 'url("/src/assets/images/library-w-h.webp")',
        "h-full": 'url("/src/assets/images/library-h-lg.webp")',
      },
    },
  },
  plugins: [],
};
