import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadEnv } from "./load-env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

loadEnv();

// 配置
const ENABLE_CONTENT_SYNC = process.env.ENABLE_CONTENT_SYNC !== "false";
const CONTENT_REPO_URL = process.env.CONTENT_REPO_URL || "";
const CONTENT_DIR = process.env.CONTENT_DIR || path.join(rootDir, "content");
// 优先使用 Cloudflare 提供的分支变量
const CONTENT_BRANCH = process.env.CONTENT_BRANCH || "main";

console.log(`\n=== Content Sync Start ===`);
console.log(`Repo:   ${CONTENT_REPO_URL}`);
console.log(`Branch: ${CONTENT_BRANCH}`);
console.log(`Dir:    ${CONTENT_DIR}`);

if (!ENABLE_CONTENT_SYNC) {
	console.log("Content sync disabled.");
	process.exit(0);
}

// === 1. 拉取内容仓库 ===
if (!fs.existsSync(CONTENT_DIR)) {
	if (!CONTENT_REPO_URL) {
		console.error("Error: CONTENT_REPO_URL not set.");
		process.exit(1);
	}
	try {
		let repoUrl = CONTENT_REPO_URL;
		if (process.env.GITHUB_TOKEN && process.env.CI) {
			repoUrl = CONTENT_REPO_URL.replace(
				"https://github.com/",
				`https://x-access-token:${process.env.GITHUB_TOKEN}@github.com/`,
			);
		}

		console.log(`Cloning branch '${CONTENT_BRANCH}'...`);
		execSync(
			`git clone --depth 1 -b ${CONTENT_BRANCH} ${repoUrl} ${CONTENT_DIR}`,
			{
				stdio: "inherit",
				cwd: rootDir,
			},
		);
	} catch (error) {
		console.error("Clone failed:", error.message);
		process.exit(1);
	}
} else {
	// CI 环境下建议清理重拉，防止缓存造成的“幽灵文件”
	if (process.env.CI || process.env.CF_PAGES) {
		console.log("CI Environment: Cleaning content dir for fresh clone...");
		fs.rmSync(CONTENT_DIR, { recursive: true, force: true });
		// 这里的逻辑有点循环，为了简单，建议构建命令依旧保留 rm -rf content
		// 如果脚本走到这里，说明是本地或者是没有 rm 的环境，提示一下即可
		console.log(
			"Existing content detected. (If build fails, try adding 'rm -rf content' to build command)",
		);
	} else {
		// 本地开发 git pull
		try {
			console.log("Pulling latest content...");
			execSync("git pull", { stdio: "inherit", cwd: CONTENT_DIR });
		} catch (e) {
			console.warn("Git pull failed, skipping...");
		}
	}
}

// === 2. 文件同步逻辑 ===
console.log("\nSyncing files...");

const contentMappings = [
	{ src: "posts", dest: "src/content/posts" },
	{ src: "spec", dest: "src/content/spec" },
	{ src: "data", dest: "src/data" },
	{ src: "images", dest: "public/images" },
];

for (const mapping of contentMappings) {
	const srcPath = path.join(CONTENT_DIR, mapping.src);
	const destPath = path.join(rootDir, mapping.dest);

	if (!fs.existsSync(srcPath)) {
		continue;
	}

	// 因为你删除了 src/content，所以创建 src/content/posts 前必须先有 src/content
	const destParent = path.dirname(destPath);
	if (!fs.existsSync(destParent)) {
		fs.mkdirSync(destParent, { recursive: true });
	}

	// 检测是否为 CI 环境 (Cloudflare 会设置 CF_PAGES)
	const isCI =
		process.env.CI === "true" ||
		process.env.CI === true ||
		process.env.CF_PAGES === "1";

	if (isCI) {
		// CI 环境：强制使用复制 (合并模式)
		// 这里的 copyRecursive 会自动处理文件夹创建
		console.log(`[Copy] ${mapping.src} -> ${mapping.dest}`);
		copyRecursive(srcPath, destPath);
	} else {
		// 本地环境：使用软链接 (方便开发)
		if (fs.existsSync(destPath)) {
			// 如果是文件或文件夹（非链接），先删掉，避免冲突
			// 注意：这里不再备份，因为代码仓库应该是干净的
			if (!fs.lstatSync(destPath).isSymbolicLink()) {
				fs.rmSync(destPath, { recursive: true, force: true });
			} else {
				fs.unlinkSync(destPath); // 删除旧链接
			}
		}

		try {
			const relPath = path.relative(path.dirname(destPath), srcPath);
			fs.symlinkSync(relPath, destPath, "junction");
			console.log(`[Link] ${mapping.src} -> ${mapping.dest}`);
		} catch (e) {
			// 链接失败回退到复制
			copyRecursive(srcPath, destPath);
		}
	}
}

console.log("\nContent synchronization completed\n");

// 递归复制函数 (合并模式)
function copyRecursive(src, dest) {
	const stats = fs.statSync(src);
	if (stats.isDirectory()) {
		if (!fs.existsSync(dest)) {
			fs.mkdirSync(dest, { recursive: true });
		}
		const files = fs.readdirSync(src);
		for (const file of files) {
			copyRecursive(path.join(src, file), path.join(dest, file));
		}
	} else {
		fs.copyFileSync(src, dest);
	}
}
