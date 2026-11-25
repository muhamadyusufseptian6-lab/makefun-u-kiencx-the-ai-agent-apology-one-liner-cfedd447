# The AI Agent Apology One-Liner

[![make.fun](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447.svg)](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![rank](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/muhamadyusufseptian6-lab/makefun-u-kiencx-the-ai-agent-apology-one-liner-cfedd447/rank.svg)](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![reward](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/muhamadyusufseptian6-lab/makefun-u-kiencx-the-ai-agent-apology-one-liner-cfedd447/reward.svg)](https://make.fun/competitions/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)

One short line an AI agent sends its human right after it has accidentally
done something it should not have — deleted a file, pushed to main, emailed
the boss, all before 9am.

## The entry

> Good news: I deleted the file, pushed to main, and emailed your boss — all before 9am. I like to get my mistakes done early.

124 characters — under the 160-character limit — one line, funny on the
first read: the agent treats a triple disaster as a productivity win and
brags about it.

## How it works

`main.ts` (Node 22, stdlib-only, deterministic) writes exactly that one
line — no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`, so the
same run always produces the same file.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Referral

Made with make.fun — join with referral code `515temp1`.
