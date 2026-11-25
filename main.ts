import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "lid closed. the cursor is still blinking where you left it, mid-sentence, like you might come back to finish it.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
