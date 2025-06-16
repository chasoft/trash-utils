#!/usr/bin/env bun

import { $ } from "bun";

console.log("🔍 Linting code...");

try {
  // Type checking with TypeScript
  console.log("📝 Type checking...");
  await $`bunx tsc --noEmit`;
  
  console.log("✅ Linting completed successfully!");
} catch (error) {
  console.error("❌ Linting failed");
  process.exit(1);
}
