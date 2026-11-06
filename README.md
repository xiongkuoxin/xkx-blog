# xkx-blog · 江湖夜雨十年灯，代码三千行

> 以键为剑，以屏为江湖——一个侠客程序员的技术日志。

这是一个基于 [VitePress](https://vitepress.dev/) 构建的个人站点，主要混合了**体系化知识库**与**个人随笔**。

## 🗡️ 站点架构

本站内容分为两大核心区域：

- **剑谱** (`/notes/`)：知识库。记录体系化技术笔记、踩坑记录与源码解析。有明确主题，日后常来查阅。
- **江湖** (`/posts/`)：随笔区。阶段性想法、随笔与生活琐碎。一次性的、带时间戳的碎碎念。

此外，在 [侠客列传](https://xiongkuoxin.github.io/xkx-blog/about) 中可以了解更多关于站长的信息。

## 🛠️ 技术栈

- 框架：[VitePress](https://vitepress.dev/)
- 依赖管理：[pnpm](https://pnpm.io/)
- 插件：[vitepress-sidebar](https://github.com/jooy2/vitepress-sidebar)（自动生成侧边栏）

## 🚀 本地开发

如果你也想在本地运行或修改这个项目，请确保已安装 Node.js (v20+) 与 pnpm。

```bash
# 1. 克隆仓库
git clone https://github.com/xiongkuoxin/xkx-blog.git

# 2. 进入目录
cd xkx-blog

# 3. 安装依赖
pnpm install

# 4. 启动本地开发服务器
pnpm docs:dev
```

启动后，访问 `http://localhost:5173/` 即可预览。

## 📦 构建与部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。每次推送到 `main` 分支时，会自动触发构建。

如需在本地打包预览：

```bash
pnpm docs:build
pnpm docs:preview
```

## ✍️ 写作约定

- **有明确主题、以后会查** -> 写入 `/notes/`（剑谱），挂侧边栏。
- **一次性的、带时间戳的感想** -> 写入 `/posts/`（江湖），按文件夹分类归档。
- 文章命名必须使用 `001.标题.md` 的格式，使侧边栏自动排序。
