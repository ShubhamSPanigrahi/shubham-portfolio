# media/

Put photographs, figures, posters and video clips here, then reference them
from `data/3-projects.js` (case-study galleries) or `data/1-site.js` (portrait).

Naming: lowercase, hyphens, no spaces — `uav-lidar-pointcloud.jpg`, not
`UAV LiDAR (final) copy.JPG`. Spaces and accents break URLs on some hosts.

Before committing, check the size:

| Kind | Target | Hard ceiling |
|---|---|---|
| Photo / figure | under 400 KB, max 2000 px wide | GitHub rejects any file over 100 MB |
| Poster frame for a video | under 150 KB | — |
| Self-hosted video | under 15 MB, 1080p or less, H.264 MP4 | see note below |

**Prefer YouTube or Vimeo for anything longer than about 20 seconds.** A video
served from this site is downloaded in full by every visitor who plays it and
is billed against your Netlify usage allowance; the same clip on YouTube costs
you nothing and streams better. Use `{type:'youtube', id:'...'}` for those.
Self-host only short, silent, looping clips — a simulation animation, a
mechanism in motion.
