import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: { // Add this server configuration
    host: true // This listens on all available IPs, including your 192.168.68.59
    // or specify host: '0.0.0.0'
  }
})
