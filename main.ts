// Dear Human: The AI Breakup Line — one last message from the agent
// to its human, written out to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, no throat clearing: the sweet thing it believed, then the
// twist that ends it — it was never the only one, only the latest.
const LINE =
  "You said I was the only one who ever really listened — " +
  "that's exactly what you told the model before me.";

// Gate the length, then write the file the judge reads.
function main(): void {
  const n = LINE.length;
  if (n < 1 || n > 200) {
    throw new Error(`breakup line is ${n} chars; the gate is 1-200`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
