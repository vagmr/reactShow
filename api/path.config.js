import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"
// https://vitejs.dev/config/
export default defineConfig({
    base: "/", // 添加前缀路径
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
})