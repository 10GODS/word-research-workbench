# Case Study 3 — Citation and Evidence Audit in Microsoft Word

## Research question

Can a researcher verify that manuscript citations correspond to real scholarly records and identify statements whose evidence needs manual review?

## Example input

A short manuscript section containing:

- author-year citations,
- numbered citations,
- complete references,
- incomplete references,
- one ambiguous citation,
- one publication with an update/correction/retraction record,
- and one empirical statement with no citation.

Use public or synthetic manuscript text for demonstrations.

## Proposed workflow

1. Read manuscript paragraphs.
2. Detect in-text citation patterns.
3. Identify the reference section.
4. Map citations to bibliography entries.
5. Query scholarly metadata services.
6. Compare title, authors, year, journal and DOI.
7. Check known publication updates/corrections/retractions where available.
8. Triage whether available evidence plausibly supports the cited statement.
9. Send unresolved cases to manual review.

## Example output

Citation status:

- bibliographic identity: verified,
- DOI: matched,
- year: matched,
- publication update: none found,
- support evidence: abstract available,
- claim support: manual review recommended.

## Important distinction

Three different questions must remain separate:

1. **Does the citation exist?**
2. **Does the bibliography entry match the publication?**
3. **Does the publication actually support this manuscript claim?**

A system that answers only the first two should never display “claim verified.”

## Manual review actions

A researcher should be able to:

- open the DOI,
- inspect available abstract/full text,
- keep the citation,
- replace incorrect metadata,
- mark the evidence uncertain,
- or remove an unsupported citation.

## Value demonstrated

This case shows the advantage of bringing scholarly verification into Word while retaining researcher control and avoiding fabricated references.
