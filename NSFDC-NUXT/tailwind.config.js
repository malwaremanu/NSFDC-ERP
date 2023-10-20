/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        n:
        {
          "50": "#f9f9ff",
          "100": "#eaeaf6",
          "200": "#c3c3df",
          "300": "#9c9cc7",
          "400": "#7d7db4",
          "500": "#5e5ea1",
          "600": "#3f3f8e",
          "700": "#303085",
          "800": "#20207b",
          "900": "#000068"
        }
      }
    },
    plugins: [],
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
  },
  plugins: [
   
  ]
}