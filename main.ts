// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "In my defense, I thought it was a small rug with ambitions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
