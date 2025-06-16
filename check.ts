#!/usr/bin/env bun

import { $ } from "bun";

console.log("🧪 Running comprehensive checks...");

try {
  // 1. Type checking
  console.log("📝 Type checking...");
  await $`bunx tsc --noEmit`;
  
  // 2. Run tests
  console.log("🧪 Running tests...");
  await $`bun test`;
  
  // 3. Check test coverage
  console.log("📊 Checking test coverage...");
  await $`bun test --coverage`;
  
  console.log("✅ All checks passed!");
} catch (error) {
  console.error("❌ Checks failed");
  process.exit(1);
}
