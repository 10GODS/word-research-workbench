# Word Research Workbench — Public Beta POC

> **Microsoft Word research add-in concept · local-first AI · citation workflow · Google Scholar lookup · research integrity utilities**

[![Status: Public Beta](https://img.shields.io/badge/status-public%20beta-orange)](#status)
[![Platform: Microsoft Word on Windows](https://img.shields.io/badge/platform-Microsoft%20Word%20%7C%20Windows-blue)](#what-the-poc-demonstrates)
[![Privacy: Local-first](https://img.shields.io/badge/privacy-local--first-success)](#privacy-and-public-boundary)

## Overview

**Word Research Workbench** is an experimental Microsoft Word research-workflow project exploring how academic writing, scholarly lookup, citation checking, local/offline language processing, and research-integrity support can live in one Word-native workspace.

The current repository is a **public proof of concept (POC)**. It is intended for researchers, academic writers, Office.js developers, research-software engineers, potential collaborators, and organizations interested in privacy-first research tooling for Microsoft Word.

### Search / discovery terms

Microsoft Word research add-in · Office.js research tools · academic writing assistant · local AI in Word · offline research assistant · CPU language model · Intel OpenVINO · citation management · Google Scholar workflow · Crossref verification · manuscript editing · reference checking · research integrity · scholarly writing software · Windows research productivity.

## What the POC demonstrates

- **Word-style research task pane** for a unified researcher workflow.
- **Local CPU processing concept** for offline/private text assistance.
- **Intel OpenVINO / integrated-GPU experimentation** as an optional acceleration path.
- **Natural-writing and editing workspaces** as separate beta tools.
- **Citation and reference workflow** designed around manual researcher approval.
- **Google Scholar lookup workflow** for manual scholarly verification and entry.
- **Research-integrity utilities** and evidence-oriented workflow concepts.
- **Optional web workspaces** that keep browsing separate from the core local workflow.
- **Minimal saved notepad** for small research notes.

The production system contains additional private implementation work that is deliberately not published in this repository.

## Early beta proof

The current Word prototype has been tested as a real task-pane workflow on Windows. Selected screenshots are being added to this repository as public-beta evidence while keeping implementation internals and private research material out of the public codebase.

An external AI-text detector result, when shown anywhere in project material, is **illustrative only**. Detector scores are not treated as proof of authorship and are not a product guarantee.

## Why this project exists

Researchers often move repeatedly between Microsoft Word, citation databases, browsers, AI tools, notes, reference managers, and integrity checks. This project explores a more compact workflow where the researcher can remain inside Word for most of that process while preserving manual control over evidence, citations, and final manuscript changes.

A second goal is **local-first processing**. Where practical, manuscript text should stay on the user's machine rather than being automatically sent to external services. External services should be invoked only when the user intentionally chooses them.

## Proof-of-concept demo

Open [`demo/index.html`](demo/index.html) to view the self-contained mock POC. It uses mock content and does **not** upload manuscript text or expose the private production implementation.

See [`docs/POC.md`](docs/POC.md) for the current public scope.

## Privacy and public boundary

This repository intentionally does **not** publish:

- production Word add-in source,
- model weights/checkpoints,
- private prompts or transformation rules,
- unpublished research-integrity logic,
- API keys, credentials, certificates, or signing material,
- full private citation/retrieval backend,
- production installer/updater infrastructure,
- user manuscripts, logs, databases, or generated research content.

Read [`PUBLIC_POC_BOUNDARY.md`](PUBLIC_POC_BOUNDARY.md) and [`PUBLIC_BETA_NOTICE.md`](PUBLIC_BETA_NOTICE.md) before reusing or contributing to this project.

## Collaboration

Contributions and beta testing are welcome in focused areas such as:

- Microsoft Word / Office.js task-pane engineering,
- Office Dialog API and WebView2 behavior,
- Windows installation/update reliability,
- CPU-first local inference,
- Intel OpenVINO testing,
- citation and scholarly-workflow UX,
- accessibility,
- privacy/security review,
- QA across Windows and Microsoft 365 versions.

Start with [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`COLLABORATION.md`](COLLABORATION.md). Public contributions do not imply access to unpublished/private components.

## Sponsorship and research partnerships

The project is open to discussions around:

- academic pilot studies,
- institutional research partnerships,
- Windows/Office test hardware,
- Intel CPU/iGPU and OpenVINO optimization,
- Microsoft 365 testing environments,
- research-software engineering support,
- accessibility and UI/UX review,
- privacy/security review,
- controlled API/retrieval testing support.

See [`SPONSORSHIP.md`](SPONSORSHIP.md).

## Contact

For collaboration, sponsorship, pilot studies, or research-software partnerships, use [`CONTACT.md`](CONTACT.md) or open a GitHub issue using one of the repository templates.

Repository owner: **[@10GODS](https://github.com/10GODS)**

Please do not post unpublished manuscripts, credentials, API keys, private research data, or confidential implementation details in public issues.

## Security

See [`SECURITY.md`](SECURITY.md) before reporting privacy or security concerns.

## Roadmap

- **Public POC** — demonstrate the Word-native research-workbench concept.
- **Beta stabilization** — improve installation, refresh/update reliability, error reporting, and Word-version compatibility.
- **Local inference evaluation** — benchmark CPU/OpenVINO paths and factual-surface preservation on representative research text.
- **Citation workflow refinement** — improve manual verification, reference insertion, and provenance-aware checks.
- **Broader beta testing** — gather reproducible feedback across different Windows and Microsoft 365 environments.
- **Stable release planning** — define packaging, licensing, support, security, and public/private component boundaries.

## Status

**Public beta / proof of concept.** APIs, naming, UX, architecture, and implementation may change. This repository is a showcase and collaboration surface, not the complete production source tree.

## Project discovery

Additional search/discovery phrases are documented in [`SEO_KEYWORDS.md`](SEO_KEYWORDS.md).

---

Maintained by **@10GODS**.
