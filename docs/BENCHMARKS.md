# Benchmark and Evaluation Framework

## Why benchmark Author Focus?

The project should be evaluated on **research workflow reliability**, not on vague claims such as “more human writing” or a single AI-detector score.

The strongest benchmarks test whether Author Focus preserves scientific content, identifies real inconsistencies, retrieves correct scholarly metadata, and connects manuscript statements to evidence.

## Benchmark groups

### 1. Scientific meaning preservation

Purpose: measure whether language editing changes factual meaning.

Test set should include sentences containing:

- increases/decreases,
- higher/lower relationships,
- significant/non-significant results,
- may/might/could uncertainty,
- correlation versus causation,
- sample sizes,
- percentages,
- p-values,
- units,
- acronyms,
- figure/table references,
- and citations.

Metrics:

- protected-number preservation rate,
- citation preservation rate,
- uncertainty-language preservation rate,
- direction-of-effect preservation rate,
- correlation/causation preservation rate,
- human expert accept/reject rate.

Target reporting format:

| Metric | Cases | Passed | Rate |
|---|---:|---:|---:|
| Numbers preserved | TBD | TBD | TBD |
| Citations preserved | TBD | TBD | TBD |
| Effect direction preserved | TBD | TBD | TBD |
| Uncertainty preserved | TBD | TBD | TBD |
| Correlation not converted to causation | TBD | TBD | TBD |

Do not publish percentages until a reproducible test set has actually been run.

### 2. Citation identity verification

Purpose: test whether bibliography entries are matched to the correct scholarly records.

Test set:

- clean DOI references,
- incomplete references,
- title spelling errors,
- year mismatches,
- duplicate author names,
- retracted/corrected publications,
- citations without DOI,
- ambiguous titles.

Metrics:

- correct identity match,
- false match rate,
- unresolved rate,
- DOI recovery rate,
- correction/retraction flag recall where ground truth is known.

Important distinction:

A correct bibliographic match does **not** prove that the source supports the manuscript claim.

### 3. Claim–evidence support triage

Purpose: test whether the system appropriately distinguishes:

- clearly supported,
- partially supported,
- unsupported,
- and insufficient-evidence cases.

Use title/abstract/full-text availability as separate evaluation conditions.

Report confusion matrices and human reviewer agreement rather than one opaque score.

### 4. Numerical manuscript consistency

Purpose: detect mismatches between manuscript values and structured evidence.

Test examples:

- manuscript versus CSV,
- manuscript versus XLSX,
- manuscript versus notebook output,
- manuscript versus table,
- percentages,
- sample sizes,
- dates/study periods,
- p-values,
- accuracy metrics.

Metrics:

- true inconsistency detection rate,
- false alert rate,
- exact-value match rate,
- rounding-tolerance behavior.

### 5. Notebook-to-manuscript traceability

Purpose: evaluate whether the correct notebook output can be linked to the relevant manuscript claim.

Test:

- one-to-one value links,
- figures produced by notebook cells,
- tables produced by code,
- derived statistics,
- stale outputs,
- duplicated values from different analyses.

Metrics:

- correct source-link rate,
- ambiguous-link rate,
- missing-provenance rate.

### 6. Python/Jupyter reliability

Measure:

- notebook load success,
- code formatting success,
- execution success on reproducible examples,
- traceback capture,
- repair suggestion validity,
- output extraction,
- preservation of notebook structure.

A repair suggestion should be evaluated separately from automatic execution. The system should not silently rerun repaired scientific code.

### 7. Google Earth Engine workflow validation

Evaluate generated workflows for:

- valid Earth Engine collection/image IDs,
- correct bands,
- scale factors,
- date coverage,
- cloud/quality masks,
- expected spatial resolution,
- valid Python syntax,
- export configuration.

Each dataset template should have a small regression test.

### 8. Performance

Record separately for local and remote modes:

- startup time,
- document scan time,
- local model latency,
- peak RAM,
- CPU utilization,
- notebook execution overhead,
- citation lookup latency.

Hardware specifications must be reported with results.

### 9. Privacy behavior

Test that local-only mode does not call configured remote AI endpoints.

Report:

- outbound requests observed,
- which scholarly services are intentionally used,
- what text/metadata is transmitted,
- whether full manuscript text leaves the computer.

## Recommended public benchmark suite

A first credible public benchmark could contain:

- 100 protected scientific sentences,
- 50 bibliography/citation identity cases,
- 50 manuscript-data consistency cases,
- 20 notebook-to-manuscript traceability cases,
- 10 reproducible Jupyter notebooks,
- 10 Earth Engine templates.

Every item should use synthetic, public, or openly licensed data.

## Reporting principles

- Publish the exact test-set version.
- Report failures, not only successes.
- Separate deterministic checks from LLM-based judgments.
- Separate local and remote model results.
- Never treat AI-detector performance as proof of human authorship.
- Do not use benchmark results to imply scientific validity beyond the tested behavior.

## Status

This document defines the evaluation framework. Numerical benchmark results should be added only after the public test corpus and execution procedure are frozen and independently reproducible.
