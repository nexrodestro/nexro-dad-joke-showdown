import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Why did the dad bring a ladder to the barbecue? He heard the steaks were high.";

// Gate: single line, 1-200 characters, no trailing newline.
const chars = [...JOKE];
if (chars.length < 1 || chars.length > 200 || JOKE.includes("\n")) {
  throw new Error(`joke must be 1-200 chars on one line, got ${chars.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
