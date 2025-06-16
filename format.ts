#!/usr/bin/env bun

import { $ } from "bun";

console.log("🧹 Formatting code...");

// Use Bun's built-in formatter (when available) or fallback
try {
  // Format TypeScript files
  await $`bunx prettier --write "src/**/*.ts" "*.ts" "*.md" --tab-width 2 --semi --single-quote --trailing-comma es5`;
  console.log("✅ Code formatted successfully!");
} catch (error) {
  console.log("⚠️  Prettier not available, skipping formatting");
}
