import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      sourcemap: true,
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => ["navbar"].includes(tag),
          },
        },
      }),
      eslintPlugin(),
    ],
    server: {
      host: "0.0.0.0",
    },
    resolve: {
      alias: {
        "@dynamicRoutes": path.resolve(
          __dirname,
          "src",
          "router",
          `${process.env.VITE_PROJECT_TYPE}.ts`
        ),
      },
    },
  });
};
