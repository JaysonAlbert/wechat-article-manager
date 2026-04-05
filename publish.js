import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const articleFile = process.argv.find(arg => arg.startsWith('--file='))?.split('=')[1] || null;
const themeParam = process.argv.find(arg => arg.startsWith('--theme='))?.split('=')[1] || 'default';
const theme = themeParam || 'default';

if (!articleFile) {
  console.error('请指定文章文件：node publish.js --file path/to/article.md');
  process.exit(1);
}

const articlesDir = path.join(__dirname, 'articles');
const fullPath = path.isAbsolute(articleFile) ? articleFile : path.join(articlesDir, articleFile);

if (!fs.existsSync(fullPath)) {
  console.error(`文章文件不存在：${fullPath}`);
  process.exit(1);
}

const content = fs.readFileSync(fullPath, 'utf-8');

console.log(`发布文章：${articleFile}`);
console.log(`使用主题：${theme}`);

try {
  const result = execSync(`wenyan-mcp publish-article --file "${fullPath}" --theme ${theme}`, {
    encoding: 'utf-8',
    stdio: 'inherit'
  });
} catch (error) {
  console.error('发布失败:', error.stderr);
  process.exit(1);
}
