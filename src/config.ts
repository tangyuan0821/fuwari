import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "秋窗漫笔",
	subtitle: "偶间寻味，笔底藏思",
	lang: "zh_CN", // 语言代码，例如 'en'、'zh_CN'、'ja' 等
	themeColor: {
		hue: 250, // 主题色的默认色调，范围从 0 到 360。例如：红色: 0, 蓝绿: 200, 青色: 250, 粉色: 345
		fixed: false, // 隐藏访客的主题色选择器
	},
	banner: {
		enable:true,
		src: "https://i.pximg.net/img-original/img/2025/04/03/21/58/23/128919932_p0.png", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
		
		position: "center", // 相当于 object-position，只支持 'top'、'center'、'bottom'。默认为 'center'
		credit: {
			enable: true, // 显示横幅图片的来源文字
			text: "釧路の空", // 要显示的来源文字
			url: "https://www.pixiv.net/artworks/128919932", // （可选）原作品或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，范围从 1 到 3
	},
	favicon: [
		// 将此数组留空以使用默认图标
		// {
		//   src: '/favicon/icon.png',    // 网站图标的路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅在浅色和深色模式有不同图标时设置
		//   sizes: '32x32',              // （可选）图标大小，仅在有不同尺寸的图标时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "微博",
			url: "https://weibo.com/u/7736964006", // 内部链接不应包含基础路径，因为它会自动添加
			external: true, // 显示外部链接图标，并将在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/A27BFB24AA7D291ECD935C72C24FDCE8.jpg", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
	name: "闲敲棋子落灯花",
	bio: "鱼书欲寄何由达？水远山长处处同。",
	links: [
		{
			name: "微博",
			icon: "fa6-brands:weibo", // 访问 https://icones.js.org/ 查看图标代码
			// 如果尚未包含相应的图标集，则需要安装它
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://weibo.com/u/7736964006",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景色）正在被覆盖，请查看 astro.config.mjs 文件。
	// 请选择深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};
