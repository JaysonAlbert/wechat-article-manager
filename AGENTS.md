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

- `WECHAT_WRITING_GUIDE.md` - WeChat Markdown best practices
- **禁止本地文件链接**：不要使用 `[text](../path.md)`，改用 HTTP/HTTPS URL
  - 示例：`[LLM 性能对比表](https://github.com/JaysonAlbert/llm-profile/wiki/Index.md)`
  - 不要使用：`[LLM 性能对比表](../llm-profile/wiki/Index.md)`
- 外部资源链接统一使用 GitHub wiki 或 raw 内容链接
