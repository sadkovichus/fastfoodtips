import legacy from "@vitejs/plugin-legacy"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig, PluginOption } from "vite"
import compression from "vite-plugin-compression"
import { VitePWA } from "vite-plugin-pwa"
import sitemap from "vite-plugin-sitemap"

export default defineConfig({
  plugins: [
    react(),
    sitemap({ hostname: "https://fastfoodtips.vercel.app/" }),
    compression({ algorithm: "gzip" }) as PluginOption,
    legacy({ targets: ["defaults", "not IE 11"] }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "FastFoodTips",
        short_name: "FastFoodTips",
        description: "Internet tip sending",
        theme_color: "#2b2738",
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-assets",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },
            },
          },
          {
            urlPattern: /^https:\/\/fastfoodtips\.vercel\.app\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
      },
    }) as unknown as PluginOption,
  ],
  css: {
    preprocessorOptions: {
      scss: {
        sassOptions: {
          api: "modern-compiler",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": 'http://13.61.146.73:8000/',
      // '/api': {
      //   target: 'https://1199-2a02-8071-6282-a220-c1c1-9b95-44c6-e8a3.ngrok-free.app',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/api/, '/api'),
      // },
    },
    hmr: { overlay: true },
    fs: {
      allow: [".."],
    },
  },
  optimizeDeps: { include: ["react", "react-dom", "workbox-window"] },
  build: {
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      external: ["workbox-window"],
      input: path.resolve(__dirname, "index.html"),
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("node_modules/")[1].split("/")[0]
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    sourcemap: false,
  },
})