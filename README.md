# 손약사 상담창구: Supplement Consultation Prototype

A Korean-language chat page that suggests dietary supplements based on the symptom a user types in.

> **Discontinued personal project (2025, uploaded to GitHub in 2026).** I started this on my own to build a pharmacist-led medication counseling (복약지도) app. I stopped because giving personalized health information directly to the public carried legal risk. I built it when I was just starting to learn to code.

---

## What it does

The user types a concern or taps a quick button. The page answers with three supplements, each showing what it is for, a typical dose, and a caution.

| Category | Supplements suggested |
|---|---|
| 피로회복 (fatigue) | Vitamin B complex, magnesium, CoQ10 |
| 면역력 강화 (immunity) | Vitamin C, vitamin D, zinc |
| 눈 건강 (eye health) | Lutein, omega-3, vitamin A |
| 관절 건강 (joint health) | Glucosamine, chondroitin, MSM |
| 스트레스 관리 (stress) | Magnesium, vitamin B complex, omega-3 |

## How it works

- **No backend and no AI model.** The page matches keywords in the user's message against a hard-coded table in `script.js`.
- A one-second delay before each answer makes it feel like a chat.
- Plain HTML, CSS, and JavaScript.

## Run it

Open `index.html` in a browser. Nothing needs to be installed.

## Files

```
├─ index.html    Page layout: chat window, input, quick buttons
├─ styles.css    Minimal black-and-white design
├─ script.js     Supplement table and chat logic
└─ CLAUDE.md     Development notes
```

## Why it stopped, and what a real version would need

Suggesting specific supplements for a symptom, directly to the public, runs into the rules on health claims and on medical and pharmaceutical advice. That is why I paused here. A version that could actually ship would need:

- **A pharmacist reviewing** each recommendation before it reaches the user
- **A cited source** for every efficacy statement and dose
- **Drug–supplement interaction checks** against what the user already takes
- **A legal review** of the wording before launch

**Known issue:** user input is inserted into the page as raw HTML. That doesn't matter for a local demo, but the input would have to be escaped before going online.

---

*For learning purposes only. This is not medical advice.*
