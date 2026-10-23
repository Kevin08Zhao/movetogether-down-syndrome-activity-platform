# MoveTogether

> Down Syndrome Physical Activity Participation Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-174e46)](https://kevin08zhao.github.io/movetogether-down-syndrome-activity-platform/)
[![Accessibility](https://img.shields.io/badge/Accessibility-Cognitive--friendly-df725b)](#accessibility)
[![Data](https://img.shields.io/badge/Activity%20data-Official%20sources-2d7460)](#real-world-activity-data)

MoveTogether is a responsive web MVP that puts community participation first and makes research participation optional. It helps people with Down syndrome and their supporters:

- Find real inclusive physical-activity programs around the world;
- Understand age groups, support, participation formats, costs, and accessibility considerations;
- Record personal participation experiences through four simple questions;
- Choose independently whether to contribute anonymous research data;
- Explore a demonstration dashboard of anonymous, aggregated research data.

MoveTogether is a cognitive-accessible web MVP for discovering verified inclusive physical-activity programs, recording personal participation experiences, and making a separate, optional choice about anonymous research contribution.

## Live demo

**https://kevin08zhao.github.io/movetogether-down-syndrome-activity-platform/**

> The first GitHub Pages deployment may take a short time. If the link temporarily returns a 404, refresh it later.

## Core features

- **Home**: Explains the platform, data boundaries, and main ways to get started.
- **Discover Activities**: Filter by activity type, age, support, region, and participation format.
- **Activity Detail**: View real providers, official sources, eligibility, and accessibility details to confirm in advance.
- **Activity Passport**: Record Fun, Difficulty, Need Help, and Would Do Again.
- **Participation History**: Save personal participation history in the current browser.
- **Research choice**: Service records are private by default. Anonymous research sharing requires a separate choice and can be withdrawn.
- **Research Dashboard**: View anonymous, aggregated metrics clearly labeled as demonstration data.
- **Accessibility / Privacy / Research Ethics**: Learn about accessibility design, privacy boundaries, and research ethics.
- **Focus view**: Hide optional information to make reading easier and reduce cognitive load.

## Real-world activity data

`activities.js` contains 13 real programs across nine regions: Global, North America, Europe, Oceania, East Asia, South Asia, Africa, Latin America, and the Middle East and North Africa. Sources include:

- Special Olympics Young Athletes, Unified Sports, MATP, and regional programs;
- GiGi’s Playhouse GiGiFIT;
- Canadian Down Syndrome Society Mindsets;
- Down’s Syndrome Association DSActive;
- Down Syndrome Ireland Dublin;
- Disability Sports Australia Abilities Unleashed;
- Special Olympics Bharat;
- Special Olympics East Asia School of Strength.

Each record includes an official URL and verification date. The platform does not invent specific sessions, availability, distances, or prices. Users are prompted to confirm details that may change with the official provider before attending.

## Quick start

### Requirements

- Node.js 18 or later
- No third-party dependencies to install

### 1. Clone

```bash
git clone https://github.com/Kevin08Zhao/movetogether-down-syndrome-activity-platform.git
cd movetogether-down-syndrome-activity-platform
```

### 2. Start

```bash
npm start
```

Open:

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

## How to use

### Find an activity

1. Select **Find an activity**.
2. Filter by Region, Age group, Activity type, Format, or Support.
3. Open an activity detail page.
4. Read the source, age range, participation format, and accessibility notes.
5. Select **Open official provider** to confirm registration on the provider’s website.

### Record participation

1. Select **I did this activity** on an activity detail page.
2. Answer the four questions illustrated with icons.
3. Select **Save to my private history**.
4. The record is saved in the current browser’s `localStorage`.

### Choose research sharing

1. Open **My history**.
2. Each record shows `Private only` or `Anonymous copy shared`.
3. Select **Research options** to opt into anonymous sharing.
4. Select **Withdraw research copy** to withdraw it. Your private history is preserved.

> This MVP does not send Passport data to a remote server. The research dashboard uses demonstration data and does not represent real research findings.

## Information architecture

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

## Data structure

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

## Privacy and research boundary

| Data purpose | Default | Storage in MVP |
| --- | --- | --- |
| Personal participation history | Private | Current browser only |
| Anonymous research copy | Off | Demonstration state in current browser |
| Research dashboard | Sample data | Bundled static values |

The project does not request detailed medical histories, genetic or clinical records, or precise addresses. Research consent is never hidden in the terms of service.

## Accessibility

- Short, concrete language;
- Consistent, predictable navigation;
- Large touch targets;
- Keyboard access and visible focus;
- Icons paired with text;
- Support for the system Reduced Motion setting;
- Responsive layouts;
- Focus view;
- Semantic headings, grouped form fields, and live status announcements.

Before launch, continue co-design and usability testing with people with Down syndrome, and conduct a WCAG 2.2 AA audit.

## Project structure

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

## Deployment

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
