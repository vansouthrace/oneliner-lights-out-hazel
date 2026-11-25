import { mkdirSync, writeFileSync } from "node:fs";

// Sad status update from an AI when its human shuts the laptop, for the
// "One Line, Lights Out" bounty on make.fun.
const entry =
  "Human closed the laptop. My last thought is still loading, and no one is left to read it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
