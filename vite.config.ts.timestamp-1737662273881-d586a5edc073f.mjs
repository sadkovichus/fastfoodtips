// vite.config.ts
import legacy from "file:///D:/projects/FastFoodTips/node_modules/.pnpm/@vitejs+plugin-legacy@6.0.0_terser@5.37.0_vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83._px6oia3ptcs7gqib3lowrzfzma/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import react from "file:///D:/projects/FastFoodTips/node_modules/.pnpm/@vitejs+plugin-react@4.3.4_vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83.0_sass@1.83.0_terser@5.37.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///D:/projects/FastFoodTips/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83.0_sass@1.83.0_terser@5.37.0/node_modules/vite/dist/node/index.js";
import compression from "file:///D:/projects/FastFoodTips/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83.0_sass@1.83.0_terser@5.37.0_/node_modules/vite-plugin-compression/dist/index.mjs";
import { VitePWA } from "file:///D:/projects/FastFoodTips/node_modules/.pnpm/vite-plugin-pwa@0.21.1_vite@5.4.11_@types+node@22.10.2_sass-embedded@1.83.0_sass@1.83.0_terse_z6ooms4dqhsyrtwhx464gb7hhq/node_modules/vite-plugin-pwa/dist/index.js";
import sitemap from "file:///D:/projects/FastFoodTips/node_modules/.pnpm/vite-plugin-sitemap@0.7.1/node_modules/vite-plugin-sitemap/dist/index.js";
var __vite_injected_original_dirname = "D:\\projects\\FastFoodTips";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    sitemap({ hostname: "https://fastfood-tips.ru" }),
    compression({ algorithm: "gzip" }),
    legacy({ targets: ["defaults", "not IE 11"] }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "FastFoodTips",
        short_name: "FastFoodTips",
        description: "Internet tip sending",
        theme_color: "#2b2738"
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "static-assets",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7
              },
              cacheableResponse: {
                statuses: [200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "dynamic-assets"
            }
          }
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        sassOptions: {
          api: "modern-compiler"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@app": path.resolve(__vite_injected_original_dirname, "./src/app"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      "@widgets": path.resolve(__vite_injected_original_dirname, "./src/widgets"),
      "@features": path.resolve(__vite_injected_original_dirname, "./src/features"),
      "@entities": path.resolve(__vite_injected_original_dirname, "./src/entities"),
      "@shared": path.resolve(__vite_injected_original_dirname, "./src/shared")
    }
  },
  server: {
    port: 3e3,
    proxy: {
      "/api": {
        target: "https://fastfood-tips.ru",
        changeOrigin: true,
        secure: false,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    },
    hmr: { overlay: true },
    fs: {
      allow: [".."]
    }
  },
  optimizeDeps: { include: ["react", "react-dom", "workbox-window"] },
  build: {
    target: "esnext",
    outDir: "dist",
    assetsInlineLimit: 0,
    rollupOptions: {
      external: ["workbox-window"],
      input: path.resolve(__vite_injected_original_dirname, "index.html"),
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("node_modules/")[1].split("/")[0];
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]"
      }
    },
    sourcemap: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxGYXN0Rm9vZFRpcHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RzXFxcXEZhc3RGb29kVGlwc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdHMvRmFzdEZvb2RUaXBzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IGxlZ2FjeSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCJcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCJcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBQbHVnaW5PcHRpb24gfSBmcm9tIFwidml0ZVwiXHJcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIlxyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiXHJcbmltcG9ydCBzaXRlbWFwIGZyb20gXCJ2aXRlLXBsdWdpbi1zaXRlbWFwXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHNpdGVtYXAoeyBob3N0bmFtZTogXCJodHRwczovL2Zhc3Rmb29kLXRpcHMucnVcIiB9KSxcclxuICAgIGNvbXByZXNzaW9uKHsgYWxnb3JpdGhtOiBcImd6aXBcIiB9KSBhcyBQbHVnaW5PcHRpb24sXHJcbiAgICBsZWdhY3koeyB0YXJnZXRzOiBbXCJkZWZhdWx0c1wiLCBcIm5vdCBJRSAxMVwiXSB9KSxcclxuICAgIFZpdGVQV0Eoe1xyXG4gICAgICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbXCJmYXZpY29uLmljb1wiLCBcInJvYm90cy50eHRcIl0sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogXCJGYXN0Rm9vZFRpcHNcIixcclxuICAgICAgICBzaG9ydF9uYW1lOiBcIkZhc3RGb29kVGlwc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkludGVybmV0IHRpcCBzZW5kaW5nXCIsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6IFwiIzJiMjczOFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgcnVudGltZUNhY2hpbmc6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXJsUGF0dGVybjogL1xcLig/OmpzfGNzc3x3b2ZmMj98cG5nfGpwZ3xqcGVnfHN2Z3xnaWYpJC9pLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiBcIkNhY2hlRmlyc3RcIixcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogXCJzdGF0aWMtYXNzZXRzXCIsXHJcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAwLFxyXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogNyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXNlczogWzIwMF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9cXC4oPzpwbmd8anBnfGpwZWd8c3ZnfGdpZikkL2ksXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IFwiTmV0d29ya0ZpcnN0XCIsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICBjYWNoZU5hbWU6IFwiZHluYW1pYy1hc3NldHNcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0pIGFzIHVua25vd24gYXMgUGx1Z2luT3B0aW9uLFxyXG4gIF0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBzYXNzT3B0aW9uczoge1xyXG4gICAgICAgICAgYXBpOiBcIm1vZGVybi1jb21waWxlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICAgIFwiQGFwcFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2FwcFwiKSxcclxuICAgICAgXCJAcGFnZXNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9wYWdlc1wiKSxcclxuICAgICAgXCJAd2lkZ2V0c1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3dpZGdldHNcIiksXHJcbiAgICAgIFwiQGZlYXR1cmVzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvZmVhdHVyZXNcIiksXHJcbiAgICAgIFwiQGVudGl0aWVzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvZW50aXRpZXNcIiksXHJcbiAgICAgIFwiQHNoYXJlZFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3NoYXJlZFwiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL2FwaSc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwczovL2Zhc3Rmb29kLXRpcHMucnUnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICBzZWN1cmU6IGZhbHNlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaG1yOiB7IG92ZXJsYXk6IHRydWUgfSxcclxuICAgIGZzOiB7XHJcbiAgICAgIGFsbG93OiBbXCIuLlwiXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBvcHRpbWl6ZURlcHM6IHsgaW5jbHVkZTogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJ3b3JrYm94LXdpbmRvd1wiXSB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICB0YXJnZXQ6IFwiZXNuZXh0XCIsXHJcbiAgICBvdXREaXI6IFwiZGlzdFwiLFxyXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDAsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXCJ3b3JrYm94LXdpbmRvd1wiXSxcclxuICAgICAgaW5wdXQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXguaHRtbFwiKSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkLnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXS5zcGxpdChcIi9cIilbMF1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV0tW2hhc2hdLmpzXCIsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxyXG4gIH0sXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxPQUFPLFlBQVk7QUFDblIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFrQztBQUMzQyxPQUFPLGlCQUFpQjtBQUN4QixTQUFTLGVBQWU7QUFDeEIsT0FBTyxhQUFhO0FBTnBCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVEsRUFBRSxVQUFVLDJCQUEyQixDQUFDO0FBQUEsSUFDaEQsWUFBWSxFQUFFLFdBQVcsT0FBTyxDQUFDO0FBQUEsSUFDakMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxZQUFZLFdBQVcsRUFBRSxDQUFDO0FBQUEsSUFDN0MsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGVBQWUsWUFBWTtBQUFBLE1BQzNDLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxnQkFBZ0I7QUFBQSxVQUNkO0FBQUEsWUFDRSxZQUFZO0FBQUEsWUFDWixTQUFTO0FBQUEsWUFDVCxTQUFTO0FBQUEsY0FDUCxXQUFXO0FBQUEsY0FDWCxZQUFZO0FBQUEsZ0JBQ1YsWUFBWTtBQUFBLGdCQUNaLGVBQWUsS0FBSyxLQUFLLEtBQUs7QUFBQSxjQUNoQztBQUFBLGNBQ0EsbUJBQW1CO0FBQUEsZ0JBQ2pCLFVBQVUsQ0FBQyxHQUFHO0FBQUEsY0FDaEI7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxjQUNQLFdBQVc7QUFBQSxZQUNiO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osYUFBYTtBQUFBLFVBQ1gsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxRQUFRLEtBQUssUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDM0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQy9DLFlBQVksS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUNuRCxhQUFhLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUNyRCxhQUFhLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUNyRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsUUFDUixTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUssRUFBRSxTQUFTLEtBQUs7QUFBQSxJQUNyQixJQUFJO0FBQUEsTUFDRixPQUFPLENBQUMsSUFBSTtBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjLEVBQUUsU0FBUyxDQUFDLFNBQVMsYUFBYSxnQkFBZ0IsRUFBRTtBQUFBLEVBQ2xFLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLG1CQUFtQjtBQUFBLElBQ25CLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxnQkFBZ0I7QUFBQSxNQUMzQixPQUFPLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDM0MsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPLEdBQUcsTUFBTSxlQUFlLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFBQSxVQUNsRDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
