# Research Copilot v4.4 — public implementation notes

This document describes the private v4.4 package at a high level. The public repository remains a mock proof of concept; production source, prompts, heuristics, models, credentials and user research data are not published here.

## Researcher workflow

The private build moves the default view from technical controls to a research workflow:

**Research → Manuscript → Analysis → Evidence → Review → Submission**

The Research Copilot accepts a plain-language question and prepares a draft plan with an objective, research questions and hypotheses, variables, curated candidate datasets, scale, preprocessing, analysis/statistical suggestions, validation, maps, figures, tables, evidence requirements, limitations and candidate manuscript sections. Researchers must review the plan before proceeding to analysis. Code generation remains distinct from explicit code/notebook execution.

## Implemented in the private v4.4 package

- Deterministic local planning templates and keyword-based concept matching.
- Dataset suggestions based on the existing v4.3 Research Lab catalog. Records include collection IDs, bands, native scale and available scale/offset or product caveats.
- Conditional statistical advice that explains the question matched, assumptions, interpretation and limitations, including what the test does not establish.
- Local project memory stored separately by normalized project key.
- Evidence-graph records with VERIFIED, REVIEW, CONFLICT and NO EVIDENCE states; no aggregate truth score.
- Ask My Project over text or structured evidence supplied by the user.
- Methods field extraction only from records explicitly marked executed.
- Exact numeric-token checks for requested Results values against supplied outputs.
- A journal submission checklist and modular research/design/data/statistics/evidence/reviewer/submission/learning skills.
- Existing v4.2/v4.3 Word, citation, integrity, writing, Python/Jupyter/GEE and installer flows retained in the private application package.

The package-level regression suite passed in the available non-Windows environment. This is not evidence of Windows Word compatibility, expert statistical agreement, live dataset availability, scientific correctness or manuscript truth.

## Known gaps

The v4.4 package does not yet automatically index DOCX, PDF, XLSX, figures, maps, GeoTIFFs, shapefiles or geopackages for Ask My Project. The user supplies searchable evidence text/records. Evidence graphs are supplied/curated records, not automatically populated from every analysis. Clicking a Word statement does not yet open a complete evidence chain. Methods extraction uses supplied executed-work records; it is not a universal instrumentation layer. The submission checklist does not fetch current journal guidelines. Figure/map layout editing and Word insertion/cross-reference automation are not complete. The Statistics Advisor does not inspect a dataset or calculate the recommended test.

See [Scientific safety controls](SCIENTIFIC_SAFETY_V4_4.md), [Benchmark framework](BENCHMARKS.md), [public proof-of-concept scope](POC.md) and [roadmap](../ROADMAP.md).

## Environment checks still needed

- Windows 11 and supported Microsoft Word desktop versions.
- Microsoft 365 and institutional add-in policies.
- Trusted add-in catalog registration, PowerShell migration and background host update.
- Authenticated Earth Engine validation and exports.
- Live scholarly, journal and optional AI-provider requests.
- Non-programmer researcher usability and independent statistician review.
