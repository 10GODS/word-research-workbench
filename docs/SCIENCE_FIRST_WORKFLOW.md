# Science-First Workflow

## Design principle

Author Focus should be usable by a scientist who does not consider themselves a programmer.

The user should primarily interact with research concepts, while implementation details remain available only when needed.

## Researcher view

The preferred workflow is:

**Research Question → Study Area / Samples → Data → Analysis → Results → Figures & Tables → Manuscript → Scientific Review → Submission**

The interface should not require ordinary users to begin with:

- package installation,
- API endpoints,
- Python environments,
- JSON configuration,
- notebook kernels,
- model routing,
- ports,
- or command-line tools.

## Natural-language research tasks

Examples of researcher-facing requests:

- “Check my complete manuscript.”
- “Verify the citations in this paragraph.”
- “Find values that disagree with my tables.”
- “Create an NDVI workflow for my study area.”
- “Which statistical test is appropriate for this trend?”
- “Explain why this result is not significant.”
- “Create a publication-ready figure.”
- “Check whether Figure 4 supports this paragraph.”
- “Prepare the Methods section from the analysis I actually ran.”
- “Show me which results are not linked to evidence.”
- “Prepare this manuscript for journal submission.”

## Progressive disclosure

Author Focus should have two layers.

### Simple research layer

Shows:

- objectives,
- datasets,
- analyses,
- findings,
- warnings,
- evidence,
- and review actions.

### Advanced technical layer

Shows, when requested:

- Python code,
- notebook cells,
- package/environment details,
- Earth Engine collection IDs,
- raw API responses,
- logs,
- model settings,
- and execution diagnostics.

This keeps the software approachable while preserving reproducibility and expert control.

## Research Wizard

A research wizard can collect:

- research objective,
- study area,
- time period,
- available data,
- expected outputs,
- and target manuscript/journal context.

It can then propose:

- datasets,
- processing steps,
- statistical tests,
- validation methods,
- maps/figures,
- tables,
- and evidence requirements.

The proposal should be reviewed before execution.

## Dataset Advisor

Users should be able to choose scientific concepts such as:

- vegetation,
- land-surface temperature,
- precipitation,
- terrain,
- population,
- land cover,
- air pollution,
- soil moisture,
- or night-time lights.

The application can map these concepts to technical datasets internally.

## Statistics Advisor

A statistics advisor should explain:

1. what scientific question is being tested,
2. which test is proposed,
3. why the test is appropriate,
4. what assumptions matter,
5. what the output means,
6. and what the result does not establish.

The system should avoid presenting p-values or model metrics without scientific context.

## Guided learning

Optional guided-learning mode can explain technical steps while the user works.

For example:

> “I am using a Mann–Kendall test because you asked whether the variable shows a monotonic trend over time. This test does not require the data to follow a normal distribution.”

The purpose is to help scientists gradually understand the workflow without forcing them to learn programming before using the tool.

## Safety and control

- Code generation may be automatic; execution should be explicit.
- Scientific edits should remain reviewable.
- Source evidence should outrank generated prose.
- The system should distinguish computed results from interpretation.
- Missing evidence should be reported as missing rather than invented.
- Users should be able to undo or restore meaningful changes.

## Product goal

The measure of success is not how much technology is visible.

The measure is whether a researcher can perform more rigorous, reproducible, and traceable work with less software friction.
