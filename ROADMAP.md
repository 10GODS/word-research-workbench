# Roadmap

The public roadmap tracks the product direction without exposing private production implementation.

## Public POC — completed direction

- Demonstrate a Word-native research-workbench concept
- Show local-first processing, scholarly lookup, citation workflow, notes, and research-integrity directions
- Publish screenshots, public documentation, collaboration routes, and an explicit public/private boundary
- Keep researcher approval central to citation and manuscript changes

## Author Focus v4.x — current product direction

### Unified manuscript review

- Consolidate grammar, academic style, citations, references, evidence, statistics, figures/tables, and integrity checks into one review workflow
- Present findings in a single manual correction queue
- Keep scientific and factual changes reviewable
- Improve rollback, traceability, and issue explanations

### Science-first interface

- Replace developer-oriented controls with research goals and scientific tasks
- Let users describe objectives in natural language
- Hide package/API/model complexity unless the user opens advanced controls
- Add guided explanations for non-programming researchers

### Local AI and author voice

- Continue local-first writing support
- Improve author-voice profiling without copying source phrases
- Preserve scientific meaning, citations, numbers, uncertainty language, and terminology
- Treat style indicators as editing cues rather than proof of AI authorship

## Research Lab — active direction

### Python and Jupyter

- Project-aware Python generation
- Jupyter notebook creation, reading, editing, and execution
- Automatic formatting/linting
- Error-aware repair suggestions
- Reproducibility snapshots and output tracking
- Evidence links from notebook output to manuscript statements

### Google Earth Engine

- Natural-language Earth Engine Python generation
- Dataset-aware workflow templates
- Sentinel-2, Landsat, MODIS, CHIRPS, TerraClimate, ERA5-Land, SRTM, GHSL, WorldCover, Sentinel-5P, VIIRS, SMAP and related workflows
- Google Drive/export workflow support
- Validation of dataset IDs, bands, dates, scales, and output assumptions

### GIS and remote sensing

- Raster/vector inspection
- Map-quality checks
- CRS/resolution/unit validation
- Publication figure generation
- Reusable geospatial analysis templates
- Integration between maps, statistics, notebooks, and manuscript evidence

## Evidence and reproducibility

- Claim–evidence graph
- Raw data → code → output → figure/table → manuscript traceability
- Numerical consistency checks
- Methods-from-executed-analysis workflow
- Results-from-verified-output workflow
- Research-file fingerprints and provenance records

## Scholarly workflow

- Citation/reference identity verification
- DOI metadata checks
- Correction/retraction awareness
- Open-access source discovery
- Manual source confirmation for ambiguous evidence
- Journal-specific formatting and submission checks

## Researcher assistance

- Research design wizard
- Dataset advisor
- Statistics advisor
- Figure and map studio
- Supervisor/reviewer mode
- Reviewer-response workflow
- Guided learning mode for scientists who do not program

## Public beta maturity

Before a stable public release, the project needs:

- broader Windows and Microsoft 365 testing,
- accessibility review,
- privacy/security review,
- reproducible benchmark documentation,
- controlled failure-case reporting,
- packaging/signing/update strategy,
- licensing and support model,
- and an explicit decision about which production components become public.

## Longer-term vision

The long-term target is a researcher-controlled workflow where a scientist can move from:

**research question → data → analysis → evidence → figures/tables → manuscript → review → submission**

without needing to manually coordinate many disconnected tools.

The software should expose more scientific capability while making less technical complexity visible.
