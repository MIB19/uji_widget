import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/chatbot.jsx", // Path ke komponen yang akan dijadikan library
      name: "ivan-uji-widget", // Nama library yang akan digunakan oleh pengguna
      fileName: (format) => `ivan-uji-widget.${format}.js`, // Nama file output
    },
    rollupOptions: {
      // Pastikan package ini tidak mem-bundle React, karena itu harus jadi peer dependency
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
