// Vs code 安装 json2ts 插件，复制 json 数据，使用 json2ts 生成 ts 类型定义文件
// 本来快捷键是 ctrl + alt + v 但是用不起，左下角设置我改成 ctrl + alt + j 可以用了

export interface Author {
	mid: number;
	name: string;
	face: string;
}

export interface Stat {
	aid: number;
	view: number;
	danmaku: number;
	reply: number;
	favorite: number;
	coin: number;
	share: number;
	now_rank: number;
	his_rank: number;
	like: number;
	dislike: number;
	vt: number;
	vv: number;
}

export interface VideoItem {
	aid: number;
	type_id: number;
	tname: string;
	pic: string;
	title: string;
	pubdate: number;
	ctime: number;
	tags: any[];
	duration: number;
	author: Author;
	stat: Stat;
	hot_desc: string;
	corner_mark: number;
	bvid: string;
	enable_vt: number;
}