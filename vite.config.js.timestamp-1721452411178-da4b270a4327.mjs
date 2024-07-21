// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/K12J0/OneDrive/%E6%A1%8C%E9%9D%A2/%E7%B7%B4%E7%BF%92%E5%A4%A7%E7%B6%B1/%E5%88%87%E6%9D%BF/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%991/%E7%AC%AC%E4%B8%89%E5%9B%9B%E9%80%B1-%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/wee3to4Homework/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/K12J0/OneDrive/%E6%A1%8C%E9%9D%A2/%E7%B7%B4%E7%BF%92%E5%A4%A7%E7%B6%B1/%E5%88%87%E6%9D%BF/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%991/%E7%AC%AC%E4%B8%89%E5%9B%9B%E9%80%B1-%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/wee3to4Homework/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/K12J0/OneDrive/%E6%A1%8C%E9%9D%A2/%E7%B7%B4%E7%BF%92%E5%A4%A7%E7%B6%B1/%E5%88%87%E6%9D%BF/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%991/%E7%AC%AC%E4%B8%89%E5%9B%9B%E9%80%B1-%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/wee3to4Homework/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/K12J0/OneDrive/%E6%A1%8C%E9%9D%A2/%E7%B7%B4%E7%BF%92%E5%A4%A7%E7%B6%B1/%E5%88%87%E6%9D%BF/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%991/%E7%AC%AC%E4%B8%89%E5%9B%9B%E9%80%B1-%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/wee3to4Homework/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLMTJKMFxcXFxPbmVEcml2ZVxcXFxcdTY4NENcdTk3NjJcXFxcXHU3REY0XHU3RkQyXHU1OTI3XHU3REIxXFxcXFx1NTIwN1x1Njc3RlxcXFxcdTRFM0JcdTdEREFcdTRFRkJcdTUyRDkxXFxcXFx1N0IyQ1x1NEUwOVx1NTZEQlx1OTAzMS1cdTRFM0JcdTdEREFcdTRFRkJcdTUyRDlcXFxcd2VlM3RvNEhvbWV3b3JrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLMTJKMFxcXFxPbmVEcml2ZVxcXFxcdTY4NENcdTk3NjJcXFxcXHU3REY0XHU3RkQyXHU1OTI3XHU3REIxXFxcXFx1NTIwN1x1Njc3RlxcXFxcdTRFM0JcdTdEREFcdTRFRkJcdTUyRDkxXFxcXFx1N0IyQ1x1NEUwOVx1NTZEQlx1OTAzMS1cdTRFM0JcdTdEREFcdTRFRkJcdTUyRDlcXFxcd2VlM3RvNEhvbWV3b3JrXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9LMTJKMC9PbmVEcml2ZS8lRTYlQTElOEMlRTklOUQlQTIvJUU3JUI3JUI0JUU3JUJGJTkyJUU1JUE0JUE3JUU3JUI2JUIxLyVFNSU4OCU4NyVFNiU5RCVCRi8lRTQlQjglQkIlRTclQjclOUElRTQlQkIlQkIlRTUlOEIlOTkxLyVFNyVBQyVBQyVFNCVCOCU4OSVFNSU5QiU5QiVFOSU4MCVCMS0lRTQlQjglQkIlRTclQjclOUElRTQlQkIlQkIlRTUlOEIlOTkvd2VlM3RvNEhvbWV3b3JrL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlRGV2VG9vbHMoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNGlCLFNBQVMsZUFBZSxXQUFXO0FBRS9rQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKdU8sSUFBTSwyQ0FBMkM7QUFPaFQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
