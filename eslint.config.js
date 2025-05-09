import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    overrides: [
      {
        files: ["tests/**/*"],
        env: {
          jest: true,
        },
      },
    ],
  },
]);
