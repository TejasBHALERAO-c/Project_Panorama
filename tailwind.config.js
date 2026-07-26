/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#14171a",
        blueprint: "#1c3d5a",
        paper: "#f3f1ea",
        silver: "#8b95a1",
        machine: "#e8590c",
      },
    },
  },
  plugins: [],
}
