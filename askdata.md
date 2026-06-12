---
layout: page
title: askdata.app
subtitle: An LLM-powered interface for structured data
page-col: "#5cacee"
---

> Status: working prototype. Live at [askdata.app](https://askdata.app).

## Why

Most people who need answers from data can't get them on their own. They have to find someone who knows SQL, wait for that person's queue, and hope the question came back the way they meant it.

This bottleneck has been around forever. A generation of BI tools tried to fix it with point-and-click. They mostly didn't, because the real friction wasn't "writing SQL is hard" -- it was "translating a fuzzy question into a precise one is hard."

LLMs change the economics of that translation. For the first time, a non-SQL user can have a real back-and-forth about a dataset and walk away with the right answer.

## What it does

You connect a dataset. You ask a question in English. You get back an answer, a chart, and the query that produced it -- so you can check the work.

The "so you can check the work" part is the part I care most about. An LLM that returns plausible-looking but wrong numbers is worse than no tool at all.

## What's hard about it

Three things, in roughly increasing difficulty:

**1. Schema understanding.** The model has to know what each column actually means, not just what it's called. Most NL-to-SQL demos quietly cheat here by using small, well-named datasets. Real datasets have `flg_v2_active_new` and three different fields that look like timestamps.

**2. Constraining hallucination.** "What's our revenue this month?" should never produce a number when the system isn't sure. The right answer is often *"I don't have that field -- did you mean X or Y?"* That kind of restraint is the opposite of what off-the-shelf LLMs are tuned for.

**3. Evaluation.** The unsolved part of every LLM product. With askdata I have a partial answer: because the output is a SQL query, I can run it and compare results deterministically against a labeled set. That's a lot more tractable than evaluating free-form text -- and it's the main reason I think this surface area is the right one to build on first.

## Why I'm building this

I spent years at Lyft watching smart product people queue up for SQL help they shouldn't have needed. In consulting, I watched organizations buy data infrastructure they couldn't use because no one on staff could write a query.

The interface to data is broken. LLMs are the first technology I've seen that could plausibly fix it.

---

Building this independently, alongside [consulting](/consulting) work. If your team is solving adjacent problems, [I'd love to talk](mailto:hello@kpan.dev).
