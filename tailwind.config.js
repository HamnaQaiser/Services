module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: { extend: {} },
  plugins: [],
  safelist: [
    "bg-red-500", 
    "text-center", 
    "p-4", 
    "lg:flex" // Add missing classes
  ],
};
