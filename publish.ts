#!/usr/bin/env bun

import { $ } from "bun";

console.log("🚀 Publishing @startdoing/trash-utils to npm...");
console.log("💎 Time to share the treasure with the world! - Brian Cao\n");

try {
  // Step 1: Verify npm login
  console.log("🔐 Verifying npm authentication...");
  const whoami = await $`bunx npm whoami`.text();
  console.log(`✅ Logged in as: ${whoami.trim()}`);

  // Step 2: Run comprehensive checks
  console.log("\n🧪 Running comprehensive checks...");
  await $`bun run check`;
  console.log("✅ All checks passed!");

  // Step 3: Build the package
  console.log("\n🔨 Building the package...");
  await $`bun run build`;
  console.log("✅ Build completed!");

  // Step 4: Check package contents
  console.log("\n📦 Checking package contents...");
  await $`bunx npm pack --dry-run`;

  // Step 5: Confirm publication
  console.log("\n🎯 Ready to publish! Package details:");
  console.log("   📦 Name: @startdoing/trash-utils");
  console.log("   🏷️  Version: 1.0.0");
  console.log("   📝 Description: A collection of common utility functions built with Bun");
  console.log("   👤 Author: Brian Cao");

  // Ask for confirmation
  console.log("\n❓ Do you want to proceed with publishing? (This will be your first npm package! 🎉)");
  console.log("   Type 'yes' to continue, or anything else to cancel:");
  
  // Read user input
  const response = prompt("Proceed? (yes/no): ");
  
  if (response?.toLowerCase() === 'yes') {
    console.log("\n🚀 Publishing to npm...");
    console.log("🔐 Your account has 2FA enabled - OTP required for publishing");
    
    // Ask for OTP
    console.log("\n📱 Please check your authenticator app for the 6-digit code.");
    const otp = prompt("Enter your 2FA code (6 digits): ");
    
    if (!otp || otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      console.log("❌ Invalid OTP format. Please enter a 6-digit number.");
      console.log("💡 Run the script again with a valid OTP code.");
      process.exit(1);
    }
    
    console.log("🔒 Publishing with OTP authentication...");
    await $`bunx npm publish --access public --otp=${otp}`;
    
    console.log("\n🎉 SUCCESS! Package published successfully!");
    console.log("🔗 Your package is now available at:");
    console.log("   📦 https://www.npmjs.com/package/@startdoing/trash-utils");
    console.log("   📖 https://www.npmjs.com/package/@startdoing/trash-utils?activeTab=readme");
    
    console.log("\n📥 Others can now install it with:");
    console.log("   bun add @startdoing/trash-utils");
    console.log("   npm install @startdoing/trash-utils");
    
    console.log("\n🎊 Congratulations on your first published npm package! 🎊");
    console.log("💫 From trash to treasure - mission accomplished! ✨");
    
  } else {
    console.log("\n⏸️  Publication cancelled. Your package is ready when you are!");
    console.log("💡 Run 'bun run publish:npm' again when you're ready to publish.");
  }

} catch (error) {
  console.error("\n❌ Publication failed:");
  console.error(error);
  console.log("\n🔧 Common issues and solutions:");
  console.log("   • Not logged in: Run 'bunx npm login'");
  console.log("   • Invalid OTP: Check your authenticator app and try again");
  console.log("   • Expired OTP: Get a new code from your authenticator app");
  console.log("   • Package name taken: Choose a different name in package.json");
  console.log("   • Version already exists: Bump the version number");
  console.log("   • Network issues: Check your internet connection");
  console.log("   • 2FA not set up: Visit https://www.npmjs.com/settings to enable 2FA");
  
  process.exit(1);
}
