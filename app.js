import { activities, filterValues, VERIFIED_ON } from "./activities.js";

const main = document.querySelector("#main");
const live = document.querySelector("#live");
const nav = document.querySelector("#nav");
const menuButton = document.querySelector(".menu-button");
const focusButton = document.querySelector(".focus-button");
const STORAGE_KEY = "movetogether-history-v2";

const sampleHistory = [
  { id: "sample-1", activityId: "young-athletes-global", title: "Young Athletes", date: "2026-09-21", fun: 4, difficulty: 2, help: "A little", again: "Yes", research: true },
  { id: "sample-2", activityId: "gigifit", title: "GiGiFIT", date: "2026-09-08", fun: 5, difficulty: 3, help: "No", again: "Yes", research: false }
];

const filters = { type: "All", age: "All", support: "All", region: "All", format: "All" };

function history() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : sampleHistory;
  } catch { return sampleHistory; }
}

function saveHistory(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function announce(message) {
  live.textContent = "";
  setTimeout(() => { live.textContent = message; }, 20);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function activityCard(activity) {
  return `<article class="activity-card">
    <div class="activity-art ${activity.color}" aria-hidden="true"><span>${escapeHtml(activity.icon)}</span><i></i><b></b></div>
    <div class="card-body">
      <div class="tag-row"><span class="tag">${escapeHtml(activity.type)}</span><span class="tag warm">${escapeHtml(activity.difficulty)}</span></div>
      <p class="provider">${escapeHtml(activity.provider)}</p>
      <h2><a href="#/activity/${activity.id}">${escapeHtml(activity.title)}</a></h2>
      <p>${escapeHtml(activity.short)}</p>
      <dl class="card-facts"><div><dt>Region</dt><dd>${escapeHtml(activity.region)}</dd></div><div><dt>Format</dt><dd>${escapeHtml(activity.format)}</dd></div><div><dt>Availability</dt><dd>${escapeHtml(activity.availability)}</dd></div></dl>
      <a class="card-action" href="#/activity/${activity.id}">View verified details <span aria-hidden="true">→</span></a>
    </div>
  </article>`;
}

function pageHeader(kicker, title, description) {
  return `<header class="page-header"><p class="kicker">${kicker}</p><h1>${title}</h1><p class="lead">${description}</p></header>`;
}

function homePage() {
  const featured = ["young-athletes-global", "gigifit", "abilities-unleashed"].map((id) => activities.find((a) => a.id === id));
  return `<section class="hero"><div class="hero-copy"><p class="kicker">Inclusive physical activity</p><h1>Find movement that feels <em>right for you.</em></h1><p class="lead">Explore real programs, understand what to expect, and remember the activities you enjoyed.</p><div class="actions"><a class="button" href="#/discover">Find an activity →</a><a class="button secondary" href="#/history">View my passport</a></div><p class="trust">◈ Research sharing is always a separate choice. Saying no never changes access to the service.</p></div><div class="hero-art" aria-label="Abstract illustration of people moving together"><div class="sun"></div><div class="person one"></div><div class="person two"></div><div class="motion"></div><p><strong>13</strong> verified programs<br><span>across 9 regions</span></p></div></section>
  <section class="dark-band"><div><p class="kicker">Participation, your way</p><h2>Movement is about choice, belonging, and having a good time.</h2></div></section>
  <section class="section"><div class="section-head"><div><p class="kicker">How it works</p><h2>Three clear steps</h2></div></div><div class="steps"><article><span>1</span><h3>Find</h3><p>Filter real programs by age, region, activity, format, and support.</p></article><article><span>2</span><h3>Check</h3><p>Review access notes, current status, and the official provider source.</p></article><article><span>3</span><h3>Remember</h3><p>Record four simple answers in your private activity passport.</p></article></div></section>
  <section class="section"><div class="section-head"><div><p class="kicker">Verified opportunities</p><h2>Start exploring</h2><p>Program information checked against official provider pages on ${VERIFIED_ON}.</p></div><a href="#/discover">View all 13 programs →</a></div><div class="activity-grid featured">${featured.map(activityCard).join("")}</div></section>`;
}

function discoverPage() {
  const result = activities.filter((activity) => Object.entries(filters).every(([key, value]) => {
    if (value === "All") return true;
    return key === "age" ? activity.ages.includes(value) : activity[key] === value;
  }));
  const selector = (key, label) => `<label>${label}<select data-filter="${key}">${filterValues(key).map((value) => `<option${filters[key] === value ? " selected" : ""}>${escapeHtml(value)}</option>`).join("")}</select></label>`;
  return `<div class="page">${pageHeader("Global activity directory", "Find an activity", "Real programs with direct links to official providers. Local dates, cost, and availability can change.")}
  <div class="source-notice"><strong>✓ Verified source, changing local details</strong><p>We verify the organization and program. Always confirm current eligibility, schedule, cost, and access with the provider before attending.</p></div>
  <div class="discover-layout"><aside class="filters"><div class="filter-title"><h2>Filters</h2><button type="button" data-clear>Clear</button></div>${selector("type", "Activity type")}${selector("age", "Age group")}${selector("support", "Support")}${selector("region", "Region")}${selector("format", "Format")}</aside><section aria-labelledby="result-heading"><div class="result-bar"><h2 id="result-heading">${result.length} programs</h2><span>Sources checked ${VERIFIED_ON}</span></div><div class="activity-grid">${result.length ? result.map(activityCard).join("") : `<div class="empty"><h2>No exact matches</h2><p>Clear one filter to see more programs.</p><button class="button" data-clear>Clear filters</button></div>`}</div></section></div></div>`;
}

function detailPage(id) {
  const activity = activities.find((item) => item.id === id);
  if (!activity) return notFound();
  return `<div class="page"><nav class="crumbs" aria-label="Breadcrumb"><a href="#/discover">Find activities</a><span>/</span><span>${escapeHtml(activity.title)}</span></nav>
  <section class="detail-hero"><div><div class="tag-row"><span class="tag">${escapeHtml(activity.type)}</span><span class="tag warm">${escapeHtml(activity.difficulty)}</span></div><p class="provider">${escapeHtml(activity.provider)}</p><h1>${escapeHtml(activity.title)}</h1><p class="lead">${escapeHtml(activity.short)}</p><div class="quick-facts"><div><span>Region</span><strong>${escapeHtml(activity.region)}</strong></div><div><span>Format</span><strong>${escapeHtml(activity.format)}</strong></div><div><span>Age</span><strong>${escapeHtml(activity.ageText)}</strong></div><div><span>Support</span><strong>${escapeHtml(activity.support)}</strong></div></div></div><div class="activity-art large ${activity.color}" aria-hidden="true"><span>${escapeHtml(activity.icon)}</span><i></i><b></b></div></section>
  <div class="detail-grid"><div class="content-stack"><section class="content-card"><p class="kicker">About this program</p><h2>What the official source says</h2><p>${escapeHtml(activity.description)}</p><ul class="checks">${activity.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}</ul></section><section class="content-card"><h2>Location and access</h2><p><strong>${escapeHtml(activity.location)}</strong></p><p>${escapeHtml(activity.access)}</p><p class="fine">Program details were last checked ${VERIFIED_ON}.</p></section></div>
  <aside class="join-card"><p class="kicker">Official information</p><h2>Check and join</h2><dl><div><dt>Availability</dt><dd>${escapeHtml(activity.availability)}</dd></div><div><dt>Cost</dt><dd>${escapeHtml(activity.cost)}</dd></div></dl><a class="button light" href="${activity.url}" target="_blank" rel="noopener noreferrer">Open official provider ↗</a><a class="button outline-light" href="#/passport/${activity.id}">I did this activity</a><p>Registration happens on the provider’s website. It does not enroll you in platform research.</p></aside></div></div>`;
}

function passportPage(id) {
  const activity = activities.find((item) => item.id === id);
  if (!activity) return notFound();
  const options = (name, values) => `<div class="choice-grid">${values.map(([value, icon, label]) => `<label><input type="radio" name="${name}" value="${escapeHtml(value)}" required><span><b aria-hidden="true">${icon}</b>${label}</span></label>`).join("")}</div>`;
  return `<div class="page narrow"><nav class="crumbs"><a href="#/activity/${activity.id}">${escapeHtml(activity.title)}</a><span>/</span><span>Activity passport</span></nav>${pageHeader("Private service record", "My activity passport", "Choose one answer for each question. Your record is saved privately first.")}
  <form class="passport" data-passport="${activity.id}"><fieldset><legend>Was it fun?</legend>${options("fun", [[1,"😞","Not fun"],[2,"🙁","A little"],[3,"😐","Okay"],[4,"🙂","Fun"],[5,"😄","Great"]])}</fieldset><fieldset><legend>How difficult was it?</legend>${options("difficulty", [[1,"○","Very easy"],[2,"◔","Easy"],[3,"◑","Just right"],[4,"◕","Hard"],[5,"●","Very hard"]])}</fieldset><fieldset><legend>Did you need help?</legend>${options("help", [["No","✓","No"],["A little","🤝","A little"],["A lot","🙋","A lot"]])}</fieldset><fieldset><legend>Would you do it again?</legend>${options("again", [["Yes","👍","Yes"],["Maybe","🤔","Maybe"],["No","👎","No"]])}</fieldset><button class="button" type="submit">Save to my private history</button></form></div>`;
}

function historyPage() {
  const records = history();
  const average = records.length ? (records.reduce((sum, item) => sum + Number(item.fun), 0) / records.length).toFixed(1) : "—";
  return `<div class="page">${pageHeader("My activity passport", "Participation history", "Your private record. Research sharing is optional and controlled separately for each activity.")}<div class="stats"><div><strong>${records.length}</strong><span>activities recorded</span></div><div><strong>${average}/5</strong><span>average enjoyment</span></div><div><strong>${records.filter((item) => item.again === "Yes").length}</strong><span>would do again</span></div></div><div class="source-notice"><strong>Private by default</strong><p>A research copy contains only the four passport answers and broad activity information—not your name or contact details.</p></div><section class="history-list"><h2>My activities</h2>${records.length ? records.map((item) => `<article><time datetime="${item.date}">${new Date(`${item.date}T12:00:00`).toLocaleDateString("en", { day: "numeric", month: "short", year: "numeric" })}</time><div><h3><a href="#/activity/${item.activityId}">${escapeHtml(item.title)}</a></h3><p><span class="tag">Fun ${item.fun}/5</span> <span class="tag">Difficulty ${item.difficulty}/5</span> <span class="tag">Help: ${escapeHtml(item.help)}</span> <span class="tag">Again: ${escapeHtml(item.again)}</span></p></div><div><strong>${item.research ? "Anonymous copy shared" : "Private only"}</strong><button class="text-button" data-research="${item.id}">${item.research ? "Withdraw research copy" : "Research options"}</button></div></article>`).join("") : `<div class="empty"><h2>No activities recorded</h2><a class="button" href="#/discover">Find an activity</a></div>`}</section></div>`;
}

function researchPage() {
  return `<div class="research-hero"><div><p class="kicker">Demonstration data</p><h1>What helps people take part?</h1><p class="lead">Anonymous, aggregated sample data—not individual profiles or real study results.</p></div></div><div class="page"><div class="metrics"><div><span>Participants</span><strong>184</strong></div><div><span>Activities recorded</span><strong>1,268</strong></div><div><span>Repeat participation</span><strong>68%</strong></div><div><span>Average enjoyment</span><strong>4.3/5</strong></div></div><div class="chart-grid"><section class="content-card"><h2>Most-recorded categories</h2>${[["Multi-sport",100,312],["Fitness",85,264],["Team sport",71,221],["Dance",50,156]].map(([label,width,value]) => `<div class="bar"><span>${label}</span><i><b style="width:${width}%"></b></i><strong>${value}</strong></div>`).join("")}</section><section class="content-card"><h2>Support used</h2><div class="donut" aria-label="No help 33 percent, a little help 42 percent, a lot of help 25 percent"><span><strong>1,268</strong><small>answers</small></span></div><ul class="legend"><li><i class="green"></i>No help <strong>33%</strong></li><li><i class="gold"></i>A little <strong>42%</strong></li><li><i class="coral"></i>A lot <strong>25%</strong></li></ul></section></div><div class="source-notice"><strong>Research safety boundary</strong><p>A real dashboard requires ethics approval, accessible consent, withdrawal processes, minimum-group suppression, transparent definitions, and community governance.</p></div></div>`;
}

function infoPage(kind) {
  const pages = {
    accessibility: ["Accessibility", "Designed for clear choices", "We use short language, predictable layouts, large targets, keyboard access, visible focus, labels with icons, and reduced-motion support.", [["Clear language","One main task at a time and familiar words."],["Flexible input","Keyboard navigation and large touch targets."],["Focus view","Hide optional copy and increase reading comfort."]]],
    privacy: ["Privacy", "Collect less. Explain clearly.", "Activity history is stored only in this browser. No account, analytics, medical record, exact address, or clinical data is collected by this MVP.", [["Service data","Your private passport helps you remember activities."],["Research copy","Optional, anonymous, and separate from service access."],["External providers","Registration happens on their websites under their policies."]]],
    ethics: ["Research ethics", "Nothing about us without us", "Research should be shaped, understood, and governed with people with Down syndrome—not simply done about them.", [["Freely chosen","Consent is separate, optional, and withdrawable."],["Supported decisions","Use Easy Read, communication support, and understanding checks."],["Shared benefit","People with Down syndrome choose questions and interpret findings."]]]
  };
  const [kicker,title,lead,cards] = pages[kind];
  return `<div class="page narrow">${pageHeader(kicker,title,lead)}<div class="info-grid">${cards.map(([heading,copy]) => `<article class="content-card"><h2>${heading}</h2><p>${copy}</p></article>`).join("")}</div>${kind === "ethics" ? `<section class="content-card"><h2>Before real research starts</h2><ul class="checks"><li>Form a paid advisory group led by people with Down syndrome</li><li>Obtain independent ethics review where required</li><li>Co-design Easy Read consent and withdrawal materials</li><li>Set data minimization, retention, and small-group suppression rules</li><li>Return accessible results to participants</li></ul></section>` : ""}</div>`;
}

function notFound() { return `<div class="page narrow"><div class="empty"><h1>Page not found</h1><a class="button" href="#/">Go home</a></div></div>`; }

function render(moveFocus = true) {
  const parts = (location.hash.slice(1) || "/").split("/").filter(Boolean);
  const route = parts[0] || "home";
  const pages = { home: homePage, discover: discoverPage, history: historyPage, research: researchPage, accessibility: () => infoPage("accessibility"), privacy: () => infoPage("privacy"), ethics: () => infoPage("ethics") };
  main.innerHTML = route === "activity" ? detailPage(parts[1]) : route === "passport" ? passportPage(parts[1]) : (pages[route] || notFound)();
  document.title = `${main.querySelector("h1")?.textContent || "MoveTogether"} | MoveTogether`;
  nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
  bindEvents();
  if (moveFocus) { scrollTo(0, 0); main.focus({ preventScroll: true }); }
}

function bindEvents() {
  document.querySelectorAll("[data-filter]").forEach((select) => select.addEventListener("change", () => { filters[select.dataset.filter] = select.value; render(false); announce("Results updated."); }));
  document.querySelectorAll("[data-clear]").forEach((button) => button.addEventListener("click", () => { Object.keys(filters).forEach((key) => filters[key] = "All"); render(false); announce("Filters cleared."); }));
  document.querySelector("[data-passport]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget); const activity = activities.find((item) => item.id === event.currentTarget.dataset.passport);
    const record = { id: `record-${Date.now()}`, activityId: activity.id, title: activity.title, date: new Date().toISOString().slice(0,10), fun: Number(form.get("fun")), difficulty: Number(form.get("difficulty")), help: form.get("help"), again: form.get("again"), research: false };
    saveHistory([record, ...history()]); location.hash = "#/history"; announce("Saved privately to your history.");
  });
  document.querySelectorAll("[data-research]").forEach((button) => button.addEventListener("click", () => {
    const records = history(); const item = records.find((record) => record.id === button.dataset.research); if (!item) return;
    const message = item.research ? "Withdraw the anonymous research copy? Your private history will remain." : "Share an anonymous copy of the four passport answers? No name or contact details are included.";
    if (!confirm(message)) return;
    saveHistory(records.map((record) => record.id === item.id ? { ...record, research: !record.research } : record)); render(false); announce(item.research ? "Research copy withdrawn." : "Anonymous copy shared.");
  }));
}

menuButton.addEventListener("click", () => { const open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
focusButton.addEventListener("click", () => { const on = document.body.classList.toggle("focus"); focusButton.setAttribute("aria-pressed", String(on)); localStorage.setItem("movetogether-focus", String(on)); announce(on ? "Focus view on." : "Focus view off."); });
window.addEventListener("hashchange", () => render());
const focusSaved = localStorage.getItem("movetogether-focus") === "true"; document.body.classList.toggle("focus", focusSaved); focusButton.setAttribute("aria-pressed", String(focusSaved));
render();
