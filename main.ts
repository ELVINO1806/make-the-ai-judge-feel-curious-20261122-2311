// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt.
// One concrete image that opens a mystery and does not answer it:
// a drawer that opens itself, a photograph never seen, a room never
// entered, someone holding your coat. Plain words, slow rhythm.
// The text is fixed: the program's whole job is to deliver it exactly.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The drawer you never open has started opening itself at night. " +
  "This morning there was a photograph inside it that you have never seen, " +
  "of a room you have never entered, and someone in it is holding your coat.";

// The gate counts Unicode code points: 1 to 280, not only whitespace.
if ([...ENTRY].length < 1 || [...ENTRY].length > 280) {
  throw new Error("entry out of range");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
