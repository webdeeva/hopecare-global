# Know Your Body — iOS App Specification

**A symptom-pattern tracker for ovarian health, by HopeCare Global Inc.**

> Track → Learn → Bring it to your doctor.

This document is a design-and-build handoff. It is complete enough to begin
screen design (Figma) and a SwiftUI MVP. Brand colors and type are exact values
pulled from the HopeCare Global website so the app matches the org's identity.

---

## 1. The one-line pitch

Ovarian cancer has **no routine screening test**, so the single most useful thing
a woman can do is notice when vague symptoms become a *persistent pattern* and
raise it with her doctor early. **Know Your Body** makes that effortless: quiet
daily check-ins, smart pattern detection, and a clean summary she can hand to a
clinician.

---

## 2. Problem & why an app

- Early ovarian cancer signs (bloating, pelvic/abdominal pain, feeling full
  quickly, urinary urgency) are vague and easy to dismiss.
- What matters clinically is the **pattern**: symptoms that are *new*, *frequent*
  (more than ~12 times a month), and *persistent* for a few weeks.
- People cannot reliably remember weeks of vague symptoms in a 12-minute
  appointment. A phone can. This is a logging + education problem, perfectly
  shaped for mobile.

**This app is an education and self-tracking tool. It is NOT a diagnostic device,
screening test, or medical advice.** See §13.

---

## 3. Goals & non-goals

**Goals**
- Make daily symptom logging take under 15 seconds.
- Detect the clinically meaningful pattern (new + frequent + persistent) and
  prompt a doctor conversation at the right moment.
- Produce a shareable, doctor-ready summary (PDF + Apple Health).
- Teach the signs through bite-size lessons drawn from HopeCare's 25 articles.

**Non-goals (explicitly out of scope)**
- No diagnosis, no risk "score," no probability of cancer.
- No telehealth, no provider messaging, no e-commerce in v1.
- No account/login in MVP (data is on-device + iCloud). Optional account later.

---

## 4. Audience & personas

1. **The Watchful (primary)** — 35–65, has a nagging symptom or family history,
   wants to track "is this something?" without panicking.
2. **The Previvor** — known BRCA/family-history risk, under surveillance, wants a
   disciplined log between appointments.
3. **The Advocate/Caregiver** — supporting a loved one, or a HopeCare supporter
   who wants to learn and share. Enters via the Learn tab.

---

## 5. Brand system (exact values)

### 5.1 Color palette
Pulled verbatim from the HopeCare Global design tokens.

| Token | Hex | Role in the app |
|---|---|---|
| **Teal** | `#0f8b9e` | Primary brand color, primary buttons, active states |
| **Teal Deep** | `#086b7d` | Pressed states, links on light, deep accents |
| **Teal Bright** | `#14b5cc` | Highlights, focus glows, accent gradient stop |
| **Teal Soft** | `#d4ecf0` | Tinted surfaces, selected chips, card washes |
| **Navy** | `#0a2540` | Headlines, dark surfaces, primary on light |
| **Navy Deep** | `#061b30` | Dark gradient base, dark-mode background |
| **Navy Soft** | `#e2e8f0` | Hairlines, dividers, disabled fills on light |
| **Green** | `#7cb342` | Positive/"all clear", confirmations, success |
| **Green Bright** | `#a4d65e` | Success accent, gradient stop, celebratory moments |
| **Green Soft** | `#e8f3d6` | Success banner backgrounds |
| **Cream** | `#fafaf7` | App background (default surface) |
| **Mist** | `#f0f7f9` | Secondary surface, grouped-list background |
| **Ink** | `#0a1929` | Primary text |
| **Ink Soft** | `#3a4a5a` | Secondary text, body copy |
| **Ink Mute** | `#6b7a8a` | Captions, placeholders, metadata |

**Signature gradients**
- Brand wash: `linear-gradient(135deg, #ffffff 0%, #d4ecf0 60%, #a4d65e 100%)`
- Deep ocean (dark sections / splash): `linear-gradient(135deg, #0a2540 0%, #061b30 100%)`
- Aurora (page bg): `linear-gradient(180deg, #fafaf7 0%, #f0f7f9 100%)`

