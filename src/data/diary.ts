import type { DiaryEntry } from "@/lib/types";
import 初次相遇1 from "@/assets/初次相遇1.jpg";
import 初次相遇2 from "@/assets/初次相遇2.jpg";

import 官宣3 from "@/assets/官宣3.png";
import 官宣2 from "@/assets/官宣2.jpg";

import 流泪电影 from "@/assets/流泪电影.jpg";

import zeng生日1 from "@/assets/zeng生日1.jpg";
import zeng生日3 from "@/assets/zeng生日3.png";

import 厦门1 from "@/assets/厦门1.jpg";
import 厦门2 from "@/assets/厦门2.jpg";
import 厦门3 from "@/assets/厦门3.jpg";

import qing生日1 from "@/assets/qing生日1.jpg";

import 青山湖 from "@/assets/青山湖.jpg";
import 西湖日落 from "@/assets/西湖日落.jpg";

import 良渚 from "@/assets/良渚1.jpg";

import 南昌 from "@/assets/南昌.jpg";
import 长沙 from "@/assets/长沙.jpg";
import 宁波 from "@/assets/宁波.jpg";
import 宁波2 from "@/assets/宁波2.png";


import 写真 from "@/assets/写真.jpg";

import zeng26生日 from "@/assets/zeng26生日.jpg";

import qing家 from "@/assets/qing家.jpg";

import 烟花秀1 from "@/assets/烟花秀1.jpg";
import 烟花秀2 from "@/assets/烟花秀2.jpg";


import qing25生日1 from "@/assets/qing25生日1.jpg";
import qing25生日2 from "@/assets/qing25生日2.jpg";

import 湖州1 from "@/assets/湖州1.png";

import 雪中爱情 from "@/assets/雪中爱情.jpg";
import videoPoster from "@/assets/video_poster.jpg";


