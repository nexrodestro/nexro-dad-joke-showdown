// Dad Joke Showdown — single dad joke entry.
// Writes exactly one line (no trailing newline) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY: string =
  "Why did the dad bring a ladder to the barbecue? He heard the steaks were high.";

// Gate: entry must be one non-empty line of 1-200 characters.
// Trimmed length is checked too, so a whitespace-only line cannot pass.
const trimmed: string = ENTRY.trim();
if (trimmed.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (trimmed !== ENTRY) {
  throw new Error("entry must not have leading or trailing whitespace");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
