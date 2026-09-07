repo: Scott-Fukuda/personalWebsite
branch: master

## Last sync
date: 2026-09-07T21:20:00Z

### Updated in this project
- Built the design out as the live React site: new `src/` (Nav, Hero, Experience, Projects, About, Footer) replacing the old pedal/signal-chain components.
- Palette: charcoal brown `#423E37`, sunflower gold `#E3B23C`, eggshell `#EDEBD7`, rosy granite `#A39594`, dim grey `#6E675F`. Single Helvetica stack, no webfont requests.
- Every media slot is filled from real files. Videos are self-hosted MP4s that autoplay muted when scrolled into view and pause when they leave; each has a poster frame and a click-to-unmute button (unmuting one mutes the others).
- Source video transcoded for the web: 377 MB of originals → 15 MB shipped.
- Footer is full-bleed — it was nested inside a `max-width:1180px` section in the design, so the dark bar stopped short of the edges.
- `about-hardware` uses `hardware2.jpg` (workbench) rather than `hardware.jpg`, which is the same photo as `cuair-1`.
- Originals stay in `media/`; only the derived, web-sized copies live in `public/media/`.

## Screen map
| Screen | Repo files |
| --- | --- |
| Portfolio.dc.html — nav + hero | index.html, src/components/Nav.jsx, src/components/Hero.jsx |
| Portfolio.dc.html — 01 Experience | src/components/Experience.jsx, src/data/content.js |
| Portfolio.dc.html — 02 Projects | src/components/Projects.jsx, src/data/content.js |
| Portfolio.dc.html — 03 About photo cloud | src/components/About.jsx, public/media/about-*.jpg |
| Portfolio.dc.html — contact bar | src/components/Footer.jsx |
| shared | src/index.css, src/App.jsx, src/components/AutoVideo.jsx, src/components/Reveal.jsx, src/components/Still.jsx |

## Media map
| Design slot | Source | Shipped |
| --- | --- | --- |
| reu-demo.mp4 | media/reu-demo.mov (136 MB) | public/media/reu-demo.mp4 (2.5 MB) |
| reu-poster.jpg | media/reu-2.jpg | public/media/reu-poster.jpg — opens full size |
| reu-fun.jpg | media/reu-3.PNG (letterbox cropped) | public/media/reu-fun.jpg |
| cuair-demo.mp4 | media/cuair.MOV (portrait) | public/media/cuair-demo.mp4 (6.0 MB) |
| cuair-1/2.jpg | media/cuair-1.jpg, cuair-2.png | public/media/cuair-1.jpg, cuair-2.jpg |
| campuscares-1/2/3.jpg | media/campuscares-1.png, -2.jpg, -3.jpg | public/media/campuscares-*.jpg |
| pedalboard-demo.mp4 | media/Effects Processor Video.mp4 (242 MB) | public/media/pedalboard-demo.mp4 (6.3 MB) |
| messaging-demo.mp4 | media/terminal_tok.mp4 | public/media/messaging-demo.mp4 (504 KB) |
| about-hardware.jpg | public/images/hardware2.jpg (pillarbox cropped) | public/media/about-hardware.jpg |
| about-* (7 others) | media/about/about-*.jpg | public/media/about-*.jpg |
