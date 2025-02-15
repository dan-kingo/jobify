/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "350px", // Change the default 'sm' breakpoint
      md: "800px", // Change the default 'md' breakpoint
      lg: "1100px", // Change the default 'lg' breakpoint
      xl: "1400px", // Change the default 'xl' breakpoint
    },
  },
  plugins: [],
};