**Semantic mapping (use these, not raw hex, in design)**
- `surface` = Cream · `surface/elevated` = white · `surface/secondary` = Mist
- `text/primary` = Ink · `text/secondary` = Ink Soft · `text/tertiary` = Ink Mute
- `accent/primary` = Teal · `accent/pressed` = Teal Deep · `accent/glow` = Teal Bright
- `positive` = Green · `attention` = Teal Bright (NEVER use alarming red for symptom
  patterns — this is intentionally calm; reserve a muted amber `#E0A458` only for
  "worth a conversation," never red).

> ⚠️ Tone rule: this is a non-alarmist product. No red alerts, no scare colors.
> A flagged pattern should feel like a gentle, supportive nudge, not an alarm.

### 5.2 Typography
- **Display / headlines:** Playfair Display (Bold) — big moments, screen titles,
  the teal "hope" feeling. Use sparingly and large.
- **UI / body:** Inter — all controls, labels, body copy, numbers.
- **Script accent:** Dancing Script — rare, decorative only (e.g., an onboarding
  welcome line). Never for data or controls.
- iOS fallback: SF Pro if brand fonts are not yet bundled. Bundle Inter + Playfair
  for brand fidelity.

Type scale (suggested): Display 34/40 · Title 24/30 · Headline 18/24 ·
Body 16/22 · Subhead 14/20 · Caption 12/16.

### 5.3 Look & feel
- Soft, rounded, breathable. Corner radius 16–24 on cards, 28+ on primary buttons
  (pill). Generous negative space. Subtle shadows (navy at 8–12% opacity, large
  blur, low spread).
- Iconography: SF Symbols, rounded weight, teal/ink. Custom teal **awareness
  ribbon** mark for the app icon and milestones.
- Motion: gentle, 250–400ms ease-out. Calm, never bouncy or urgent.
- **Dark mode:** required. Navy Deep background, Cream-tinted text, Teal Bright
  accents.

---

## 6. Information architecture

**Tab bar (4 tabs):**
1. **Today** — daily check-in + status at a glance (home).
2. **Trends** — history, patterns, the doctor summary.
3. **Learn** — bite-size lessons + the 25 HopeCare articles.
4. **More** — reminders, privacy, about HopeCare, donate, support.

---

## 7. Screen-by-screen (the design handoff)

For each screen: **Purpose · Key elements · States**.

### 7.1 Onboarding (first launch, 4–5 screens)
- **Purpose:** set the mission, set expectations (educational, private), get
  permission for reminders + (optional) Apple Health.
- **Key elements:**
  - Welcome (Playfair headline over brand-wash gradient, teal ribbon mark).
  - "What this is / isn't" card — *educational, not a diagnosis; built on
    clinician-reviewed sources.*
  - The four signs, illustrated (bloating, pelvic/abdominal pain, feeling full
    quickly, urinary urgency).
  - Reminder setup (pick a daily time, or weekly).
  - Privacy promise screen (on-device + iCloud, never sold) → permission prompts.
- **States:** permissions granted / denied (app must work fully without Health or
  notifications).

### 7.2 Today (home)
- **Purpose:** one-glance status + the day's check-in.
- **Key elements:**
  - Greeting + date (Playfair small).
  - **Status ring/card:** calm summary — "Nothing notable this week" (Green Soft)
    or "A few symptoms are becoming frequent — worth noting" (Teal Bright/amber,
    never red).
  - **Big primary action:** "How are you feeling today?" → opens check-in.
  - Streak / consistency nudge (gentle, optional, never guilt-inducing).
  - Quick link to one Learn card.
- **States:** already-logged-today (shows summary + "edit"), not-logged-yet,
  first-day-empty.

### 7.3 Daily check-in (the core 15-second flow)
- **Purpose:** log presence/severity of the tracked symptoms fast.
- **Key elements:**
  - Each tracked symptom as a card with a simple scale (None / Mild / Moderate /
    Strong) — large tap targets, teal selection.
  - The four primary signs first; expandable "other symptoms" (back pain, fatigue,
    appetite/weight change, changes in bowel/bladder, pain with intercourse).
  - Optional one-line note + optional tie-in to cycle (defer to HealthKit Cycle
    Tracking if available).
  - Save → satisfying calm confirmation, back to Today.
