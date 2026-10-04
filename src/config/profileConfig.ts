import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "kay",
	bio: "记录笔记、文章和收集的图片",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/starkay711",
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:hello@kaywho.com",
		},
	],
};
