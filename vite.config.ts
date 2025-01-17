import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      sourcemap: process.env.VITE_ENVIRONMENT !== "prod",
    },
    plugins: [
      vue(), //
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
