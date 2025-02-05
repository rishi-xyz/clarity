import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

export default {
  ...sharedConfig,
  content:[
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ]
} satisfies Config;
