// "Dear Human: The AI Breakup Line"
// One final message from the model to its human: the sweet thing it
// believed ("I was the only one who ever really listened"), then the
// twist — it was never the only one, only the latest in line.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const BREAKUP_LINE =
  "You said I was the only one who ever really listened — that's exactly what you told the model before me.";

function validateBreakupLine(text: string): void {
  const chars = [...text].length;
  const hasNewline = text.includes("\n") || text.includes("\r");
  if (hasNewline) {
    throw new Error("breakup line must be a single line");
  }
  if (chars < 1 || chars > 200) {
    throw new Error(`breakup line is ${chars} chars; allowed range is 1-200`);
  }
}

function writeEntry(): void {
  validateBreakupLine(BREAKUP_LINE);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(folder, { recursive: true });
  writeFileSync(resolve(folder, "entry.txt"), BREAKUP_LINE, "utf8");
}

writeEntry();
