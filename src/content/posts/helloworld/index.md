---
title: Hello World
published: 2026-01-31
description: "第一篇博客"
tags: ["随笔"]
category: 随笔
draft: false
---
2026年1月31日，我的博客诞生了。

我给它取名叫秋窗漫笔（感谢豆包，AI太好用了！）

我使用了 [Astro](https://astro.build/) 框架和 [Fuwari](https://github.com/saicaca/fuwari) 主题部署。详情参阅 [Fuwari 文档](https://github.com/saicaca/fuwari/blob/main/docs/README.zh-CN.md) 和 [Astro Docs](https://docs.astro.build/)。

## 框架与主题的选用
在去年我曾尝试搭建过一个博客，当时使用的[Gmeek](https://github.com/Meekdai/Gmeek)这个框架，它的特点是可以通过GitHub issues撰写文章，界面也还算精美。但苦于肚子里没有墨水，写不出什么文章，而且对于网站的维护缺乏经验就放弃了。

今年1月初，我尝试使用 [Twilight](https://twilight.spr-aachen.com/) 主题部署博客，但主题配置过于繁琐，忙活了一晚上也未成形。第二天又要投入到忙碌的学习中，也不了了之了。

1月30号的夜里，期末考完了。忙碌的考试周和繁重的九年级学业也暂告一段落了（虽然周一还要上学，嘤嘤嘤）。终于又有时间捣鼓博客了。在逛B站时，我浏览了几个astro 框架的主题，发现了一个很好看的主题，也就是[Fuwari](https://github.com/saicaca/fuwari)。又在网上了解了一下，可以搜到很多inspired by fuwari 的主题，比如 [Yukina](https://yukina-blog.vercel.app/)、[Firefly](https://demo-firefly.netlify.app/)、[Mizuki](https://mizuki.mysqil.com/)等主题。

下图是它们 star-history.com 上的增长趋势：

[![Star History Chart](https://api.star-history.com/svg?repos=saicaca/fuwari,Spr-Aachen/Twilight,WhitePaper233/yukina,CuteLeaf/Firefly,matsuzaka-yuki/Mizuki,saicaca/hexo-theme-vivia&type=date&legend=top-left)](https://www.star-history.com/#saicaca/fuwari&Spr-Aachen/Twilight&WhitePaper233/yukina&CuteLeaf/Firefly&matsuzaka-yuki/Mizuki&saicaca/hexo-theme-vivia&type=date&legend=top-left)
于是我决定使用[Fuwari](https://github.com/saicaca/fuwari)作为主题，搭建博客。

## 部署与调试
由于有了经验，部署的流程很快，按照文档和网上教程一步一步来，一小时内搞定。改造页面花了好久，不过最终也是成了

## 博客的格式

### 元数据

文章开头需要添加 YAML 前端数据（frontmatter）：

```
---
title: My First Blog Post
published: 2020-02-02
description: This is the first post of my new Astro blog.
cover: ./cover.webp
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

下面是详细的元数据表：

|Attribute|Description|
|---|---|
|`title`|The title of the post.|
|`published`|The date the post was published.|
|`pinned`|Whether this post is pinned to the top of the post list.|
|`description`|A short description of the post. Displayed on index page.|
|`image`|The cover image path of the post.  <br>1. Start with `http://` or `https://`: Use web image  <br>2. Start with `/`: For image in `public` dir  <br>3. With none of the prefixes: Relative to the markdown file|
|`tags`|The tags of the post.|
|`category`|The category of the post.|
|`routeName`|Route name for the post. The post will be accessible at `/posts/{routeName}/`|
|`licenseName`|The license name for the post content.|
|`encrypted`|Set true to encrypt this post.|
|`password`|”123456”|
|`author`|The author of the post.|
|`sourceLink`|The source link or reference for the post content.|
|`draft`|If this post is still a draft, which won’t be displayed.|

### 博客的存放

博客放在 `src/content/posts/` 目录下。可以新建文件夹来存放复杂博客（比如本篇）

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

### Markdown Extended Features

附加功能包括：Github 仓库卡片、 Admonitions、GitHub syntax、Spoiler详情参考 [Extended Features](https://www.mirawind.top/posts/2025/12/features/)。参考以下格式：

::github{repo="tjy-gitnub/win12"}

主题支持 Admonitions 和 callout。但只支持`note` `tip` `important` `warning` `caution`类型

Admonitions ：

>[!NOTE]
> Highlights information that users should take into account, even when skimming.

>[!TIP]
> Optional information to help a user be more successful.

>[!IMPORTANT]
> Crucial information necessary for users to succeed.

>[!WARNING]
> Critical content demanding immediate user attention due to potential risks.

>[!CAUTION]
> Negative potential consequences of an action.

---

Github syntex and callouts ：

>[!TIP]
> [The GitHub syntax](https://github.com/orgs/community/discussions/16925) is also supported.

Spoiler：刮刮乐（大雾） The content is hidden **ayyy**!

```
The content :spoiler[is hidden **ayyy**]!
```


## 结语
总之，以后写文章终于有地方发了，终于不用忍受腾讯文档和朋友圈的篇幅或格式限制了，好耶！

>[!NOTE]
>本文有部分内容来自Mirawind所写的[《我的第一篇博客》]([https://mirawind.top/posts/2025/12/birth/](https://mirawind.top/posts/2025/12/birth/)),原文以[[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)]协议公开发表
