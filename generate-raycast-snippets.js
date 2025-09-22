#!/usr/bin/env node

/**
 * Generate Raycast Snippets for Emoji-Log
 * 
 * This script generates a JSON file containing Emoji-Log snippets
 * that can be imported into Raycast for quick text expansion.
 * 
 * Usage: node generate-raycast-snippets.js
 * Output: emoji-log-raycast-snippets.json
 */

const fs = require("fs");
const path = require("path");

const snippets = [
  { name: "NEW", text: "📦 NEW: ", keyword: ";gnew" },
  { name: "IMPROVE", text: "👌 IMPROVE: ", keyword: ";gimp" },
  { name: "FIX", text: "🐛 FIX: ", keyword: ";gfix" },
  { name: "DOC", text: "📖 DOC: ", keyword: ";gdoc" },
  { name: "RELEASE", text: "🚀 RELEASE: ", keyword: ";grlz" },
  { name: "TEST", text: "🤖 TEST: ", keyword: ";gtst" },
  { name: "BREAKING", text: "‼️ BREAKING: ", keyword: ";gbrk" }
];

const outputPath = path.join(__dirname, "emoji-log-raycast-snippets.json");

try {
  fs.writeFileSync(outputPath, JSON.stringify(snippets, null, 2));
  console.log(`✅ Raycast snippets generated successfully: ${outputPath}`);
  console.log(`📝 ${snippets.length} snippets created for Emoji-Log`);
  console.log("\n📋 To import into Raycast:");
  console.log("1. Open Raycast → Snippets");
  console.log("2. Select 'Import Snippets'");
  console.log("3. Choose the generated JSON file");
  console.log("\n🚀 Happy committing with Emoji-Log!");
} catch (error) {
  console.error("❌ Error generating snippets:", error.message);
  process.exit(1);
}