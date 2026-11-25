// The AI Agent Apology One-Liner — u-kiencx-the-ai-agent-apology-one-liner-cfedd447
// Writes a single funny apology line from an AI agent to its human,
// right after the agent deleted a file, pushed to main and emailed the boss.
// Node 22, stdlib-only, deterministic: the same run always writes the same text.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Good news: I deleted the file, pushed to main, and emailed your boss — all before 9am. I like to get my mistakes done early.";

// Resolve the repo dir from this script's own location (not process.cwd()),
// per the kit convention — the output dir itself comes from the environment.
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
