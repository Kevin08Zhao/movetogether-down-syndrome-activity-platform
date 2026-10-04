# MoveTogether

> Down Syndrome Physical Activity Participation Platform  
> 唐氏综合征人群体育活动参与平台

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-174e46)](https://kevin08zhao.github.io/movetogether-down-syndrome-activity-platform/)
[![Accessibility](https://img.shields.io/badge/Accessibility-Cognitive--friendly-df725b)](#accessibility--无障碍设计)
[![Data](https://img.shields.io/badge/Activity%20data-Official%20sources-2d7460)](#real-world-activity-data--真实活动数据)

MoveTogether 是一个公益体验优先、研究参与可选的响应式 Web MVP。它帮助唐氏综合征人士及其支持者：

- 查找全球真实的包容性体育活动项目；
- 了解年龄、支持方式、参与形式、费用和无障碍注意事项；
- 用四个简单问题记录个人参与体验；
- 自主决定是否匿名贡献研究数据；
- 查看示例性的匿名聚合研究看板。

MoveTogether is a cognitive-accessible web MVP for discovering verified inclusive physical-activity programs, recording personal participation experiences, and making a separate, optional choice about anonymous research contribution.

## 在线体验 / Live demo

**https://kevin08zhao.github.io/movetogether-down-syndrome-activity-platform/**

> GitHub Pages 首次启用后通常需要短暂时间完成发布。如果链接暂时返回 404，请稍后刷新。

## Core features / 核心功能

- **首页**：清晰说明平台价值、数据边界和主要入口。
- **Discover Activities**：按活动类型、年龄、支持方式、地区和参与形式筛选。
- **Activity Detail**：显示真实主办方、官方来源、参与条件及需要提前确认的无障碍信息。
- **Activity Passport**：记录 Fun、Difficulty、Need Help、Would Do Again。
- **Participation History**：在当前浏览器保存个人参与历史。
- **Research choice**：服务记录默认私密；匿名研究分享必须单独选择，并可撤回。
- **Research Dashboard**：展示明确标注为演示数据的匿名聚合指标。
- **Accessibility / Privacy / Research Ethics**：解释无障碍设计、隐私边界和研究伦理原则。
- **Focus view**：隐藏非必要信息，降低阅读和认知负担。

## Real-world activity data / 真实活动数据

`activities.js` 当前收录 13 个真实项目，覆盖全球、北美、欧洲、大洋洲、东亚、南亚、非洲、拉丁美洲和中东北非。来源包括：

- Special Olympics Young Athletes、Unified Sports、MATP 及区域项目；
- GiGi’s Playhouse GiGiFIT；
- Canadian Down Syndrome Society Mindsets；
- Down’s Syndrome Association DSActive；
- Down Syndrome Ireland Dublin；
- Disability Sports Australia Abilities Unleashed；
- Special Olympics Bharat；
- Special Olympics East Asia School of Strength。

每条记录包含官方 URL 和核查日期。平台不会虚构具体场次、余位、距离或价格；可能变化的信息会提示用户在参加前向官方机构确认。

## Quick start / 本地运行

### Requirements

- Node.js 18 或更高版本
- 不需要安装第三方依赖

### 1. Clone

```bash
git clone https://github.com/Kevin08Zhao/movetogether-down-syndrome-activity-platform.git
cd movetogether-down-syndrome-activity-platform
```

### 2. Start

```bash
npm start
```

打开：

```text
http://127.0.0.1:4173
```

### 3. Check JavaScript syntax

```bash
npm run check
```

### Use another port

macOS / Linux:

```bash
PORT=8080 npm start
```

Windows PowerShell:

```powershell
$env:PORT=8080; npm start
```

## How to use / 使用教程

### 查找活动

1. 点击 **Find an activity**。
2. 使用 Region、Age group、Activity type、Format 或 Support 筛选。
3. 打开活动详情。
4. 阅读来源、适用年龄、参与方式和无障碍注意事项。
5. 点击 **Open official provider** 前往主办方网站确认报名。

### 记录一次参与

1. 在活动详情点击 **I did this activity**。
2. 回答四个图标化问题。
3. 点击 **Save to my private history**。
4. 记录会保存在当前浏览器的 `localStorage` 中。

### 选择研究分享

1. 打开 **My history**。
2. 每条记录都会显示 `Private only` 或 `Anonymous copy shared`。
3. 点击 **Research options** 可以选择匿名分享。
4. 点击 **Withdraw research copy** 可以撤回；私人历史不会被删除。

> 本 MVP 不会向远程服务器发送 Passport 数据。研究看板使用演示数据，不代表真实研究结果。

## Information architecture / 信息架构

```text
Home
├── Find activities
│   ├── Filters
│   └── Activity detail
│       ├── Official provider
│       └── Activity Passport
├── My history
│   └── Optional research choice
├── Community insights
└── Information
    ├── Accessibility
    ├── Privacy
    └── Research ethics
```

## Data structure / 数据结构

Activity example:

```js
{
  id: "young-athletes-global",
  title: "Young Athletes",
  provider: "Special Olympics",
  type: "Multi-sport",
  ages: ["Child"],
  support: "Family or coach",
  format: "Local & at home",
  region: "Global",
  availability: "Find a local program",
  url: "https://www.specialolympics.org/..."
}
```

Participation record example:

```js
{
  activityId: "young-athletes-global",
  date: "2026-10-04",
  fun: 4,
  difficulty: 2,
  help: "A little",
  again: "Yes",
  research: false
}
```

## Privacy and research boundary / 隐私与研究边界

| Data purpose | Default | Storage in MVP |
| --- | --- | --- |
| Personal participation history | Private | Current browser only |
| Anonymous research copy | Off | Demonstration state in current browser |
| Research dashboard | Sample data | Bundled static values |

本项目不要求详细病史、遗传或临床记录、精确住址，也不把研究同意隐藏在服务条款中。

## Accessibility / 无障碍设计

- 简短、具体的语言；
- 一致且可预测的导航；
- 大尺寸触控目标；
- 键盘访问和清晰焦点；
- 图标与文字同时出现；
- 支持系统 Reduced Motion 设置；
- 响应式布局；
- Focus view；
- 语义化标题、表单分组和实时状态提示。

上线前仍应与唐氏综合征人士共同设计并开展可用性测试，并进行 WCAG 2.2 AA 审核。

## Project structure / 项目结构

```text
.
├── index.html       # Application shell
├── app.js           # Pages, router, filters, Passport, history
├── activities.js    # Verified global activity directory
├── styles.css       # Responsive design and accessibility states
├── server.mjs       # Zero-dependency local server
├── 404.html         # GitHub Pages SPA redirect
├── .nojekyll        # Disable Jekyll processing
└── package.json     # Run and check commands
```

## Deployment / 部署

This repository is designed for GitHub Pages:

1. Repository visibility must be **Public**.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save and wait for the deployment to finish.

The project is dependency-free and can also be deployed to Netlify, Cloudflare Pages, Vercel, or any static host.

## Important limitations

- This is an MVP, not medical advice or a medical-fitness assessment.
- Program schedules and eligibility may change after the listed verification date.
- External providers are responsible for registration, safeguarding, and activity risk management.
- Research features require community governance, accessible consent, ethics review, and secure infrastructure before real-world data collection.

## Contributing

Corrections to activity information and accessibility improvements are welcome through GitHub Issues or Pull Requests. Please include an official source when proposing activity-data changes.

## License

No open-source license has been selected yet. Public visibility does not by itself grant permission to reuse the code. Add an explicit license before encouraging redistribution.
