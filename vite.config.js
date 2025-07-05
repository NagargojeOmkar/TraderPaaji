import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  base: './', // Relative paths for static deployment
  build: {
    outDir: 'dist', // Production build output
    assetsDir: 'assets', // Organized asset directory
    sourcemap: false, // Disabled for production
    minify: 'terser', // Advanced minification
    cssCodeSplit: true, // Efficient CSS loading
    chunkSizeWarningLimit: 1000, // Increase chunk size warning threshold
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true, // Remove debugger statements
      },
      format: {
        comments: false, // Remove comments
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Automated vendor chunk splitting
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('framer-motion')) return 'vendor-framer';
            if (id.includes('react-icons')) return 'vendor-icons';
            return 'vendor-other';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  // Enable for PWA support (uncomment if needed):
  /*
  manifest: true,
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}']
  },
  */
  preview: {
    port: 8080, // Production preview port
    strictPort: true // Prevent fallback to random port
  },
  server: {
    host: true, // Enable LAN access
    port: 5173 // Development port
  }
});
