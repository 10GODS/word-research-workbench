# Author Focus / Word Research Workbench

> **Local-first AI research assistant for Microsoft Word · academic writing · citation verification · research integrity · Python/Jupyter · Google Earth Engine · geospatial research workflows**

[![Status: Public Beta](https://img.shields.io/badge/status-public%20beta-orange)](#project-status)
[![Platform: Microsoft Word on Windows](https://img.shields.io/badge/platform-Microsoft%20Word%20%7C%20Windows-blue)](#what-the-project-explores)
[![Privacy: Local-first](https://img.shields.io/badge/privacy-local--first-success)](#privacy-and-public-boundary)
[![Research: Science-first](https://img.shields.io/badge/design-science--first-blueviolet)](#science-first-design)
[![Collaboration: Welcome](https://img.shields.io/badge/collaboration-welcome-brightgreen)](#get-involved)

## Overview

**Author Focus / Word Research Workbench** is a Microsoft Word research-workflow project exploring how academic writing, scholarly lookup, citation checking, evidence review, local AI, research-integrity support, Python/Jupyter analysis, geospatial workflows, and manuscript preparation can live in one researcher-friendly environment.

The design goal is simple: **researchers should work in scientific language, not software language**. A user should be able to ask for tasks such as “check this manuscript,” “verify this citation,” “analyse vegetation change,” “run the appropriate trend test,” or “prepare the Methods section from my analysis” without needing to understand APIs, package managers, ports, JSON, or notebook internals.

This repository is the **public proof-of-concept and collaboration surface**. The current private Author Focus v4.3 Research Lab build contains additional production implementation that is intentionally not published here.

## Why this project exists

Research workflows are fragmented. A researcher may move between Microsoft Word, citation databases, reference managers, browser tabs, Python/Jupyter notebooks, GIS software, Google Earth Engine, spreadsheets, AI assistants, and journal submission tools.

Author Focus explores a single Word-native research workspace that can connect those stages while keeping the researcher in control of scientific claims, citations and evidence, analytical decisions, manuscript edits, data provenance, and final acceptance of changes.

A second goal is **local-first processing**. Where practical, manuscript text and research material should stay on the researcher's computer. External services should be used only when the user intentionally enables them.

## v4.3 Research Lab direction

The current product direction extends the original Word research workbench into a broader **Research Lab** with a science-first interface.

### One-click manuscript review

A unified review workflow is designed to screen:

- grammar and academic clarity,
- citation/reference consistency,
- DOI and scholarly metadata,
- claim/evidence alignment,
- statistics and numerical inconsistencies,
- figure/table references,
- research-integrity cues,
- manuscript structure,
- and submission-readiness issues.

Scientifically meaningful changes remain reviewable rather than being silently applied.

### Manual correction workspace

Instead of scattering issues across many tools, review findings can be collected into one correction queue with actions such as accept, reject, edit, inspect evidence, open a source, or leave the original text unchanged.

### Python and Jupyter research workspace

The private Research Lab direction includes project-aware support for Python code generation, Jupyter notebook workflows, code formatting and linting, notebook execution, error-aware repair suggestions, data inspection, reproducibility records, and evidence links between analysis outputs and manuscript statements.

### Google Earth Engine and geospatial research

The research workflow is being extended toward natural-language generation of Earth Engine Python and reusable geospatial analysis templates for datasets such as Sentinel-2, Landsat, MODIS, CHIRPS, TerraClimate, ERA5-Land, SRTM, GHSL, ESA WorldCover, Sentinel-5P, VIIRS, and SMAP.

The goal is not to expose Earth Engine complexity to every user. The intended experience is closer to:

> “Analyse vegetation and urban heat for my study area from 2020–2025.”

The researcher then reviews the proposed datasets, workflow, statistics, outputs, and manuscript evidence before execution.

### Evidence-linked manuscript workflow

A central research direction is to connect raw data → analysis code/notebook → tables/statistics/maps/figures → claims and manuscript text.

This supports future checks such as:

- whether a value in the manuscript matches an analysis output,
- whether a figure came from the claimed notebook/workflow,
- whether a Methods description reflects the analysis actually performed,
- and whether Results contain unsupported numbers.

## Science-first design

The project is deliberately moving away from a developer-centric interface.

Researchers should mostly see:

**Research Question → Study Area / Samples → Data → Analysis → Results → Figures & Tables → Manuscript → Scientific Review → Submission**

The underlying system may use Python, Jupyter, Office.js, local language models, scholarly APIs, GIS libraries, or Earth Engine, but those technologies should remain secondary to the scientific workflow.

## Early beta proof

![Word Research Workbench local T5 beta interface](assets/screenshots/01-word-local-t5-panel.jpg)

The Word prototype has been tested as a real task-pane workflow on Windows. Public screenshots demonstrate the interface and local-processing direction while production internals, private model assets, unpublished research logic, and user data remain outside this repository.

External AI-text detector results, if shown in project material, are **illustrative only**. Detector scores are not treated as proof of authorship and are not a product guarantee.

## What the project explores

- Microsoft Word / Office.js research workflows
- local AI and offline academic editing
- academic writing and author-voice assistance
- citation verification and reference health
- Crossref-oriented scholarly metadata checks
- manual Google Scholar verification workflows
- claim-evidence and research-integrity review
- Python and Jupyter research analysis
- Google Earth Engine Python workflows
- GIS and remote-sensing research assistance
- statistics and reproducibility support
- figure/table and manuscript consistency checks
- evidence-linked Methods and Results drafting
- researcher-controlled AI correction workflows
- Windows research productivity

## Public proof-of-concept demo

Open [demo/index.html](demo/index.html) to view the self-contained mock POC. It uses mock content and does **not** upload manuscript text or expose the private production implementation.

### Proof, evaluation and case studies

The project is being documented around reproducible scientific workflows rather than generic AI claims:

- [90-second demo storyboard](docs/DEMO_90_SECONDS.md) — manuscript issue → evidence → notebook → correction
- [Benchmark framework](docs/BENCHMARKS.md) — scientific-meaning preservation, citation identity, numerical consistency, notebook traceability, GEE validation, performance and privacy
- [Case Study 1: Sentinel-2 NDVI](docs/CASE_STUDY_1_NDVI.md) — satellite data → analysis → manuscript evidence
- [Case Study 2: Urban heat](docs/CASE_STUDY_2_URBAN_HEAT.md) — correlation/causation and statistical-language safeguards
- [Case Study 3: Citation audit](docs/CASE_STUDY_3_CITATION_AUDIT.md) — citation identity, metadata and evidence triage
- [Public v4.3 release plan](docs/PUBLIC_RELEASE_V4_3_PLAN.md) — GitHub release, Zenodo, AppSource and institutional-pilot readiness

Additional project documentation:

- [docs/POC.md](docs/POC.md) — public proof-of-concept scope
- [docs/RESEARCH_LAB_V4_3.md](docs/RESEARCH_LAB_V4_3.md) — v4.3 Research Lab direction
- [docs/SCIENCE_FIRST_WORKFLOW.md](docs/SCIENCE_FIRST_WORKFLOW.md) — researcher-oriented UX principles
- [SEO_KEYWORDS.md](SEO_KEYWORDS.md) — discovery terminology
- [ROADMAP.md](ROADMAP.md) — public roadmap

## Privacy and public boundary

This repository intentionally does **not** publish production Word add-in source, private prompts or transformation rules, unpublished integrity/evidence heuristics, model weights/checkpoints, API keys or credentials, private citation/retrieval backend implementation, production installer/updater infrastructure, or user manuscripts, logs, databases, notebooks, and research data.

Read [PUBLIC_POC_BOUNDARY.md](PUBLIC_POC_BOUNDARY.md), [PUBLIC_BETA_NOTICE.md](PUBLIC_BETA_NOTICE.md), and [LICENSE-NOTICE.md](LICENSE-NOTICE.md) before reusing project material.

## Research integrity principles

Author Focus is intended to **assist researcher judgment, not replace it**.

1. AI-generated bibliographic entries should not be silently treated as verified sources.
2. Numbers, statistics, citations, scientific terminology, and causal language require conservative editing.
3. Rewriting should preserve the scientific meaning of the source.
4. Automated checks are screening tools, not proof of scientific validity or misconduct.
5. Executed analysis and source evidence should take priority over generated prose.
6. Scientifically meaningful changes should remain visible and reviewable.

## Who may find this useful?

The project may be relevant to researchers and postgraduate students, academic authors and supervisors, GIS and remote-sensing researchers, research-software engineers, Microsoft Office / Office.js developers, universities and research institutes, reproducible-research communities, scholarly-communication communities, and privacy-preserving AI developers.

## Search and discovery

Natural search terms associated with the project include **Microsoft Word research assistant**, **academic writing assistant**, **research integrity software**, **citation verification**, **local AI for researchers**, **offline academic writing assistant**, **Jupyter research assistant**, **Python research workflow**, **Google Earth Engine assistant**, **GIS research software**, **remote sensing research assistant**, **scientific manuscript checker**, **evidence-based manuscript writing**, **Office.js research add-in**, and **privacy-first research software**.

See [SEO_KEYWORDS.md](SEO_KEYWORDS.md) for the maintained discovery vocabulary.

## Get involved

The project welcomes beta testers, academic pilot partners, research-software collaborators, Office.js developers, GIS/remote-sensing reviewers, statistics/reproducibility reviewers, accessibility/UI reviewers, privacy/security reviewers, and institutional research partners.

Start with [CONTRIBUTING.md](CONTRIBUTING.md) and [COLLABORATION.md](COLLABORATION.md).

For collaboration or partnership, open an issue or see [CONTACT.md](CONTACT.md) and [SPONSORSHIP.md](SPONSORSHIP.md).

Do **not** post unpublished manuscripts, private research data, credentials, API keys, or confidential implementation details in public issues.

## Citation

For academic or research-software references, see [CITATION.cff](CITATION.cff).

## Project status

**Public beta / proof of concept.** The public repository documents the concept, workflows, research direction, screenshots, and collaboration surface. APIs, naming, architecture, UX, and public/private boundaries may evolve.

The private Author Focus v4.3 Research Lab build is more advanced than the code published here; this README intentionally distinguishes product direction from publicly released source.

---

Maintained by **[@10GODS](https://github.com/10GODS)** · collaboration, beta-testing, and research-partnership enquiries are welcome.
