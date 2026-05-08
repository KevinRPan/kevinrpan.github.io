---
layout: post
title: "How We Use AI in Our Data Science Workflow"
subtitle: "A candid look at what's actually changed, what's broken us, and what's next"
tags: [ai, data-science, llm, workflow, tools]
---

Something shifted over the last couple of years. Not incrementally — fundamentally. The way I approach data science work today looks almost unrecognizable compared to two years ago, and the through-line is AI.

This isn't a post about the hype. It's about what we actually do, what's burned us, and where we think this is going.

## What we actually use

We're not power users of every shiny new AI coding tool. The thing that's genuinely changed our workflow is building **custom LLM pipelines** — using model APIs to solve specific, recurring problems in our data work rather than reaching for general-purpose chat interfaces.

The difference matters. A general chatbot gives you a general answer. A pipeline built around your data, your schema, and your team's questions gives you something you can actually trust (or at least, learn to calibrate).

## The biggest win: query generation at scale

The part of our workflow that AI has changed the most is analysis and exploration — specifically, **generating queries to answer ad hoc questions**.

Before, every new business question required someone to translate it into SQL or pandas, get the schema right, handle the edge cases, and debug when results looked weird. It was slow, and the bottleneck was almost always a human sitting down to write code.

Now, we describe the question in plain language, let the model draft the query, and spend our energy on the thing that actually matters: evaluating whether the answer makes sense. The time from "I wonder if..." to "here's a number" has collapsed. That changes what kinds of questions we're willing to ask.

## Where it's burned us

The failure mode we've hit hardest: **code that runs cleanly and returns wrong answers**.

This is worse than code that fails. A failing query is obvious. A query that silently double-counts, applies the wrong filter, or joins on the wrong key — and produces a number that looks roughly plausible — can make it through to a stakeholder deck before anyone catches it.

AI is especially prone to this in data work because the model doesn't know your data. It knows SQL and pandas. It doesn't know that `user_id` in your events table is actually a session ID, or that the `created_at` column has a timezone quirk that will mess up daily aggregations. It'll write confident, clean code that's subtly wrong.

The fix isn't to stop using AI for queries. It's to build in a verification habit: always run your AI-generated queries against a small slice of data where you already know the answer. If the number is right there, you can extend confidence to the full dataset.

## The principle we keep coming back to

**You're still the analyst.**

AI is fast. It's genuinely useful. But it has no idea whether the answer it gave you is right in the context of your actual business, your actual data, and the actual question someone needs answered. That's your job. The speed AI gives you is only valuable if you use it to ask more questions and apply more scrutiny — not to skip the scrutiny.

Use AI for the mechanical parts. Own the interpretation.

## What's next: making the data itself legible to AI

The thing we're most interested in right now isn't a new model or a new tool. It's **helping AI understand our data**.

The core problem is that models reason well about code and language, but they have no built-in understanding of what your tables mean. Every prompt you write is implicitly asking the model to operate blind — or you're copying in column names and hoping that's enough context.

What we want to build toward is structured semantic context: YAML (or similar) files that describe each table, each column, its business meaning, how it's computed, and its known quirks. Feed that alongside every query request, and suddenly the model is working with a map instead of flying blind.

This isn't a new idea — it's basically what a data catalog tries to do for humans. The difference is writing it in a format that an LLM can actually use effectively. A lot of the productivity gains we expect from AI in data science over the next few years will come from this kind of infrastructure work, not from model capability alone.

---

_I write about building with AI, data science, and making sense of data in organizations. If you're thinking through similar problems, [reach out](mailto:hello@kpan.dev)._
