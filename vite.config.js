import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Deployment optimization
  base: './', // Use relative paths for better compatibility
  build: {
    outDir: 'dist', // Output directory
    assetsDir: 'assets', // Assets directory
    sourcemap: false, // Disable source maps for production
    minify: 'terser', // Minify with terser
    cssCodeSplit: true, // Optimize CSS loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor modules into separate chunks
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['react-icons'],
          tailwind: ['tailwindcss']
        }
      }
    }
  },
  // Enable these for PWA if needed
  /*
  manifest: true,
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg}']
  },
  */
  server: {
    // Enable for local network testing
    host: true,
    port: 5173
  }
})
