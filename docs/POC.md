# Proof-of-Concept Scope

## Objective

Show how a Microsoft Word research workspace might combine local-first language assistance, scholarly verification, manuscript review, research-integrity support and links to scientific analysis workflows without exposing private production implementation.

The public proof of concept is intended to make the product direction understandable to researchers, research-software developers, academic institutions and potential collaborators.

## Public demo scenario

1. Open the mock Word-style task pane at demo/index.html.
2. Explore its writing/workbench panels using mock content.
3. Review the local-processing/privacy-first direction described in the interface.
4. Explore the scholarly lookup panel for the manual citation/reference concept.
5. For the integrity/evidence concept, read the dedicated [Research Lab v4.3 overview](RESEARCH_LAB_V4_3.md) and [Research Copilot v4.4 notes](RESEARCH_COPILOT_V4_4.md). The static demo does not contain an integrity/evidence panel or a control for this step.
6. Read the [science-first workflow](SCIENCE_FIRST_WORKFLOW.md) and [public roadmap](../ROADMAP.md) for research analysis and submission direction.

## v4.4 Research Copilot direction represented publicly

A separate private application package adds a plan-first workflow and local research helpers: proposed study design, dataset and statistics advice, local project memory, evidence records, explicit analysis approval, and constrained Methods/Results checks. The private package source and production implementation are not included in this repository. See [v4.4 notes](RESEARCH_COPILOT_V4_4.md) for what is implemented and what remains incomplete.

## POC limitations

- The public demo is static and uses mock content.
- It does not include production model weights or private prompts.
- It does not expose unpublished integrity/evidence heuristics.
- It does not scrape Google Scholar.
- It does not submit manuscript text to third-party websites.
- It does not contain production credentials.
- It does not publish the production Author Focus application source or installers.
- It does not claim that automated review can establish scientific validity, source authenticity or authorship.
- Public product descriptions communicate direction; they are not a download or feature guarantee for the mock demo.

## Success criteria

The public POC is useful if a reviewer can understand the problem, why Word is used as the researcher-facing workspace, how local-first processing supports privacy, how citations and evidence remain researcher-controlled, how analysis may connect to manuscript evidence, and how the product is evolving into a science-first research workbench.

## Public/private distinction

The repository documents the concept, mock demo, workflows, screenshots, roadmap, research direction and collaboration surface. Production implementation may be more advanced than the public POC. Describing a capability here does not imply its implementation is open source or available in this repository.
