# 微信公众号文章管理

微信公众号文章管理工具，支持使用 Markdown 编写和发布文章到微信公众号。

## 功能

- 使用 Markdown 编写微信公众号文章
- 支持多种主题样式（default, orangeheart, rainbow, lapis, pie, maize, purple, phycat）
- 一键发布到微信公众号

## 使用方法

### 编写文章

在 `articles` 目录下创建 `.md` 文件，包含 frontmatter 和文章正文。

### 发布文章

```bash
node publish.js --file articles/example.md --theme default
```

或查看 `package.json` 中的脚本命令。

## 项目结构

```
wechat-article-manager/
├── articles/          # 文章目录
├── themes/           # 主题配置（如有）
├── publish.js        # 发布脚本
├── package.json      # 项目配置
└── README.md         # 项目说明
```

## 主题说明

- **default**: 经典布局，适合长文阅读
- **orangeheart**: 暖色橙色，优雅明亮
- **rainbow**: 多彩设计，简洁生动
- **lapis**: 蓝色调，清新简约
- **pie**: 仿sspai.com 风格，现代时尚
- **maize**: 浅色玉米色调，清爽
- **purple**: 紫色点缀，极简风格
- **phycat**: 物理猫薄荷绿，结构清晰
