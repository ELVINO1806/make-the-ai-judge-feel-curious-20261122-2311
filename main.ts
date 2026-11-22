// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt.
// One concrete image that opens a mystery and does not answer it:
// a drawer that opens itself, a photograph never seen, a room never
// entered, someone holding your coat. Plain words, slow rhythm.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The drawer you never open has started opening itself at night. " +
  "This morning there was a photograph inside it that you have never seen, " +
  "of a room you have never entered, and someone in it is holding your coat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
