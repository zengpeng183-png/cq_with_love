import type { DiaryEntry } from "@/lib/types";
import meetingImg from "@/assets/meetin1g.jpg";
import travelImg from "@/assets/travel.jpg";
import movieImg from "@/assets/movie.jpg";
import dinnerImg from "@/assets/dinner.jpg";
import parkImg from "@/assets/park.jpg";
import giftImg from "@/assets/gift.jpg";
import birthday2025 from "@/assets/birthday2025.jpg";
import videoPoster from "@/assets/video_poster.jpg";

export const diaryData: DiaryEntry[] = [
  {
    id: "1",
    date: "2023-12-26",
    title: "初次相遇",
    description: "那是寒冷的一天夜晚，我们匆匆忙忙的在一家的ha第一次见面。空气中弥漫着拿铁的香气，你的笑容比窗外的阳光还要温暖。我们聊了很多，从喜欢的电影到未来的梦想，仿佛认识了很久。",
    mediaType: "image",
    mediaSrc: meetingImg,
  },
  {
    id: "2",
    date: "2024-01-15",
    title: "第一次看电影",
    description: "黑暗的影院里，我们的手不经意间触碰。屏幕上的故事很精彩，但我更在意身边你的呼吸声。那一桶爆米花，是我们共享的第一份甜蜜。",
    mediaType: "image",
    mediaSrc: movieImg,
  },
  {
    id: "3",
    date: "2024-02-14",
    title: "情人节晚餐",
    description: "烛光摇曳，红酒微醺。这是我们一起度过的第一个情人节。不需要昂贵的礼物，只要看着你的眼睛，我就拥有了全世界。",
    mediaType: "image",
    mediaSrc: dinnerImg,
  },
  {
    id: "4",
    date: "2024-03-20",
    title: "春日踏青",
    description: "春天来了，我们去公园散步。脚下的落叶沙沙作响，头顶的阳光透过树叶洒下来。和你一起走过的路，每一步都是风景。",
    mediaType: "image",
    mediaSrc: parkImg,
  },
  {
    id: "5",
    date: "2024-05-20",
    title: "520惊喜",
    description: "在这个充满爱意的日子里，一个小小的惊喜。礼物不在于贵重，而在于那份把你放在心尖上的心意。看到你惊喜的表情，是我今天最大的成就。",
    mediaType: "image",
    mediaSrc: giftImg,
  },
  {
    id: "6",
    date: "2024-06-18",
    title: "第一次旅行",
    description: "如果你问我最美的风景在哪里，我会说是和你一起看过的海。海风吹乱了头发，但吹不散我们牵着的手。我们在沙滩上留下的脚印，被海浪卷走，却永远留在了心里。",
    mediaType: "image",
    mediaSrc: travelImg,
  },
  {
    id: "7",
    date: "2024-08-10",
    title: "七夕浪漫夜",
    description: "牛郎织女一年一会，而我们可以天天相见，这是多么大的幸运。在浪漫的晚餐中，许下关于未来的愿望。",
    mediaType: "image",
    mediaSrc: dinnerImg,
  },
  {
    id: "8",
    date: "2024-09-15",
    title: "秋日漫步",
    description: "秋天到了，天气转凉，正好给了我紧紧握住你手的理由。我们在金黄色的街道上漫步，聊着琐碎的日常，感受着平凡的幸福。",
    mediaType: "image",
    mediaSrc: parkImg,
  },
  {
    id: "9",
    date: "2024-10-05",
    title: "你的生日",
    description: "祝我最爱的人生日快乐。愿你往后的每一天都如今天这般开心。我会一直陪在你身边，一年又一年。",
    mediaType: "image",
    mediaSrc: giftImg,
  },
  {
    id: "10",
    date: "2024-11-11",
    title: "周末宅家",
    description: "不出门的日子也很美好。窝在沙发上看老电影，点一份外卖，享受只属于我们两个人的静谧时光。最简单的陪伴，就是最长情的告白。",
    mediaType: "image",
    mediaSrc: movieImg,
  },
  {
    id: "11",
    date: "2024-12-26",
    title: "一周年纪念",
    description: "时间过得真快，转眼就是一年。回到初次相遇的地方，那杯咖啡的味道依旧，而我们对彼此的爱意更浓了。",
    mediaType: "image",
    mediaSrc: meetingImg,
  },
  {
    id: "12",
    date: "2025-01-01",
    title: "新年快乐",
    description: "新年的第一缕阳光，是和你一起迎接的。你好，2025。你好，我的未来。愿年年岁岁，有你相伴。",
    mediaType: "image",
    mediaSrc: travelImg,
  },
    {
    id: "13",
    date: "2025-10-20",
    title: "给你过25岁生日",
    description: "给你过第二次生日啦！我也很开心，因为我抢到了一直想送个你的礼物，相信这个礼物你肯定很喜欢！因为时常看到你手机配不上我的女朋友了，哈哈哈... 今年生日还是手写信、西餐、礼物、蛋糕等等一样都不能落下哦，祝你生日快乐啦！",
    mediaType: "image",
    mediaSrc: birthday2025,
  },
  {
    id: "14",
    date: "Future",
    title: "未完待续",
    description: "我们的故事才刚刚开始呢。未来还有无数个日夜，无数个瞬间等待我们去创造。这段视频记录了我们的欢笑，也预示着更多美好的明天。（注：请替换为你们的甜蜜Vlog）",
    mediaType: "video",
    mediaSrc: "", // User to replace
    mediaPoster: videoPoster,
  },
];
