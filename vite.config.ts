import { fileURLToPath, URL } from 'node:url';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate' ,
      //Delete before production?
      devOptions: {
        enabled: true
      },
      injectRegister: 'script',
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'image/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'image/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        "screenshots": [    
          {
       
            "src": "image/pwa-640x320.png",
             "sizes": "641x321",
             "type": "image/gif",
             "form_factor": "wide",
             "label": "Application"
           },
           {
       
            "src": "image/pwa-640x320.png",
             "sizes": "641x321",
             "type": "image/gif",
             "form_factor": "narrow",
             "label": "Application"
           }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@locales": path.resolve(__dirname, "./locales"),
      "@assets": path.resolve(__dirname, "./src/app/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@appstore": path.resolve(__dirname, "./src/stores/app"),
      "@publicstore": path.resolve(__dirname, "./src/stores/public"),
      "@views": path.resolve(__dirname, "./src/views"),
    }
  }
})
