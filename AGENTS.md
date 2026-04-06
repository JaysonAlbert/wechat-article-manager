# AGENTS.md

## How to investigate

Read these in order:
1. `README.md` – project overview and usage
2. `publish.js` – the publishing script and execution flow
3. `package.json` – scripts and dependencies

## Commands

- **Publish an article:**
  ```bash
  node publish.js --file articles/example.md --theme default
  ```

- **Available themes:**
  `default`, `orangeheart`, `rainbow`, `lapis`, `pie`, `maize`, `purple`, `phycat`
  (Default: `default`)

## Architecture

- Single-file tool: `publish.js` reads a markdown file with frontmatter (title, date, tags)
- Uses `wenyan-mcp` CLI internally via `execSync`
- No build, test, or lint setup required
- Articles go in the `articles/` directory

## Gotchas

- File path can be relative (from `articles/`) or absolute
- The tool invokes an external MCP command; it doesn't publish directly to WeChat

## Writing Guide

- `WECHAT_WRITING_GUIDE.md` - WeChat Markdown best practices (frontmatter, headings, code blocks, styling)
