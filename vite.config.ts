import { defineConfig } from 'vite'

// vite plugins
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    // https://vite-pwa-org.netlify.app/
    // VitePWA(),
  ],

  optimizeDeps: {
    include: ['@waline/client/component'],
  },
})
