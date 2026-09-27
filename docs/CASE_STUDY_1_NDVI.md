# Case Study 1 — Sentinel-2 NDVI to Manuscript Evidence

## Research question

How did vegetation condition change across a study area between two or more time periods?

## Why this case matters

This demonstrates the complete Author Focus Research Lab idea:

**research question → Earth Engine/Python → output → figure/table → manuscript statement → evidence verification**

## Example inputs

- Study-area boundary
- Sentinel-2 surface-reflectance imagery
- Start/end dates
- Cloud threshold
- Optional administrative zones

## Proposed workflow

1. Select the study area.
2. Retrieve Sentinel-2 imagery for the study period.
3. Apply appropriate cloud/quality masking.
4. Calculate NDVI.
5. Produce temporal composites.
6. Calculate descriptive statistics.
7. Export raster/statistical outputs.
8. Create a publication figure.
9. Link output values to manuscript claims.
10. Generate a Methods draft from the executed workflow.

## Example evidence chain

Manuscript claim:

> Mean NDVI increased from 0.31 in the initial period to 0.46 in the final period.

Evidence record:

- dataset: Sentinel-2 surface reflectance,
- analysis: NDVI,
- notebook/workflow: vegetation_analysis.ipynb,
- statistic: zonal mean,
- output: ndvi_summary.csv,
- figure: NDVI temporal comparison,
- manuscript location: Results section.

## What Author Focus should verify

- correct dataset identity,
- valid band selection,
- valid NDVI expression,
- time-window consistency,
- spatial-resolution statement,
- manuscript values matching analysis output,
- figure/table numbering,
- and whether the Methods description matches the executed workflow.

## What it should not claim automatically

A change in NDVI does not by itself establish:

- ecological recovery,
- degradation cause,
- land-management success,
- climate causality,
- or socioeconomic drivers.

Those interpretations require additional evidence.

## Public-demo value

This case is visually strong, scientifically understandable, and reproducible with public satellite data. It is a good first demonstration for researchers unfamiliar with the software.
