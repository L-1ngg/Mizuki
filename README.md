# 🌸 L1ngg's Blog

![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen)
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)
![Astro](https://img.shields.io/badge/Astro-5.15.3-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)

🌏 **README Languages:** [English](./README.md) | [简体中文](./README.zh.md) | [繁體中文](./README.tw.md) | [日本語](./README.ja.md)

## 📖 About This Blog

This is L1ngg's personal blog for sharing technical articles, learning notes, and life records.

**Blog URL:** [https://l1ngg.info](https://l1ngg.info)

## 🎨 Tech Stack

This blog is built with the following excellent open-source projects:

### Core Framework
- **[Astro](https://astro.build)** - Modern static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript superset

### Template Source
This blog uses the **[Mizuki](https://github.com/matsuzaka-yuki/mizuki)** template.

Mizuki is a feature-rich and beautifully designed Astro blog template, built upon the [Fuwari](https://github.com/saicaca/fuwari) template with extensive improvements and feature additions.

**Mizuki's Main Features:**
- 🎨 Beautiful responsive design with light/dark theme switching
- 🔍 Advanced search functionality based on Pagefind
- 📝 Enhanced Markdown support (math formulas, code highlighting, callouts, etc.)
- 🖼️ Image optimization and PhotoSwipe gallery integration
- 🎵 Built-in music player
- 📱 Special pages (anime tracking, friends, diary, timeline, etc.)
- ⚡ Performance optimization (lazy loading, caching, etc.)
- 🎭 Live2D mascot support

**Original Template Credits:**
- **[Mizuki](https://github.com/matsuzaka-yuki/mizuki)** by matsuzaka-yuki - The template directly used for this blog
- **[Fuwari](https://github.com/saicaca/fuwari)** by saicaca - The base template for Mizuki
- **[Yukina](https://github.com/WhitePaper233/yukina)** - Provided design inspiration
- **[Firefly](https://github.com/CuteLeaf/Firefly)** - Provided layout design ideas

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/L-1ngg/Blog.git
cd mizuki

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📝 Content Management

Blog content is stored in a separate repository [Mizuki-Content](https://github.com/L-1ngg/Mizuki-Content), integrated via Git Submodule or symbolic links.

- **Posts:** `content/posts/`
- **Special Pages:** `content/spec/`
- **Data Config:** `data/`
- **Images:** `images/`

## ⚙️ Configuration

Main configuration file is located at `src/config.ts`, where you can customize:
- Site information (title, description, URL)
- Theme colors
- Banner images and carousel settings
- Feature page toggles
- Social links
- Font configuration

## 📄 License

Blog content is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

Template code follows the original project licenses:
- Mizuki: Apache License 2.0
- Fuwari: MIT License

## 🙏 Acknowledgements

Thanks to all developers who contribute to the open-source community, especially:
- [matsuzaka-yuki](https://github.com/matsuzaka-yuki) - Mizuki template author
- [saicaca](https://github.com/saicaca) - Fuwari template author
- Astro and Tailwind CSS teams

---

⭐ If you like this blog, please visit the [original Mizuki template](https://github.com/matsuzaka-yuki/mizuki) and give it a Star!
