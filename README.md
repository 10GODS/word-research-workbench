# Research Workbench — Private Beta POC

> **CONFIDENTIAL / PRIVATE BETA**
>
> This repository is intentionally private. It contains a proof-of-concept shell only. Core implementation details, model assets, prompts, heuristics, credentials, production packaging, and unpublished research logic are deliberately excluded.

## Purpose

This beta demonstrates a Microsoft Word research-workbench concept with a compact task pane, in-Word web workspaces, manual scholarly citation entry, a minimal saved notepad, and a local-processing hook. The aim of this repository is to show the product direction to trusted collaborators or potential sponsors without disclosing the full implementation.

## Proof of concept

Open [`demo/index.html`](demo/index.html) to view the self-contained POC. It uses mock content and does **not** upload manuscript text or expose the private production code.

The POC demonstrates:

- **Web Workspace 1** — embedded writing/research browser concept.
- **Web Workspace 2** — embedded AI/research browser concept.
- **Scholar Workspace** — Google Scholar lookup with manual citation/reference entry.
- **Minimal Notepad** — one text area and one Save button.
- **Local Processing Hook** — CPU-first/offline processing slot shown without exposing model internals.
- **Word-style task pane UX** — a lightweight visual approximation of the beta workflow.

## What is intentionally not in this repository

- Production Word add-in package
- Model weights
- Private prompts or transformation rules
- API keys or credentials
- Full citation/retrieval backend
- Research-integrity engine internals
- Proprietary packaging/install scripts

## Demo flow

See [`docs/POC.md`](docs/POC.md) and [`docs/VIDEO_DEMO_SCRIPT.md`](docs/VIDEO_DEMO_SCRIPT.md).

## Collaboration

Trusted contributors should read [`COLLABORATION.md`](COLLABORATION.md). Changes should be made on feature branches and merged through pull requests after review.

## Sponsorship / research partnership

See [`SPONSORSHIP.md`](SPONSORSHIP.md). Sponsorship does **not** grant ownership, source-code rights, or access to undisclosed IP unless separately agreed in writing.

## Confidentiality

Do not redistribute, mirror, publish screenshots of private implementation discussions, or share repository contents outside an approved collaboration without written permission from the owner. See [`CONFIDENTIAL.md`](CONFIDENTIAL.md).

## Status

**Private beta / proof of concept.** APIs, UX, naming, and architecture may change.

## Owner

Maintained by **@10GODS**.
