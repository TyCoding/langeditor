import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import path from "path";

const resolve = (dir: string) => path.join(__dirname, dir);

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve("src"),
		},
		extensions: [".js", ".json", ".vue", ".ts"],
	},
	build: {
		lib: {
			name: "LangEditor",
			// @ts-ignore
			entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
			formats: ["es", "cjs", "iife"],
			fileName: (format) => {
				switch (format) {
					case "es":
						return "index.mjs";
					case "cjs":
						return "index.cjs";
					case "iife":
						return "index.js";
					default:
						return "index.js";
				}
			},
		},
		minify: true,
		rollupOptions: {
			external: ["vue", "animate.css", "katex", "lowlight"],
			output: {
				exports: "named",
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});
