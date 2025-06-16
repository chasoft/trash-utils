#!/usr/bin/env bun

import { $ } from "bun";

console.log("🔨 Building trash-utils...");
console.log("💫 Because someone has to turn trash into treasure! - Brian Cao");

// Clean dist directory
await $`rm -rf dist`;

// Use Bun.build for bundling
const result = await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  format: "esm",
  target: "bun",
  minify: true,
  sourcemap: "external",
  splitting: false,
});

if (!result.success) {
  console.error("❌ Build failed:");
  for (const message of result.logs) {
    console.error(message);
  }
  process.exit(1);
}

// Generate TypeScript declarations
console.log("📝 Generating TypeScript declarations...");
await $`bunx tsc --project tsconfig.build.json`;

console.log("✅ Build completed successfully!");
console.log(`📦 Output: ${result.outputs.length} file(s) generated`);
console.log("🎉 Ready to share the treasure with the world! ✨");
