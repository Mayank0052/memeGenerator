import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,  // Use the PORT environment variable or default to 5173
    host: true,  // Allow binding to all available network interfaces
  },
  preview: {
    host: true,  // Allow preview to be accessed from other machines
    allowedHosts: ['memegenerator-xf8z.onrender.com'],  // Add your host here
  },
})
