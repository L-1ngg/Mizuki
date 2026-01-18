# 🌸 L1ngg 的博客

![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen)
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)
![Astro](https://img.shields.io/badge/Astro-5.15.3-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)

🌏 **README 语言：** [English](./README.md) | [简体中文](./README.zh.md) | [繁體中文](./README.tw.md) | [日本語](./README.ja.md)

## 📖 关于本博客

这是 L1ngg 的个人博客，用于分享技术文章、学习笔记和生活记录。

**博客地址：** [https://l1ngg.info](https://l1ngg.info)

## 🎨 技术栈

本博客基于以下优秀的开源项目构建：

### 核心框架
- **[Astro](https://astro.build)** - 现代化的静态站点生成器
- **[Tailwind CSS](https://tailwindcss.com)** - 实用优先的 CSS 框架
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript 的超集

### 模板来源
本博客使用 **[Mizuki](https://github.com/matsuzaka-yuki/mizuki)** 模板构建。

Mizuki 是一个功能丰富、设计精美的 Astro 博客模板，它基于 [Fuwari](https://github.com/saicaca/fuwari) 模板进行了大量改进和功能扩展。

**Mizuki 的主要特性：**
- 🎨 精美的响应式设计，支持亮色/暗色主题切换
- 🔍 基于 Pagefind 的高级搜索功能
- 📝 增强的 Markdown 支持（数学公式、代码高亮、标注框等）
- 🖼️ 图片优化和 PhotoSwipe 画廊集成
- 🎵 内置音乐播放器
- 📱 特色页面（番剧追踪、友链、日记、时间线等）
- ⚡ 性能优化（懒加载、缓存等）
- 🎭 Live2D 看板娘支持

**原始模板致谢：**
- **[Mizuki](https://github.com/matsuzaka-yuki/mizuki)** by matsuzaka-yuki - 本博客直接使用的模板
- **[Fuwari](https://github.com/saicaca/fuwari)** by saicaca - Mizuki 的基础模板
- **[Yukina](https://github.com/WhitePaper233/yukina)** - 提供了设计灵感
- **[Firefly](https://github.com/CuteLeaf/Firefly)** - 提供了布局设计思路

## 🚀 本地运行

```bash
# 克隆仓库
git clone https://github.com/L-1ngg/Blog.git
cd mizuki

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 📝 内容管理

博客内容存储在独立的仓库 [Mizuki-Content](https://github.com/L-1ngg/Mizuki-Content) 中，通过 Git Submodule 或符号链接方式集成。

- **文章目录：** `content/posts/`
- **特殊页面：** `content/spec/`
- **数据配置：** `data/`
- **图片资源：** `images/`

## ⚙️ 配置

主要配置文件位于 `src/config.ts`，可以自定义：
- 站点信息（标题、描述、URL）
- 主题颜色
- 横幅图片和轮播设置
- 功能页面开关
- 社交链接
- 字体配置

## 📄 许可证

本博客内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。

模板代码遵循原项目的许可证：
- Mizuki: Apache License 2.0
- Fuwari: MIT License

## 🙏 致谢

感谢所有为开源社区做出贡献的开发者，特别是：
- [matsuzaka-yuki](https://github.com/matsuzaka-yuki) - Mizuki 模板作者
- [saicaca](https://github.com/saicaca) - Fuwari 模板作者
- Astro 和 Tailwind CSS 团队

---

⭐ 如果你喜欢这个博客，欢迎访问 [原始 Mizuki 模板](https://github.com/matsuzaka-yuki/mizuki) 并给它一个 Star！
