# hugo-book (whxnotes fork)

Local fork of [alex-shpak/hugo-book](https://github.com/alex-shpak/hugo-book)
(v0.14.0) used by the whxnotes site, pinned as a submodule at
`themes/hugo-book`. All site customizations live in-tree; upstream updates are
merged/rebased onto them. See the site repo's `AGENTS.md` for the full
breakdown.

Customizations:

- Grayscale dark mode (replaces the Nord palette)
- JS-driven mobile drawers + top bar (replaces the checkbox/label mechanism)
- Titles derived from the first H1 in content; meta/schema/RSS sync
- Shiki syntax highlighting (raw code blocks + build-time/client fallback)
- MathJax passthrough, admonitions, CJK link/image resolution
- Light/dark favicons, shared meta description
