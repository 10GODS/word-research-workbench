# Word Research Workbench — Public Beta POC

> **Microsoft Word research add-in concept · local-first AI · citation workflow · Google Scholar lookup · research integrity utilities**

[![Status: Public Beta](https://img.shields.io/badge/status-public%20beta-orange)](#status)
[![Platform: Microsoft Word on Windows](https://img.shields.io/badge/platform-Microsoft%20Word%20%7C%20Windows-blue)](#what-the-poc-demonstrates)
[![Privacy: Local-first](https://img.shields.io/badge/privacy-local--first-success)](#privacy-and-public-boundary)
[![Collaboration: Welcome](https://img.shields.io/badge/collaboration-welcome-brightgreen)](#get-involved)

## Overview

**Word Research Workbench** is an experimental Microsoft Word research-workflow project exploring how academic writing, scholarly lookup, citation checking, local/offline language processing, research-integrity support, and optional web workspaces can live in one Word-native environment.

The current repository is a **public proof of concept (POC)** for researchers, academic writers, Office.js developers, research-software engineers, institutions, potential collaborators, and organizations interested in privacy-first research tooling for Microsoft Word.

**Interested in helping or partnering?** See [Get involved](#get-involved), [`CONTACT.md`](CONTACT.md), and [`SPONSORSHIP.md`](SPONSORSHIP.md).

## Early beta proof

![Word Research Workbench local T5 beta interface](assets/screenshots/01-word-local-t5-panel.jpg)

The current Word prototype has been tested as a real task-pane workflow on Windows. Public screenshots demonstrate the interface and local-processing direction while implementation internals, private model assets, unpublished research logic, and user data remain outside this repository.

An external AI-text detector result, when shown anywhere in project material, is **illustrative only**. Detector scores are not treated as proof of authorship and are not a product guarantee.

## What the POC demonstrates

- **Microsoft Word / Office.js task-pane workflow** for a unified researcher workspace.
- **Local CPU language processing** for offline/private text assistance.
- **Intel OpenVINO / integrated-GPU experimentation** as an optional acceleration path.
- **Natural-writing and editing workspaces** as separate beta tools.
- **Citation and reference workflow** designed around manual researcher approval.
- **Google Scholar lookup workflow** for manual scholarly verification and entry.
- **Crossref-oriented citation verification concepts** and reference-health checks.
- **Research-integrity utilities** and evidence-oriented workflow concepts.
- **Optional web workspaces** that keep browsing separate from the core local workflow.
- **Minimal saved notepad** for small research notes.

The production system contains additional private implementation work that is deliberately not published here.

## Why this project exists

Researchers often move repeatedly between Microsoft Word, citation databases, browsers, AI tools, notes, reference managers, and integrity checks. This project explores a more compact workflow where the researcher can remain inside Word for most of that process while preserving manual control over evidence, citations, and final manuscript changes.

A second goal is **local-first processing**. Where practical, manuscript text should stay on the user's machine rather than being automatically sent to external services. External services should be invoked only when the user intentionally chooses them.

## Proof-of-concept demo

Open [`demo/index.html`](demo/index.html) to view the self-contained mock POC. It uses mock content and does **not** upload manuscript text or expose the private production implementation.

See [`docs/POC.md`](docs/POC.md) for the current public scope.

## Search / discovery terms

This project is relevant to searches around:

**Microsoft Word research add-in**, **Office.js research tools**, **academic writing assistant**, **local AI in Word**, **offline research assistant**, **CPU language model**, **Intel OpenVINO**, **citation management**, **Google Scholar workflow**, **Crossref citation verification**, **manuscript editing**, **reference checking**, **research integrity**, **scholarly writing software**, **research software engineering**, and **Windows research productivity**.

Additional discovery terms are maintained in [`SEO_KEYWORDS.md`](SEO_KEYWORDS.md).

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

Read [`PUBLIC_POC_BOUNDARY.md`](PUBLIC_POC_BOUNDARY.md), [`PUBLIC_BETA_NOTICE.md`](PUBLIC_BETA_NOTICE.md), and [`LICENSE-NOTICE.md`](LICENSE-NOTICE.md) before reusing or contributing.

## Get involved

The project is actively looking for **collaborators, beta testers, academic pilot partners, and sponsors/research partners**.

Useful contribution areas include:

- Microsoft Word / Office.js task-pane engineering,
- Office Dialog API and WebView2 behavior,
- Windows installation/update reliability,
- CPU-first local inference,
- Intel OpenVINO testing and optimization,
- citation and scholarly-workflow UX,
- research-integrity workflow review,
- accessibility and UI/UX,
- privacy/security review,
- QA across Windows and Microsoft 365 versions.

Start with [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`COLLABORATION.md`](COLLABORATION.md).

### Collaboration contact

Open a **Collaboration** issue from the repository issue templates and briefly describe your experience, what you want to help with, and your Windows / Microsoft Word test environment if relevant.

### Sponsorship / research partnership

The project welcomes discussions around academic pilot studies, institutional collaboration, Windows/Office test hardware, Intel CPU/iGPU and OpenVINO optimization, Microsoft 365 testing environments, research-software engineering support, accessibility/UI review, privacy/security review, and controlled API/retrieval testing support.

See [`SPONSORSHIP.md`](SPONSORSHIP.md) or open a **Partnership** issue.

## Contact

For collaboration, sponsorship, pilot studies, research-software partnerships, or institutional interest:

- use [`CONTACT.md`](CONTACT.md),
- open a GitHub issue using the repository templates,
- or contact the repository owner through **[@10GODS](https://github.com/10GODS)**.

For sensitive discussions, use a public issue only to request private follow-up. Do **not** post unpublished manuscripts, credentials, API keys, private research data, or confidential implementation details in public issues.

## Security

See [`SECURITY.md`](SECURITY.md) before reporting privacy or security concerns.

## Roadmap

- **Public POC** — demonstrate the Word-native research-workbench concept.
- **Beta stabilization** — improve installation, refresh/update reliability, error reporting, and Word-version compatibility.
- **Local inference evaluation** — benchmark CPU/OpenVINO paths and factual-surface preservation on representative research text.
- **Citation workflow refinement** — improve manual verification, reference insertion, and provenance-aware checks.
- **Broader beta testing** — gather reproducible feedback across different Windows and Microsoft 365 environments.
- **Stable release planning** — define packaging, licensing, support, security, and public/private component boundaries.

See [`ROADMAP.md`](ROADMAP.md) for the expanded roadmap.

## Citation

For academic or research-software references, see [`CITATION.cff`](CITATION.cff).

## Status

**Public beta / proof of concept.** APIs, naming, UX, architecture, and implementation may change. This repository is a showcase and collaboration surface, not the complete production source tree.

---

Maintained by **[@10GODS](https://github.com/10GODS)** · collaboration and partnership enquiries welcome.
