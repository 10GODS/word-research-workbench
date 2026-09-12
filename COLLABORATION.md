# Collaboration Guide

This is a controlled private beta. The goal is to make it easy for trusted contributors to help without exposing the complete production implementation.

## Good contribution areas

- Word task-pane UX and accessibility
- Office Dialog/WebView behavior and fallback handling
- Citation-entry ergonomics
- Google Scholar manual workflow UX
- Local/offline inference benchmarking on ordinary Windows PCs
- Installer reliability and upgrade behavior
- Documentation, testing, reproducibility, and privacy review

## Contribution workflow

1. Ask the owner for collaborator access.
2. Create a feature branch such as `feature/browser-dialog-poc` or `fix/windows-installer`.
3. Keep changes scoped to the issue or agreed task.
4. Do not commit credentials, private model weights, unpublished prompts, private manuscripts, or production secrets.
5. Open a pull request with:
   - what changed;
   - why it changed;
   - how it was tested;
   - screenshots or a short demo when useful;
   - any privacy/security implications.
6. The owner reviews and merges approved changes.

## Suggested collaborator roles

- **Office Add-in Engineer** — Word/Office.js, WebView2, dialog API, Windows packaging.
- **Research Workflow Reviewer** — citation, scholarly-search, manuscript UX.
- **Local AI Engineer** — CPU/OpenVINO inference and model optimization.
- **QA / Windows Tester** — install, upgrade, Office-version and machine compatibility.
- **Product/UX Contributor** — compact task-pane flow and usability.

## Access principle

Collaborators receive only the level of access needed for their task. Production credentials and undisclosed IP should remain outside the repository.

## Communication

Use GitHub Issues for scoped work and Pull Requests for reviewable changes. Sensitive design details should be discussed privately with the owner rather than placed in public channels.
