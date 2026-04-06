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
- **Frontmatter 必填项**：
  - `title`：文章标题
  - `date`：发布日期，格式 `YYYY-MM-DD`
  - `tags`：标签数组
  - `cover`：封面图 URL（必须添加，可以是本地路径）
  - `description`：文章描述
- **禁止本地文件链接**（文本引用）：
  - ❌ 不要使用：`[LLM 性能对比表](../llm-profile/wiki/Index.md)`
  - ✅ 使用 HTTP/HTTPS：`[LLM 性能对比表](https://github.com/JaysonAlbert/llm-profile/wiki/Index.md)`
- **封面图可以本地路径**：
  - ✅ 允许：`cover: ./articles/img.jpg` 或 `cover: articles/RTX 5090.png`
- **正文中添加图片**：
  - ✅ 允许：`![图片描述](articles/img.jpg)`
  - 示例：`![RTX 5090](articles/RTX 5090 powering the coder's craft.png)`
- 外部资源链接（Wiki、文档）统一使用 GitHub wiki 或 raw 内容链接
- 图片资源（封面图、正文图片）可以使用本地路径
