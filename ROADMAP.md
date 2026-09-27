# Roadmap

This public roadmap describes product direction while preserving the public/private implementation boundary. The private v4.4 package adds a first Research Copilot workflow; this does not mean every roadmap item is complete.

## Public POC — available here

- Word-style mock task-pane demo using mock content
- Science-first workflow and public/private boundary documentation
- Case studies, contribution routes and benchmark framework
- Researcher approval and scientific-integrity principles

## Author Focus v4.4 — Research Copilot

### Implemented in the private package; regression checks passed in the available non-Windows runtime

- Plain-language research-plan draft with objective, questions/hypotheses, variables, datasets, scale, preprocessing, analysis, statistics, validation, maps/figures/tables, evidence needs, limitations and manuscript sections
- Curated dataset advice from the retained Research Lab catalog
- Conditional statistics advice with assumptions, interpretation, limitations and non-causal language
- Explicit plan approval before continuing to the analysis workspace
- Project-isolated local JSON memory
- Evidence graph records with VERIFIED, REVIEW, CONFLICT and NO EVIDENCE review states; no aggregate truth score
- Search over user-supplied project text/records
- Methods extraction only from records marked executed and exact numeric-token checks for requested Results values
- Journal submission checklist prompts
- Progressive disclosure that places technical controls under Advanced tools

The package-level tests do not establish statistical expert agreement, live dataset availability, Windows Word compatibility, or scientific correctness.

### Still needed

- Index and search DOCX, PDF, CSV, XLSX, Python, IPYNB, figures, maps, GeoTIFF, shapefiles and geopackages with file/section/cell provenance
- Click a manuscript statement to inspect its complete evidence chain
- Derive Methods automatically from verified execution metadata and map outputs to manuscript claims
- Journal-specific live instruction retrieval and rule validation
- Publication figure/map layout, caption, numbering, CRS, DPI, scale/north arrow checks and Word cross-reference insertion
- Reviewer Mode integrated with manuscript context and traceable findings
- Researcher usability testing with non-programming scientists

## Retained v4.3 Research Lab direction

### Python and Jupyter

Project-aware Python generation, notebook creation/editing/execution, formatting/linting, error-aware repair suggestions, output inspection and reproducibility snapshots. Code execution remains an explicit user action.

### Google Earth Engine and geospatial analysis

Dataset-aware templates for optical, thermal, rainfall, climate, terrain, population, land cover, pollution, water, soil moisture and night-light workflows. Dataset IDs, bands, scale factors, dates and spatial scale must be validated for each proposed study.

### Manuscript, citation and integrity workflows

Unified manuscript review, manual correction queue, citation/reference verification, local-first writing, author-voice controls and research-integrity screening. Scientific edits remain reviewable.

## Validation and release maturity

Before a stable public release, the project needs broader Windows/Microsoft 365 testing, Office add-in catalog testing, accessibility review, privacy/security review, independent statistical review, reproducible benchmark reporting, controlled failure-case reporting, packaging/signing/update validation, licensing decisions and an explicit decision about which production components may become public.

## Longer-term workflow

**Research → Manuscript → Analysis → Evidence → Review → Submission**

The aim is to make rigorous, reproducible and traceable work easier without hiding scientific uncertainty or removing researcher control.
