import type { FullscreenWallpaperConfig } from "../types/config";

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true,
	src: {
		desktop: [
			"https://kaywho-settings.imkay-v1.workers.dev/img/sun-1.webp",
			"https://kaywho-settings.imkay-v1.workers.dev/img/sun-2.webp",
			"https://kaywho-settings.imkay-v1.workers.dev/img/sun-3.webp",
			"https://kaywho-settings.imkay-v1.workers.dev/img/sun-4.webp",
		],
		mobile: [
			"https://kaywho-settings.imkay-v1.workers.dev/img/sun-m-1.webp",
			"https://kaywho-settings.imkay-v1.workers.dev/img/sun-m-2.webp",
			"https://kaywho-settings.imkay-v1.workers.dev/img/sun-m-3.webp",
			"https://kaywho-settings.imkay-v1.workers.dev/img/sun-m-4.webp",
		],
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
	switchable: true,
	overlay: {
		opacity: 0.8, // 壁纸不透明度，0-1
		blur: 1.5, // 背景模糊半径（px）
		cardOpacity: 0.8, // 卡片不透明度，0-1
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
	},
	fullscreen: {
		switchable: {
			opacity: true,
			blur: true,
		},
	},
};
