# Author Focus / Word Research Workbench

> Local-first AI research assistant for Microsoft Word · academic writing · citation verification · research integrity · Python/Jupyter · Google Earth Engine · geospatial research workflows

[![Status: Public Beta](https://img.shields.io/badge/status-public%20beta-orange)](#project-status)
[![Platform: Microsoft Word on Windows](https://img.shields.io/badge/platform-Microsoft%20Word%20%7C%20Windows-blue)](#what-the-project-explores)
[![Privacy: Local-first](https://img.shields.io/badge/privacy-local--first-success)](#privacy-and-public-boundary)
[![Research: Science-first](https://img.shields.io/badge/design-science--first-blueviolet)](#science-first-design)
[![Collaboration: Welcome](https://img.shields.io/badge/collaboration-welcome-brightgreen)](#get-involved)

## Overview

Author Focus explores how academic writing, scholarly lookup, citation checking, evidence review, local AI, research-integrity support, Python/Jupyter analysis, geospatial workflows and manuscript preparation can work together in a researcher-friendly environment.

The design goal is simple: **researchers should work in scientific language, not software language**. A user should be able to ask for tasks such as “check this manuscript,” “verify this citation,” “analyse vegetation change,” or “prepare the Methods section from my analysis” without needing to understand APIs, packages or notebook internals.

This repository is the **public proof-of-concept and collaboration surface**. The private Author Focus v4.4 Research Copilot package is not published here; see [PUBLIC_POC_BOUNDARY.md](PUBLIC_POC_BOUNDARY.md).

## Research Lab direction

The private application builds on the v4.3 Research Lab and adds a v4.4 science-first planning workflow:

- Describe a study in ordinary language and review a structured research plan before analysis.
- Get curated dataset suggestions, statistical-method explanations and project-specific memory.
- Keep evidence links between data, executed analyses, outputs and manuscript claims reviewable.
- Draft Methods only from records marked as executed and check requested Results values against supplied outputs.
- Keep code generation separate from explicit execution.
- Use the existing Word review/correction, citation verification, local-first writing, Python/Jupyter, Earth Engine, GIS and provenance workflows.

These statements describe the private package direction and must not be read as a claim that those production modules are included in this public repository.

## Science-first interface

The intended workflow is:

**Research → Manuscript → Analysis → Evidence → Review → Submission**

Simple mode prioritizes the study question, data choices, methods, outputs, evidence and review actions. Advanced tools retain Python, Jupyter, Earth Engine, GIS, model settings and diagnostic details for users who need them.

## v4.4 implementation and test notes

A private v4.4 build extends the v4.3 Windows package with deterministic plan construction; dataset records based on the existing Research Lab catalog; conditional statistical advice; project-isolated local JSON memory; explicit plan approval; evidence-graph records; local search over supplied evidence; and safeguards that refuse Methods from unexecuted records and flag requested result values absent from supplied outputs.

The package regression checks passed in the available non-Windows runtime. Windows Word desktop, Microsoft 365, add-in catalog registration, PowerShell migration, authenticated Earth Engine, live journal instructions and live-provider behavior still require environment-specific testing. The statistical advisor does not inspect data or compute tests. Full DOCX/PDF/XLSX/vector/map ingestion, automatic evidence graph population, click-through manuscript-to-evidence inspection, figure editing/insertion and live journal-guideline retrieval are not claimed as complete.

See [Research Copilot v4.4 notes](docs/RESEARCH_COPILOT_V4_4.md), [Scientific safety controls](docs/SCIENTIFIC_SAFETY_V4_4.md), and [Benchmark framework](docs/BENCHMARKS.md).

## Public proof-of-concept demo

Open [demo/index.html](demo/index.html) to view the self-contained mock POC. It uses mock content and does not upload manuscript text or expose private production implementation.

- [90-second demo storyboard](docs/DEMO_90_SECONDS.md)
- [Benchmark framework](docs/BENCHMARKS.md)
- [Case Study 1: Sentinel-2 NDVI](docs/CASE_STUDY_1_NDVI.md)
- [Case Study 2: Urban heat](docs/CASE_STUDY_2_URBAN_HEAT.md)
- [Case Study 3: Citation audit](docs/CASE_STUDY_3_CITATION_AUDIT.md)
- [v4.3 Research Lab direction](docs/RESEARCH_LAB_V4_3.md)
- [Science-first workflow](docs/SCIENCE_FIRST_WORKFLOW.md)
- [Public proof-of-concept scope](docs/POC.md)
- [Public roadmap](ROADMAP.md)

## Privacy and public boundary

This repository intentionally does not publish production Word add-in source, private prompts or transformation rules, unpublished integrity/evidence heuristics, model weights, API keys or credentials, private citation/retrieval backend implementation, production installer infrastructure, or user manuscripts, notebooks, logs, databases and research data.

Read [PUBLIC_POC_BOUNDARY.md](PUBLIC_POC_BOUNDARY.md), [PUBLIC_BETA_NOTICE.md](PUBLIC_BETA_NOTICE.md), [LICENSE-NOTICE.md](LICENSE-NOTICE.md), and [SECURITY.md](SECURITY.md) before reusing project material or reporting a sensitive issue. **Do not post confidential details in public issues.**

## Research integrity principles

Author Focus is intended to assist researcher judgment, not replace it.

1. AI-generated references are not silently treated as verified sources.
2. Numbers, statistics, citations, uncertainty and causal language receive conservative handling.
3. Rewriting should preserve the scientific meaning of the source.
4. Automated checks are screening tools, not proof of validity, authenticity or misconduct.
5. Executed analysis and source evidence should take priority over generated prose.
6. Scientifically meaningful changes should remain visible and reviewable.
7. Correlation or observational association is not presented as causation.

## What the project explores

Microsoft Word / Office.js research workflows, local AI and academic editing, author voice assistance, citation verification, reference health, Python and Jupyter research analysis, Google Earth Engine, GIS and remote sensing, statistics, reproducibility, figures and tables, evidence-linked Methods and Results, and researcher-controlled manuscript review.

## Search and discovery

Relevant discovery terms include Microsoft Word research assistant, academic writing assistant, research integrity software, citation verification, local AI for researchers, Jupyter research assistant, Python research workflow, Google Earth Engine assistant, GIS research software, remote sensing research assistant, scientific manuscript checker, evidence-based manuscript writing and Office.js research add-in. See [SEO_KEYWORDS.md](SEO_KEYWORDS.md).

## Get involved

The project welcomes beta testers, academic pilot partners, research-software collaborators, Office.js developers, GIS and remote-sensing reviewers, statistics and reproducibility reviewers, accessibility reviewers, privacy/security reviewers and institutional research partners.

Start with [CONTRIBUTING.md](CONTRIBUTING.md) and [COLLABORATION.md](COLLABORATION.md). For partnership enquiries, see [CONTACT.md](CONTACT.md) and [SPONSORSHIP.md](SPONSORSHIP.md). Do not post unpublished manuscripts, private research data, credentials or confidential implementation details in public issues.

## Citation

For academic or research-software references, see [CITATION.cff](CITATION.cff).

## Project status

**Public beta / proof of concept.** This repository documents the concept, public mock demo, workflows and collaboration surface. Production implementation remains private and may differ from the described direction. APIs, architecture, UX and public/private boundaries may evolve.

---

Maintained by [@10GODS](https://github.com/10GODS) · collaboration, beta-testing and research-partnership enquiries are welcome.
