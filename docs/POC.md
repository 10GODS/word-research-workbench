# Proof-of-Concept Scope

## Objective

Show that a Microsoft Word research workspace can consolidate three web/research surfaces, manual scholarly citation entry, a minimal persistent note, and a local-processing slot without exposing the production implementation.

## Demo scenario

1. Open the mock Word-style task pane.
2. Click **Web Workspace 1** to show the embedded-browser concept.
3. Click **Web Workspace 2** to show a second research/AI workspace.
4. Open **Scholar Workspace**, enter a paper title, and demonstrate manual citation/reference capture.
5. Open **Notepad**, type a short note, and press **Save**.
6. Open **Local Processing** to show the CPU-first/offline hook and privacy boundary.

## POC limitations

- The demo is static and uses mock browser panels.
- It does not include model weights or production prompts.
- It does not scrape Google Scholar.
- It does not auto-submit text to third-party websites.
- It does not contain production credentials.
- It is not a released Word add-in.

## Success criteria

The POC is successful if a reviewer can understand the product direction in under five minutes and see how the pieces fit together without gaining access to private implementation details.
