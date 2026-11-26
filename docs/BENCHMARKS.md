# Benchmark and Evaluation Framework

Author Focus should be evaluated on research-workflow reliability, not vague claims such as “more human writing” or a single AI-detector score. This framework covers both the public POC and private application builds. Numerical benchmark results should be published only after a test set and scoring procedure are frozen.

## v4.4 package regression status

The private v4.4 package regression suite passed in the available non-Windows runtime. It checks research-plan completeness, catalog mappings, explicit approval state, statistical non-causal wording, project-memory isolation, missing-evidence labels, refusal to generate Methods from unexecuted records, exact numeric-token matching and retained v4.2/v4.3 routes/UI safeguards.

This is a package self-test, not an independent scientific benchmark. It does not establish expert agreement, live dataset currency, statistical validity, Word/Microsoft 365 compatibility or manuscript truth. Windows desktop, authenticated Earth Engine and live-provider checks remain environment-specific.

## Benchmark groups

### 1. Research-plan completeness and usability

Use a fixed question set covering trend, comparison, association, mapping, exposure, drought, land-cover and multi-dataset designs. Score whether the plan includes objective, questions/hypotheses, variables, datasets, resolution, preprocessing, method, statistics, validation, outputs, evidence, limitations and manuscript sections. Reviewers should mark assumptions the system added without support and missing items it correctly surfaced.

Run moderated tasks with non-programming scientists. Record completion, time, correction count, comprehension and whether participants can tell a proposal from an approved decision.

### 2. Dataset metadata and coverage

For every catalog entry, compare ID, band, native resolution, scale/offset, units, date period and QA notes with current authoritative product/provider metadata. Keep this separate from query-specific Earth Engine availability and authenticated execution.

### 3. Statistical advice

Have blinded statisticians judge method fit against design, unit of analysis, sampling, dependence, assumptions, effect size, uncertainty, multiple testing and causal wording. Report expert agreement and disagreement categories. The current advisor suggests a candidate method; it does not inspect data or calculate tests.

### 4. Scientific meaning preservation

Use sentences containing effect directions, significance, uncertainty, causal language, sample sizes, percentages, p-values, units, acronyms, figure/table references and citations. Measure protected-number preservation, citation identity, uncertainty preservation, direction preservation and human accept/reject rate.

Do not publish rates before a reproducible test corpus is actually run.

### 5. Citation identity and claim evidence

Test clean/ambiguous DOI references, incomplete records, title/year mismatch, duplicate authors, retraction/correction cases and claims with full-text, abstract-only or title-only evidence. Report correct identity, false matches, unresolved rates and human source-review agreement. A correct bibliographic match does not prove the cited source supports the claim.

### 6. Numerical consistency and Results evidence

Test values across manuscript text, CSV, XLSX, notebook output and tables; include percentages, sample counts, dates, p-values, units, rounding, negative values and near matches such as 0.46 versus 0.460. Report false alerts, missed conflicts, exact match rate and unit/context errors. A lexical value match is not scientific validation.

### 7. Methods and notebook traceability

Test whether extracted datasets, bands, dates, masks, scale, formulas, algorithms, statistics, parameters and exports match executed notebook/code records. Include planned-but-unexecuted code, stale outputs, duplicated values and missing provenance. Report field-level precision and missing-detail behavior. Do not treat generated code as executed work.

### 8. Evidence graph

Test source → code/notebook → calculation → figure/table → manuscript claim chains, missing links, mismatched values and conflicts. Report link accuracy and review-state accuracy. Do not collapse evidence states into an overall truth score.

### 9. Python/Jupyter and Earth Engine

Measure notebook load/structure preservation, formatting, explicit execution behavior, traceback capture, output extraction and repair-suggestion correctness separately. Validate Earth Engine collection IDs, bands, scale factors, masks, date coverage, syntax and exports using curated fixtures and authenticated spot checks. A generated export task is not proof of an executed export.

### 10. Privacy, performance and platform

Record startup, review, model latency, memory, CPU and notebook execution separately for local and remote modes. Observe outbound requests and document what text/metadata leaves the device. Test Windows Word desktop, add-in catalog registration, Microsoft 365 policy behavior, update/migration, accessibility and PowerShell installers on supported systems.

## Reporting template

| Metric | Test set/version | Cases | Passed | Failed | Notes |
|---|---|---:|---:|---:|---|
| Research-plan required fields | TBD | TBD | TBD | TBD | Include missing/assumed details |
| Dataset metadata match | TBD | TBD | TBD | TBD | Provider/metadata date required |
| Statistician method agreement | TBD | TBD | TBD | TBD | Report disagreement categories |
| Protected scientific meaning | TBD | TBD | TBD | TBD | Separate numbers/citations/uncertainty |
| Methods provenance fields | TBD | TBD | TBD | TBD | Executed records only |
| Results unsupported-value rejection | TBD | TBD | TBD | TBD | Include near-match values and units |
| Evidence-link correctness | TBD | TBD | TBD | TBD | No truth-score aggregation |
| Windows Word integration | TBD | TBD | TBD | TBD | Record Office build/policies |

## Reporting principles

- Publish the exact test corpus and procedure.
- Report failures and limitations, not only successes.
- Separate deterministic checks from AI judgments and human review.
- Separate local and remote model results.
- Never treat AI-detector output as proof of human authorship.
- Do not generalize benchmark performance into scientific validity beyond tested behavior.
