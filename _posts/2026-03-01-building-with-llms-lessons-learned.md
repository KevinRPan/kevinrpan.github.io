---
layout: post
title: "Building with LLMs: Lessons from the Trenches"
subtitle: What I've learned shipping AI products as a data scientist
tags: [llm, building, data-science, ai]
published: false
---

_This is a draft starter post -- fill in with your real experiences and ship it!_

After years of working in data science, I've spent the last couple of years building products powered by Large Language Models. Here's what I've learned.

## The gap between demo and product is enormous

It takes an afternoon to build an LLM demo that impresses people. It takes months to build one that works reliably. The difference is all the boring stuff: input validation, output parsing, cost management, latency optimization, and handling the cases where the model confidently says something wrong.

<!-- Share a specific example from your work -- what broke between demo and production? -->

## Evaluation is the hardest part

In traditional ML, you have metrics. Accuracy, precision, recall -- you can put a number on how well your model is doing. With LLM outputs, "good" is often subjective and context-dependent.

<!-- What evaluation approaches have you found effective? Human review, LLM-as-judge, specific metrics? -->

## Data scientists make great AI product builders

The transition from data science to building AI products feels natural because:

- **You already think in data** -- You know how to understand what data you have, what it means, and what's missing
- **You're used to uncertainty** -- ML models are probabilistic; so are LLMs, just more so
- **You know when to be skeptical** -- You've seen overfitting, data leakage, and metrics that lie

<!-- Add your personal angle: what from your DS background has been most valuable? -->

## What I'd tell a data scientist starting to build

1. **Ship something small first** -- A tool for yourself, your team, or one user. Not a platform.
2. **Talk to users early** -- The best product decisions I've made came from watching someone struggle with my tool.
3. **Don't over-engineer the AI part** -- Simple prompts with good data often beat complex chains.

<!-- Expand on these with real examples from your experience -->

---

_I write about building AI products, data science, and the intersection of the two. If you're on a similar journey, [reach out](mailto:hello@kpan.dev)._
