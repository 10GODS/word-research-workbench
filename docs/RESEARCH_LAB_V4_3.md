# Author Focus v4.3 Research Lab

## Purpose

Author Focus v4.3 Research Lab extends the original Microsoft Word research-workbench concept beyond writing assistance.

The goal is to connect the research lifecycle:

**question → data → analysis → evidence → figures/tables → manuscript → review → submission**

while keeping the researcher, rather than the AI system, responsible for scientific decisions.

## Main workspaces

### 1. Manuscript

Designed for academic writing, correction, author-voice assistance, citation-aware editing, figure/table references, and manuscript preparation.

### 2. Review

A unified screening workflow for:

- grammar and clarity,
- citations and references,
- scholarly metadata,
- numerical/statistical conflicts,
- figure/table consistency,
- unsupported claims,
- and research-integrity cues.

Review findings should be presented as issues to inspect rather than as an opaque overall “truth score.”

### 3. Manual Corrections

Scientifically meaningful edits remain visible and reviewable.

Examples include:

- changing uncertainty language,
- changing causal wording,
- modifying numerical values,
- changing a citation,
- rewriting Results,
- or changing interpretations.

### 4. Python Lab

The Research Lab direction includes:

- Python generation,
- Jupyter notebook workflows,
- code formatting/linting,
- explicit code execution,
- traceback-aware repair suggestions,
- data inspection,
- and reproducibility snapshots.

Arbitrary Python execution should always be treated as real code execution under the permissions of the local user account.

### 5. Google Earth Engine

The geospatial workflow direction includes project-aware Earth Engine Python generation for remote-sensing and environmental datasets.

Target workflows include:

- NDVI and vegetation dynamics,
- land-surface temperature,
- land-use/land-cover,
- precipitation and drought,
- climate trends,
- terrain analysis,
- urban growth,
- population exposure,
- air pollution,
- soil moisture,
- and related geospatial analyses.

### 6. Evidence

The long-term evidence model links:

- source data,
- analysis notebooks/scripts,
- calculated outputs,
- maps,
- figures,
- tables,
- citations,
- and manuscript claims.

The purpose is traceability, not automated scientific authority.

## Science-first behavior

A researcher should be able to describe a scientific objective in ordinary language.

Example:

> Analyse vegetation and urban heat in Jaipur from 2020–2025.

The system may then propose:

- appropriate datasets,
- spatial/temporal resolution,
- preprocessing steps,
- statistical tests,
- outputs,
- figures,
- and manuscript evidence.

The user should review the scientific plan before execution.

## Geospatial dataset direction

Examples of supported or targeted dataset families include:

- Sentinel-2
- Landsat
- MODIS
- CHIRPS
- TerraClimate
- ERA5-Land
- SRTM
- GHSL
- ESA WorldCover
- Sentinel-5P
- VIIRS
- SMAP

Dataset IDs, bands, scale factors, temporal coverage, quality masks, and spatial resolution should be validated before execution rather than generated from memory alone.

## Research-integrity safeguards

The product direction emphasizes:

- citation identity verification,
- conservative scientific rewriting,
- protected numbers and statistics,
- traceable data/code/output relationships,
- explicit execution,
- visible error handling,
- provenance records,
- and manual approval for scientifically meaningful changes.

The system should never claim that a finished manuscript alone proves that underlying data are authentic or that a scientific interpretation is correct.

## Local-first architecture

Where practical, private manuscript text and research files should be processed locally.

External scholarly services can be used selectively for tasks such as:

- DOI metadata,
- publication identity,
- open-access discovery,
- correction/retraction information,
- and scholarly search.

Remote generative AI should be optional and clearly distinguished from local processing.

## Public-repository note

This document describes product direction and workflow concepts.

The production Author Focus v4.3 implementation, private prompts, unpublished heuristics, model assets, credentials, and user research material are not published in this repository.
