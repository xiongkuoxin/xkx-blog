import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "江湖夜雨十年灯，代码三千行",
  titleTemplate: ":title | xkx-blog",
  description: "以键为剑，以屏为江湖——一个程序员的技术日志",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "xkx-blog",
    nav: [
      { text: "剑谱", link: "/notes/" }, // 知识：带侧边栏
      { text: "江湖", link: "/posts/" }, // 日志：博客列表
      { text: "侠客列传", link: "/about" },
    ],

    sidebar: generateSidebar([
      {
        documentRootPath: "docs",
        scanStartPath: "notes", // 处理剑谱目录
        resolvePath: "/notes/",
        useTitleFromFileHeading: true, // 侧边栏显示用 md 里的 # 标题
        useFolderTitleFromIndexFile: true, // 文件夹如果有 index.md，用其标题作为目录名
        sortMenusOrderNumericallyFromTitle: true, // 按文件名数字前缀排序，并自动剥离前缀
        hyphenToSpace: true,
        collapseDepth: 2, // 默认展开到第2层
      },
      {
        documentRootPath: "docs",
        scanStartPath: "posts", // 处理江湖目录
        resolvePath: "/posts/",
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        hyphenToSpace: true,
        sortMenusOrderNumericallyFromTitle: true, // 按文件名数字前缀排序，并自动剥离前缀
        collapseDepth: 2,
      },
    ]),

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
