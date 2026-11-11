# Shubham Subrot Panigrahi — Research Portfolio

Static site, no build step, no dependencies. Content is separated from code so
that updating the site means editing a short list of plain data files.

**The goal of this setup: you never drag a folder into Netlify again.** You edit
a file, save it, and the live site updates by itself in under a minute.

---

# Part 1 — One-time setup (about 20 minutes, browser only)

You do this once. Nothing to install.

## 1. Put the site on GitHub

1. Create a free account at <https://github.com> if you don't have one.
2. Click **+** (top right) → **New repository**.
3. Name it `shubham-portfolio`. Leave it **Public** (required for free Netlify
   deploys on some plans, and it's a portfolio anyway). Do **not** tick
   "Add a README" — you already have one.
4. Click **Create repository**.
5. On the next page click **uploading an existing file**.
6. Open this folder on your computer, select *everything inside it* — the files
   and the `data/` and `media/` folders — and drag it all into the browser.
   GitHub keeps the folder structure.
7. Scroll down, click **Commit changes**.

## 2. Connect Netlify

1. Go to <https://app.netlify.com> and sign in.
2. **Add new project** → **Import an existing project** → **GitHub**.
   Authorise GitHub if asked.
3. Pick `shubham-portfolio`.
4. Netlify will ask for a build command and publish directory.
   **Leave the build command empty.** Set publish directory to `.` (a single
   dot) if it isn't already. There is nothing to build.
5. Click **Deploy**.

## 3. Point your existing address at it (if you already have one you like)

If you already have a `something.netlify.app` URL from the drag-and-drop site
and want to keep it, open the **old** site → **Site configuration** →
**Change site name** → rename it to something else. Then open the **new**
Git-connected site → **Change site name** → take the name you just freed up.
Delete the old site once you're happy.

**You're done.** From now on, every change you commit to GitHub goes live
automatically. No folders, no dragging.

---

# Part 2 — Everyday changes

Two ways to work. Pick whichever suits you; they do exactly the same thing.

**Option A — in the browser.** Go to your repo on github.com, click the file,
click the pencil icon, edit, click **Commit changes**. Nothing installed.

**Option B — folder on your computer** (closer to how you work now). Install
[GitHub Desktop](https://desktop.github.com), clone the repo once, and then it
behaves like a normal folder: edit files, drop images in, open GitHub Desktop,
type a line about what changed, click **Commit** then **Push**. Netlify picks
it up.

Either way, the site rebuilds within about a minute of the commit landing.

## Update your CV

Replace the PDF, keeping the filename **exactly** `Shubham_Subrot_Panigrahi_CV.pdf`.

- *Browser:* in the repo root, **Add file** → **Upload files**, drag the new
  PDF in, **Commit changes**. Same filename means it overwrites.
- *Desktop:* copy the new PDF over the old one, commit, push.

Remember that the PDF is **only the download**. If the CV change also needs to
show up *on the page* — a new paper, a new grant, a different student count —
edit the matching data file below as well.

## Add a publication

Open `data/4-publications.js` and add one row at the **top** of the array:

```js
[38,2027,'Title of the new paper','<b>Panigrahi, S.S.*</b>, Coauthor, A.','Journal Name 12, 104567','10.1016/j.example.2027.104567','Multiphysics','first'],
```

Fields: `number, year, title, authors, journal, DOI, topic, role`.
Bold your own name with `<b>…</b>`; add `*` inside if you're corresponding.
`role` is `'first'`, `'corr'` or `'co'`. `topic` can be an existing one or a new
string, which gets its own filter chip automatically.

Everything else recalculates on its own: the homepage counters, the headline
count, the first/corresponding tally, the year histogram, every filter count.

## Add a photo or a figure

1. Put the image in `media/`. Lowercase, hyphens, no spaces.
2. Open `data/3-projects.js`, find the case study, and add a `media` entry.
   Each case study has a commented example showing exactly where it goes.

```js
media:[
  {type:'image', src:'media/cfd-velocity.png',
   caption:'Velocity magnitude on the silo mid-plane, 5 kW fan.'},
]
```

Optional extras on any item: `alt:'…'` for screen readers (falls back to the
caption), and `wide:true` to make it span the full width instead of half.

You can also set `thumb:'media/something.jpg'` on a case study to replace the
drawn illustration on its card with a real photograph.

## Add a video

**Long clips, talks, anything with sound → YouTube or Vimeo.** Upload it there,
then reference the ID:

```js
{type:'youtube', id:'XXXXXXXXXXX', wide:true, caption:'Conference talk on dead-zone mitigation.'}
```

The ID is the part after `watch?v=` in the URL. A "Watch on YouTube" link is
always rendered underneath, so the figure still works if the embed is blocked.

**Short silent clips — a simulation animation, a mechanism in motion → host it
here.** Put a compressed MP4 in `media/` and:

```js
{type:'video', src:'media/aeration-front.mp4', poster:'media/aeration-poster.jpg',
 caption:'Transient cooling front over 48 h of aeration.'}
```

The `poster` is optional but worth adding — it's the still frame shown before
play. See `media/README.md` for size limits and why self-hosting long video is
a bad idea.

## Add your portrait

Put a square photo in `media/`, then in `data/1-site.js`:

```js
const SITE={ portrait:'media/headshot.jpg', portraitAlt:'Shubham Subrot Panigrahi' };
```

Leave `portrait:''` and the hero keeps the SP monogram.

## Everything else

| What changed | File | What to edit |
|---|---|---|
| Date in the footer | `data/1-site.js` | `LAST_UPDATED` |
| Number of students you supervise | `data/1-site.js` | `MENTEES` |
| A grant, or a proposal changing status | `data/5-record.js` | `FUNDING` |
| New position, or an end date | `data/5-record.js` | `CAREER` |
| A new degree or licence | `data/5-record.js` | `EDU` |
| Committee, editorship, officer role | `data/5-record.js` | `SERVICE` |
| A flagship project, or new results | `data/3-projects.js` | `CASES` |
| Research pillars, pipeline, capabilities | `data/2-research.js` | `PILLARS`, `STAGES`, `CAPS` |
| Under-review papers, review counts | `index.html` | the two panels in the Publications section |

`FUNDING` rows are `[project, your role, value, statusClass, statusLabel]`
where `statusClass` is `funded`, `sub`, `final` or `nf` — that's what colours
the pill. Keep each value in its original currency and never total them.

---

# Part 3 — Things worth knowing

## Check your work before committing

Double-click `index.html` on your computer. It opens in your browser and runs
exactly as the live site does, straight off the filesystem — no server needed.
Do this after any data edit; a stray missing comma is the one mistake that
blanks a section, and you'll see it immediately.

If a section does go blank, press **F12**, open the **Console** tab, and the
error names the file and line.

## Netlify usage

Netlify changed its free plan in September 2025, and accounts opened before and
after that date are metered differently — older ones on bandwidth and build
minutes, newer ones on a monthly credit pool that successful deploys also draw
from. Published figures disagree, so check **Billing → Usage** on your own team
rather than trusting any number you read, including this one.

Two practical consequences either way:

- **Batch your edits.** Ten commits means ten deploys. Make your changes, then
  commit once.
- **Don't self-host video.** It is far and away the fastest way to burn an
  allowance. Use YouTube or Vimeo.

## Rolling back

If a commit breaks something, open the site on Netlify → **Deploys** → find the
last good one → **Publish deploy**. Live again in seconds, no Git required.

## File map

```
index.html                      markup, styling, interaction logic — rarely needs touching
data/1-site.js                  date, mentee count, portrait
data/2-research.js              research pillars, pipeline stages, capability chains
data/3-projects.js              the six flagship case studies and their media
data/4-publications.js          every published article
data/5-record.js                funding, career, education, service
media/                          your photographs, figures and video clips
Shubham_Subrot_Panigrahi_CV.pdf the downloadable CV
netlify.toml                    headers, caching, the /cv shortcut
robots.txt, sitemap.xml         crawling and indexing
```

## Before you share it widely

- Verify the Google Scholar, ResearchGate and LinkedIn links resolve — they
  were built from the paths in the CV, which aren't canonical profile IDs.
- Replace the placeholder domain in three places once you have your real URL:
  the `<link rel="canonical">` and `og:url` in `index.html`, the `Sitemap:`
  line in `robots.txt`, and `<loc>` in `sitemap.xml`.

## Accessibility and privacy

Semantic landmarks, skip link, keyboard-operable filters and tabs, focus-trapped
dialog, visible focus rings, reflow to 390 px with no horizontal scroll,
reduced-motion support, light and dark themes, and every text colour checked at
4.5:1 contrast or better.

Phone number, home address and immigration status from the CV are deliberately
absent from the page and its source. Public contact is the email address,
Google Scholar, ORCID, ResearchGate and LinkedIn.
