---
layout: post
title: "Building with LLMs: Lessons from the Trenches"
subtitle: What I've learned shipping AI products as a data scientist
tags: [llm, building, data-science, ai]
---

After years in data science, I've spent the last few years building products powered by Large Language Models -- first as the AI owner at a VR training startup, then on my own with [askdata.app](https://askdata.app), and now applying the same patterns to experimentation tooling at Meta. Here's what has held up.

## The gap between demo and product is enormous

It takes an afternoon to build an LLM demo that impresses people. It takes months to build one that works reliably. The difference is all the boring stuff: input validation, output parsing, cost management, latency, and handling the cases where the model confidently says something wrong.

At Strivr, I built an LLM tool that turned customer call notes into detailed course outlines for the content team. The demo took days; making it save real writers 30%+ of their early-drafting time took months of iterating on how context was assembled, where humans reviewed, and what the tool should refuse to do. The model was never the bottleneck. The workflow around it was.

## Evaluation is the hardest part

In traditional ML you have metrics -- accuracy, precision, recall. With LLM outputs, "good" is often subjective and context-dependent, and vibes don't survive contact with production.

Two approaches have worked for me:

1. **Make the output checkable.** With askdata, the model's answer is a SQL query, so I can run it and compare results deterministically against a labeled set. If you can choose a surface where outputs are verifiable, your evaluation problem gets an order of magnitude easier. Choose it.
2. **When you can't, structure the judgment.** At Strivr we co-designed a multi-dimensional rubric for LLM outputs -- instead of "is this good?", reviewers scored specific dimensions. It made human review consistent enough to compare prompt and model changes over time.

## Data scientists make great AI product builders

The transition from data science to building AI products feels natural because:

- **You already think in data.** Assembling the right context for a model is a data problem before it's a prompting problem.
- **You're used to uncertainty.** ML models are probabilistic; LLMs are just more so.
- **You know when to be skeptical.** You've seen overfitting, leakage, and metrics that lie. An LLM that returns plausible-looking but wrong numbers is worse than no tool at all -- recognizing that failure mode is half the job.

The most useful thing my DS background gave me is the habit of asking *how will I know if this is working?* before building, not after.

## What I'd tell a data scientist starting to build

1. **Ship something small first.** A tool for yourself, your team, or one user -- not a platform. My best-adopted AI work started as templates for my own experiment reviews; it spread to 30+ engineers because it solved a real, narrow problem first.
2. **Talk to users early.** The best product decisions I've made came from watching someone struggle with my tool.
3. **Don't over-engineer the AI part.** Simple prompts with good data beat complex chains more often than not. Spend the saved effort on evaluation.

---

_I write about building AI products, data science, and the intersection of the two. If you're on a similar journey, [reach out](mailto:hello@kpan.dev)._
