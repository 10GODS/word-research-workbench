# Collaboration Guide

This repository is a **public beta proof of concept**. The goal is to make it easy for contributors to help with the public POC while keeping unpublished production implementation, private research material, credentials, and model assets outside the public repository.

## Good contribution areas

- Word task-pane UX and accessibility
- Office Dialog / WebView2 behavior and fallback handling
- Citation-entry ergonomics
- Google Scholar manual workflow UX
- Local/offline inference benchmarking on ordinary Windows PCs
- Intel CPU/iGPU and OpenVINO testing
- Installer reliability and upgrade behavior
- Documentation, testing, reproducibility, and privacy review

## Contribution workflow

1. Check existing issues or open a focused issue.
2. Create a feature branch such as `feature/browser-dialog-poc` or `fix/windows-installer`.
3. Keep changes scoped to the issue or agreed task.
4. Do not commit credentials, model weights, unpublished prompts, private manuscripts, personal data, certificates, or production secrets.
5. Open a pull request with what changed, why it changed, how it was tested, and any privacy/security implications.
6. The owner reviews and merges approved changes.

## Suggested collaborator roles

- **Office Add-in Engineer** — Word/Office.js, WebView2, dialog API, Windows packaging.
- **Research Workflow Reviewer** — citation, scholarly-search, manuscript UX.
- **Local AI Engineer** — CPU/OpenVINO inference and model optimization.
- **QA / Windows Tester** — install, upgrade, Office-version and machine compatibility.
- **Product/UX Contributor** — compact task-pane flow and usability.
- **Privacy / Security Reviewer** — local-first data handling, threat review, and safe diagnostics.

## Access principle

Public contribution does not automatically grant access to unpublished/private components. Deeper collaboration can be arranged separately when it is useful for a specific task.

## Communication

Use GitHub Issues for scoped work and Pull Requests for reviewable changes. For collaboration, use the **Collaboration request** issue template. For sensitive discussion, open only a minimal public contact request and move the detailed conversation off the public issue.

See [`CONTACT.md`](CONTACT.md), [`CONTRIBUTING.md`](CONTRIBUTING.md), and [`PUBLIC_POC_BOUNDARY.md`](PUBLIC_POC_BOUNDARY.md).
