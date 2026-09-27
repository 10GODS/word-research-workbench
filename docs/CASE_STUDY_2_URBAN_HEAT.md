# Case Study 2 — Urban Heat, Vegetation and Statistical Verification

## Research question

How are vegetation and urban surface temperature related across a city, and did either variable change during the study period?

## Example data

Depending on the scientific design:

- Landsat or MODIS land-surface temperature,
- Sentinel-2 vegetation indices,
- land-cover/built-up products,
- optional GHSL population/built-up layers,
- study-area boundary.

## Proposed workflow

1. Define the city/study boundary.
2. Retrieve temperature and vegetation data.
3. Apply product-specific masks and scale factors.
4. Harmonize spatial/temporal support where scientifically justified.
5. Calculate summary statistics.
6. Test association/trend with an appropriate statistical method.
7. Generate figures/maps.
8. Export numerical outputs.
9. Link Results statements to the outputs that support them.

## Example manuscript check

Original statement:

> Vegetation reduced land-surface temperature.

Available analysis:

> NDVI and LST were negatively correlated.

Author Focus should flag the causal wording because correlation alone does not demonstrate that vegetation caused the observed temperature difference.

Suggested evidence-faithful wording:

> NDVI was negatively associated with land-surface temperature during the analysed period.

## Statistical integrity example

If the manuscript says:

> The trend was statistically significant.

but the recorded output is:

> p = 0.084

the review should flag a conflict for manual correction.

## Evidence connections

- manuscript sentence ↔ statistical output,
- table ↔ notebook cell,
- figure ↔ raster/plot generation step,
- Methods ↔ executed code,
- citation ↔ external scientific interpretation.

## Value demonstrated

This case shows that Author Focus can protect scientific meaning, not just grammar:

- association versus causation,
- significance language,
- units,
- numerical outputs,
- and reproducible analytical provenance.
