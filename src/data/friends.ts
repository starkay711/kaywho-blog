// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "DeepSeek",
		imgurl: "https://www.google.com/s2/favicons?domain=deepseek.com&sz=128",
		desc: "火爆全球的国产 AI 对话助手",
		siteurl: "https://www.deepseek.com",
		tags: ["AI"],
	},
	{
		id: 2,
		title: "ChatGPT",
		imgurl: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
		desc: "OpenAI 的 AI 对话旗舰",
		siteurl: "https://chat.openai.com",
		tags: ["AI"],
	},
	{
		id: 3,
		title: "哔哩哔哩",
		imgurl: "https://www.google.com/s2/favicons?domain=bilibili.com&sz=128",
		desc: "年轻人聚集的弹幕视频站",
		siteurl: "https://www.bilibili.com",
		tags: ["视频"],
	},
	{
		id: 4,
		title: "抖音",
		imgurl: "https://www.google.com/s2/favicons?domain=douyin.com&sz=128",
		desc: "记录美好生活的短视频平台",
		siteurl: "https://www.douyin.com",
		tags: ["视频"],
	},
	{
		id: 5,
		title: "小红书",
		imgurl: "https://www.google.com/s2/favicons?domain=xiaohongshu.com&sz=128",
		desc: "种草社区，生活方式分享",
		siteurl: "https://www.xiaohongshu.com",
		tags: ["社区"],
	},
	{
		id: 6,
		title: "知乎",
		imgurl: "https://www.google.com/s2/favicons?domain=zhihu.com&sz=128",
		desc: "中文互联网问答社区",
		siteurl: "https://www.zhihu.com",
		tags: ["社区"],
	},
	{
		id: 7,
		title: "GitHub",
		imgurl: "https://www.google.com/s2/favicons?domain=github.com&sz=128",
		desc: "全球最大的代码托管平台",
		siteurl: "https://github.com",
		tags: ["开发"],
	},
	{
		id: 8,
		title: "Cloudflare",
		imgurl: "https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128",
		desc: "网站加速与安全基础设施",
		siteurl: "https://www.cloudflare.com",
		tags: ["开发"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