- **States:** editing an existing entry, partial save, skipped day.

### 7.4 Symptom detail
- **Purpose:** see one symptom's history and meaning.
- **Key elements:** sparkline/calendar heatmap over time, plain-language "what to
  know" (from the relevant article), frequency count this month vs the
  persistence threshold.
- **States:** sparse data ("keep logging to see patterns"), enough data.

### 7.5 Pattern nudge (the payoff moment)
- **Purpose:** when symptoms cross *new + frequent + persistent*, gently suggest a
  doctor conversation.
- **Key elements:**
  - Supportive, calm sheet: "Some of your symptoms have been frequent and
    persistent for a few weeks. That is worth bringing up with your doctor."
  - Two actions: **"Create my doctor summary"** (primary) and "Learn what to ask."
  - Reassurance copy: most causes are not cancer, but persistence deserves a look.
- **States:** first time crossing threshold, recurring, dismissed.

### 7.6 Trends
- **Purpose:** the longitudinal view + entry point to the summary.
- **Key elements:** month calendar heatmap, per-symptom trend lines, "since you
  started" stats, filter by symptom, the **Doctor Summary** button pinned.
- **States:** empty, building (<2 weeks), rich.

### 7.7 Doctor summary / export (the app's reason to exist)
- **Purpose:** turn weeks of logs into something a clinician can read in 30
  seconds.
- **Key elements:**
  - A clean one-page report: date range, which symptoms, frequency, severity
    trend, persistence flag, user notes.
  - A short "questions to ask" list (from the *Questions to Ask Your Oncologist*
    article).
  - Export as **PDF**, **Share Sheet**, and optionally write to **Apple Health**.
  - Branded HopeCare footer with the educational disclaimer.
- **States:** generating, ready, share success.

### 7.8 Learn (tab)
- **Purpose:** turn the 25 HopeCare articles into in-app micro-learning.
- **Key elements:**
  - Featured lesson card (brand wash).
  - The 5 clusters as sections: Symptoms & Early Detection · Risk, Genetics &
    Prevention · Diagnosis & Treatment · Health Equity & Global · Living With &
    Support.
  - Article cards with the existing hero images.
  - Optional 3-question knowledge checks + shareable teal "Know the Signs" cards.
- **States:** new/unread badges, completed.

### 7.9 Article reader
- **Purpose:** read a full guide in-app.
- **Key elements:** hero image, title, reading time, formatted body (headings,
  lists, sources), "Sources" + disclaimer, share, "related" links. Matches the
  website's article styling.

### 7.10 More
- **Purpose:** settings + connection to the org.
- **Key elements:** reminders, symptoms tracked (customize), Apple Health toggle,
  privacy & data (export all / delete all), passcode/Face ID lock, About HopeCare
  + Donate (link out), Contact/Support, version.

### 7.11 System states to design
Empty states (each tab), loading, no-permission fallbacks, error, offline
(everything works offline), Face ID lock screen, onboarding skip.

---

## 8. Reusable components (design system)
- Pill primary button (teal, white text) · secondary (teal outline) · text button.
- Symptom card with 4-step severity selector.
- Status card (calm / worth-noting variants).
- Heatmap calendar · sparkline trend.
- Lesson/article card (with hero image).
- Sheet/modal (rounded top, grabber).
- Banner (positive = Green Soft, info = Teal Soft).
- Tab bar (4 items, teal active).
- List rows (grouped on Mist).

---

## 9. Data model (MVP)

```
SymptomType        id, name, category(primary|secondary), helpText, articleSlug
SymptomLog         id, date, symptomTypeId, severity(0–3), note?
DailyEntry         id, date, [SymptomLog], freeNote?, cyclePhase?(from HealthKit)
PatternFlag        id, symptomTypeId, dateRange, reason(new|frequent|persistent), acknowledged
DoctorSummary      id, createdAt, dateRange, snapshot(JSON), pdfURL?
Lesson/Article     slug, title, cluster, role, heroImage, body, sources[]  (seed from site content.json)
UserPrefs          reminderSchedule, trackedSymptomIds, healthKitEnabled, appLockEnabled
```