export const diaryData: DiaryEntry[] = [
  {
    id: "1",
    date: "2023-12-26",
    title: "初次相遇",
    description: "那是寒冷的一天夜晚，我们匆匆忙忙地在一家杭帮菜馆第一次见面了。虽然菜品口味一般，但是空气中弥漫着恋爱萌芽的香气。在看电影的时候，小手就牵在一起了，怦然心动。随后，我们在楼下散步，聊了很多，从喜欢的电影到未来的梦想，仿佛认识了很久。老天爷觉得我们不能这么白受冻，于是下了一点幸福的雪花，，，",
    mediaType: "image",
    mediaSrc: [初次相遇1, 初次相遇2],
  },
  {
    id: "2",
    date: "2024-01-15",
    title: "第一次看“官宣”啦",
    description: "今天我们去吃杭州排行第一的烤肉啦！晴晴画了美美的妆，曾哥也穿上了帅气的大衣。我们在里面拍了好多好看的照片，一切都是那么的美好。当然不够，我们也同时在自己的朋友圈里展示了对方 嘿嘿~",
    mediaType: "image",
    mediaSrc: [官宣3,官宣2],
  },
  {
    id: "3",
    date: "2024-02-14",
    title: "看了一场流泪的电影",
    description: "去看《被我弄丢的你》了，感触对我们都好深，晴晴在电影院哭得稀里哗啦的，看来有在认真看电影呢。后面给晴晴写了封信 —— 曾曾不会把晴晴弄丢的",
    mediaType: "image",
    mediaSrc: [流泪电影],
  },
  {
    id: "4",
    date: "2024-07-20",
    title: "第一次给曾曾过生日",
    description: "哇塞！这个礼物真的好多啊，曾曾把遇到晴晴之前的生日礼物都收齐啦。可把曾曾感动坏了😭。用心的晴晴，真的是太太太用心了。同时，晴晴也很开心，比给自己过生日都还更开心",
    mediaType: "image",
    mediaSrc: [zeng生日3, zeng生日1],
  },
  {
    id: "5",
    date: "2024-08-01",
    title: "一起去厦门旅游",
    description: "这是两个人第一次两个人出去旅游诶，真的好放松！吹吹海风，看看日落，吃吃海鲜，不要太舒服。一切都是那么的惬意，两个人都好不舍得离开这里啊！如果你问我最美的风景在哪里，我会说是和你一起看过的海。海风吹乱了头发，但吹不散我们牵着的手。我们在沙滩上留下的脚印，被海浪卷走，却永远留在了心里。",
    mediaType: "image",
    mediaSrc: [厦门1, 厦门2, 厦门3],
  },
  {
    id: "6",
    date: "2024-10-20",
    title: "第一次给晴晴过生日",
    description: "幸福的晴晴公主，一直都是很幸福的。厉害的曾曾，把能安排的都安排好了，生日蛋糕、贺卡、鲜花、提前预定漂亮餐，都在他的掌握中哇。在浪漫的晚餐中，晴晴许下关于未来的愿望。",
    mediaType: "image",
    mediaSrc: qing生日1,
  },
  {
    id: "7",
    date: "2024-12-09",
    title: "青山湖一起哈哈哈",
    description: "青山湖是一个很不错的回忆。那天晴晴白色的大衣搭配一条蓝色的围巾，很有氛围感啊！两个人都玩的很开心，散了散心，吸了好多氧，一直到天黑。大家都恋恋不舍",
    mediaType: "image",
    mediaSrc: 青山湖,
  },
  {
    id: "8",
    date: "2024-12-16",
    title: "看一场西湖日落",
    description: "西湖日落果然名不虚传，潋滟的夕阳打在我们的脸上真的是绝了。两个人，悠闲的散散步，抛去压力，忘记了时间，漫不经心的谈谈心。这种感觉也许只有和喜欢的人才有吧...",
    mediaType: "image",
    mediaSrc: 西湖日落,
  },
  {
    id: "9",
    date: "2025-04-04",
    title: "去良渚闻闻油菜花",
    description: "良渚的油菜花，让我们感受到了春天的气息。我们坐在田边，晒着温暖午后阳光，都笑的好开心。我们也成为了两朵油菜花，知道为什么吗？我们一起唱着：油菜花，“有才华”，油菜花，“有才华”~",
    mediaType: "image",
    mediaSrc: 良渚,
  },
  {
    id: "10",
    date: "2025-05-01",
    title: "打卡南昌",
    description: "啊，等了好久终于来了一个小长假。我们来到了曾曾家乡江西的南昌，吃了好吃的南昌拌粉和瓦罐汤，大赞，让晴晴感受到了江西人的饮食文化。八一广场也留下了我们的影子，我们一起打卡合照，一起对党忠诚哈哈哈😄",
    mediaType: "image",
    mediaSrc: 南昌,
  },
  {
    id: "11",
    date: "2025-05-04",
    title: "在橘子洲头我们也热吻过",
    description: "在橘子洲头，在毛爷爷的面前以及所有的人的目光下，我们相互拥抱在一起，轻吻了对方。这一刻，我们也是在这个岛上幸福的人之一。omo~ 虽然脸都红了，但是这个嘛! 就是爱情！",
    mediaType: "image",
    mediaSrc: 长沙,
  },
  {
    id: "12",
    date: "2025-06-02",
    title: "第一次去宁波",
    description: "好悠闲舒缓的一座城市。雨刚刚停，曾曾和晴晴就在钱东湖慢慢地走 慢慢地聊。烟雨湖边，就是风有点大，发型都吹乱了，但是一点也不影响我们去吃象山米馒头hhh",
    mediaType: "image",
    mediaSrc: [宁波,宁波2],
  },
    {
    id: "13",
    date: "2025-07-07",
    title: "第一次去拍写真",
    description: "晴晴带曾曾去拍人生第一次的情侣写真，试衣服、化妆、摆拍姿势，3、2、1，咔嚓！，留下了一张张幸福的瞬间，两个人都沉浸其中，仿佛已经穿越到了未来。原来，和喜欢的的人一起拍写真心动都藏不住哇",
    mediaType: "image",
    mediaSrc: 写真,
  },
    {
    id: "14",
    date: "2025-07-23",
    title: "又给曾曾过生日",
    description: "第二次生日喽，大男孩又长大了了一岁。看起来也成熟了好多，咳咳，原来是刚刚下班赶过来过生日呢，曾曾上班挺忙的，生日原来都是要排期过的哈哈哈，还好晴晴把它给安排上了！",
    mediaType: "image",
    mediaSrc: zeng26生日,
  },
  {
    id: "15",
    date: "2025-10-02",
    title: "第一次去晴晴家",
    description: "来了晴晴的家乡，正在和家人们一起爬九华山呢，山不高，佛像真的大，大家都很虔诚，许下了许许多多的愿望。这么大的佛像愿望肯定灵哇！",
    mediaType: "image",
    mediaSrc: qing家,
  },
  {
    id: "16",
    date: "2025-10-06",
    title: "一起看一场烟花秀",
    description: "人生最好看到烟花秀，我们一起在葛仙村看到了。无数的孔明灯缓缓地升起，烟花绽放，真的超级震撼!! 最重要的是，还有一个演唱会，两个人都玩的很开心，这一夜，此生难忘。",
    mediaType: "image",
    mediaSrc: [烟花秀1,烟花秀2],
  },
    {
    id: "17",
    date: "2025-10-20",
    title: "第二次给晴晴过生日",
    description: "给晴晴过第二次生日啦！曾曾也很开心，因为曾曾抢到了一直想送她的礼物，相信这个礼物她肯定很喜欢！因为时常看到她抱怨自己的手机，哈哈哈... 今年生日还是手写信、西餐、礼物、蛋糕等等一样都不能落下哦，祝晴晴生日快乐啦！",
    mediaType: "image",
    mediaSrc: [qing25生日2,qing25生日1],
  },
   {
    id: "18",
    date: "2025-12-20",
    title: "湖州打卡",
    description: "嗖~ 一下，我们就到了湖州啦。在南浔古镇里逛吃逛喝，看着青砖白瓦的楼宇，尝尝软糯的浔蹄、独特的双浇面。这一天正好赶上了2025的最后一个秋天，在小河边的两个人都超级的惬意。",
    mediaType: "image",
    mediaSrc: 湖州1,
  },
  {
    id: "19",
    date: "2026-01-01",
    title: "在雪中写下我们的爱情",
    description: "2026的新年的第一场雪，CQ ❤️ ZP。你好，2026。你好，我的未来。愿年年岁岁，我们都一起相伴。",
    mediaType: "image",
    mediaSrc: 雪中爱情 ,
  },
  {
    id: "20",
    date: "Future",
    title: "未完待续",
    description: "我们的故事才刚刚开始呢。未来还有无数个日夜，无数个瞬间等待我们去创造。这本日记记录了我们的欢笑，也预示着更多美好的明天。",
    mediaType: "text",
    mediaSrc: "", // User to replace
    mediaPoster: videoPoster,
  },
];