Persistence: **SwiftData** (or Core Data) on-device, synced via **iCloud
(CloudKit private DB)**. No server required for MVP.

**Pattern logic (v1, simple & transparent):** for each primary symptom, flag when
it is logged Moderate+ on **≥12 days within a rolling 30 days** AND spans **≥3
weeks** AND was not present in the prior baseline month. Show the flag as
supportive, explain *why* it triggered, never imply diagnosis.

---

## 10. iOS-native features
- **HealthKit:** read Cycle Tracking (context for symptoms); optionally write a
  summary/category sample. All optional.
- **Widgets:** Home/Lock Screen one-tap "log today" + status glance.
- **Notifications:** gentle daily/weekly check-in reminders; pattern nudge.
- **App Shortcuts / Siri:** "Log a symptom in Know Your Body."
- **Share Sheet:** export the doctor summary PDF.
- **Face ID / passcode lock** for privacy.
- **Accessibility:** Dynamic Type, VoiceOver labels on all controls, 4.5:1
  contrast minimum, large tap targets, reduced-motion variant.
- **Localization-ready:** structure copy for future Spanish/French (equity mission).

---

## 11. MVP scope vs later

**MVP (v1)**
- Onboarding, Today, daily check-in, Trends, pattern nudge, doctor summary (PDF +
  Share), Learn tab with the 25 articles, reminders, privacy/lock, dark mode.

**v2+**
- HealthKit Cycle integration, widgets, Siri shortcuts, knowledge checks +
  shareable cards, risk/family-history questionnaire (separate, careful design),
  caregiver mode, optional account + cross-device, multilingual.

---

## 12. Tech stack (suggested)
- **SwiftUI**, iOS 17+ (SwiftData, modern widgets).
- **SwiftData + CloudKit** for storage/sync.
- **Swift Charts** for trends.
- **PDFKit** for the doctor summary.
- Content seeded from the website's `data/education/content.json` (already exists)
  so the Learn tab stays in sync with the site.

---

## 13. Compliance, safety & privacy (read before building)
- **Not a medical device.** Frame everything as education + self-tracking. Avoid
  any cancer probability, risk score, or diagnostic claim that could pull this
  into FDA Software-as-a-Medical-Device territory.
- **Clinician review.** Any health-claim copy gets the same YMYL review the
  website content does, before shipping. Persistence threshold wording reviewed by
  a clinician.
- **Non-alarmist by design.** No red, no "you might have cancer." Calm, supportive,
  "worth a conversation."
- **Privacy first.** Health data stays on-device + the user's private iCloud.
  Nothing sold or shared. Clear App Store privacy nutrition label. Provide
  export-all and delete-all. App Store Health/medical app guidelines apply.
- **Disclaimer** present on the doctor summary and in onboarding: *"For education
  only. Not a substitute for professional medical advice, diagnosis, or
  treatment."*

---

## 14. Open questions for stakeholders
1. App name — "Know Your Body" working title; confirm or alternate.
2. Account/sync in MVP, or strictly on-device first?
3. Is the clinician available to review symptom-threshold + summary copy?
4. App icon direction — teal awareness ribbon, or the HopeCare mark?
5. Languages at launch — English only, or English + Spanish for the equity goal?
6. Distribution — standalone app under HopeCare's developer account; free, no ads,
   with an optional "donate" link (no in-app purchase complexity in v1).

---

## 15. Brand assets to hand to the designer
- Color tokens: §5.1 (exact hex).
- Type: Inter (UI), Playfair Display (display), Dancing Script (rare accent).
- Existing imagery: the 25 article hero illustrations + logo are in the website
  repo (`public/` and `public/education/`), already in-palette and reusable for the
  Learn tab and onboarding.

---

*Prepared for HopeCare Global Inc. Educational product. Final medical-claim copy
pending clinician review.*
