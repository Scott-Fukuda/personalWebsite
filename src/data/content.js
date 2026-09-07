export const profile = {
  name: 'Scott Fukuda',
  eyebrow: "Cornell CS '28 — Ithaca, NY",
  tagline: 'I build systems where software meets the real hardware and real world people.',
  email: 'sdf72@cornell.edu',
  github: 'https://github.com/Scott-Fukuda',
  linkedin: 'https://www.linkedin.com/in/scott-fukuda-3923172ab/',
}

export const experience = [
  {
    id: 'reu',
    title: 'NSF REU — CoRob Lab, NC State',
    dates: 'May — Jul 2026',
    role: 'Robotics Researcher',
    body: [
      "Over the summer of 2026, I had the opportunity to work in Dr. Peng Gao's CoRob Lab at NC State as a part of an NSF REU (Research Experience for Undergraduates). I contributed to the development of CORAL, a K-12 educational platform with a humanoid robot that uses perception and LLMs to mimic a user's gesture.",
    ],
    video: {
      src: '/media/reu-demo.mp4',
      poster: '/media/reu-demo-poster.jpg',
      label: 'CORAL demo — pose matching on the Hiwonder AiNex',
    },
    stills: [
      {
        src: '/media/reu-poster.jpg',
        alt: 'Research poster: Interactive Pose-Matching Robot for K-12 AI Education',
        caption: 'Research poster',
        href: '/media/reu-poster.jpg',
      },
      {
        src: '/media/reu-fun.jpg',
        alt: 'Presenting the poster at the REU symposium',
        caption: 'Symposium',
      },
    ],
  },
  {
    id: 'cuair',
    title: 'CUAir — Cornell Unmanned Air Systems',
    dates: 'Feb 2025 — Present',
    role: 'Intelligence Subteam',
    body: [
      'Since my freshman year, I have had the opportunity to work with CUAir, a student-run team that designs, builds, and operates a custom search and rescue unmanned aerial system.',
      "I've been a part of the Intelligence subteam, working on image capture, classification, and transfer.",
    ],
    video: {
      src: '/media/cuair-demo.mp4',
      poster: '/media/cuair-demo-poster.jpg',
      label: 'GPS / image capture test on the ag quad',
      portrait: true,
    },
    stills: [
      { src: '/media/cuair-1.jpg', alt: 'In the CUAir shop after a build session' },
      { src: '/media/cuair-2.jpg', alt: 'The team with the aircraft at a field test' },
    ],
  },
  {
    id: 'campuscares',
    title: 'CampusCares',
    dates: 'Jul 2025 — Present',
    role: 'Co-founder · Technical Lead',
    link: { href: 'https://campuscares.us', label: 'campuscares.us' },
    body: [
      'In July 2025, some of my friends and I launched CampusCares, a non-profit startup that connects students with volunteer opportunities in Ithaca.',
      "Since then, I've continued to build out and develop the website as the Lead of the Technical subteam. We're about to launch our app.",
    ],
    hero: {
      src: '/media/campuscares-1.jpg',
      alt: 'The CampusCares app showing upcoming volunteer opportunities in Ithaca',
      caption: 'campuscares.us — upcoming opportunities',
    },
    stills: [
      { src: '/media/campuscares-2.jpg', alt: 'The CampusCares team at a late-night work session' },
      { src: '/media/campuscares-3.jpg', alt: 'Volunteers moving furniture on a service project' },
    ],
  },
]

export const projects = [
  {
    id: 'pedalboard',
    title: 'Custom-Built Effects Processor System',
    body: 'Here is the custom electric guitar effects processing system I use whenever performing — built on Logic Pro and an audio interface, so every patch and signal path is mine.',
    tags: ['Logic Pro', 'Audio Interface', 'Live Performance'],
    video: {
      src: '/media/pedalboard-demo.mp4',
      poster: '/media/pedalboard-demo-poster.jpg',
      label: 'Signal chain walkthrough',
    },
  },
  {
    id: 'messaging',
    title: 'Terminal-Based Messaging System',
    body: 'In my Functional Programming class, I worked with a team to build a terminal-based social media platform. I built the secure messaging system: Diffie–Hellman key exchange and an async OCaml (Lwt) client–server architecture handling concurrent, non-blocking connections.',
    tags: ['OCaml', 'Lwt', 'Diffie–Hellman', 'Async I/O'],
    video: {
      src: '/media/messaging-demo.mp4',
      poster: '/media/messaging-demo-poster.jpg',
      label: 'TerminalTok — chat and ASCII video in the terminal',
    },
  },
]

// Ringed around the About text — every photo in media/about/. Overlap is fine;
// x/y are percentages of the cloud box, w a percentage of its width.
export const aboutPhotos = [
  // inner ring
  { src: '/media/about-profile.jpg', alt: 'Scott Fukuda', x: 50, y: 14, w: 18, r: -4, d: 7 },
  { src: '/media/about-ithaca.jpg', alt: 'Sunset over an Ithaca gorge', x: 76, y: 22, w: 16, r: 5, d: 7.8 },
  { src: '/media/about-adventure.jpg', alt: 'Hiking a pine trail', x: 90, y: 46, w: 16, r: -6, d: 9 },
  { src: '/media/about-japanese.jpg', alt: 'Next to a Totoro statue in Japan', x: 76, y: 74, w: 16, r: 3, d: 8.8 },
  { src: '/media/about-music.jpg', alt: 'Playing guitar at home', x: 50, y: 86, w: 17, r: -5, d: 8.5 },
  { src: '/media/about-piper.jpg', alt: 'With my dog', x: 24, y: 74, w: 16, r: 4, d: 7.4 },
  { src: '/media/about-service.jpg', alt: 'Planting a tree at a service project', x: 10, y: 46, w: 18, r: -3, d: 8.2 },
  { src: '/media/about-hardware.jpg', alt: 'Avionics and radios spread across the workbench', x: 24, y: 22, w: 16, r: 6, d: 9.5 },
  // outer ring
  { src: '/media/about-deer.jpg', alt: 'Deer on campus after dark', x: 36, y: 10, w: 13, r: 7, d: 7.2 },
  { src: '/media/about-5k.jpg', alt: 'Holding the trophy after the Delta 5k', x: 64, y: 10, w: 13, r: -8, d: 8.1 },
  { src: '/media/about-cru.jpg', alt: 'The Cru team on stage after a night of worship', x: 89, y: 20, w: 14, r: 4, d: 9.2 },
  { src: '/media/about-salvation.jpg', alt: 'Volunteering at The Salvation Army', x: 11, y: 20, w: 14, r: -7, d: 7.6 },
  { src: '/media/about-dam.jpg', alt: 'Fall colors over a dam near Ithaca', x: 91, y: 70, w: 14, r: 6, d: 8.4 },
  { src: '/media/about-dusk.jpg', alt: 'A crescent moon over the lot on a grocery run', x: 64, y: 90, w: 13, r: 5, d: 9.1 },
  { src: '/media/about-lake.jpg', alt: 'Last light over the lake', x: 36, y: 90, w: 14, r: -6, d: 7.9 },
  { src: '/media/about-cohort.jpg', alt: 'The REU cohort out after dark', x: 9, y: 70, w: 14, r: 8, d: 8.7 },
  { src: '/media/about-yard.jpg', alt: 'Friends piling in for a photo at a service project', x: 18, y: 58, w: 12, r: -5, d: 9.4 },
  { src: '/media/about-tabling.jpg', alt: 'Tabling for Cornell Cru on the slope', x: 82, y: 58, w: 12, r: 4, d: 7.7 },
]

// Each paragraph is a list of parts: a plain string, or { text, href } for a link.
export const aboutText = [
  [
    "Hi I'm Scott! I'm a CS student at Cornell, and my most faith in Jesus is the most important part of my life. I love spending time outside, exercising, being with friends, and music! (I know very generic haha). I am blessed to be able to study Computer Science, and I am looking forward to a career in robotics software engineering.",
  ],
  [
    'In my free time, I play electric guitar for ',
    { text: 'Cornell Cru', href: 'https://www.crucornell.com/' },
    ' and serve as Vice President of ',
    { text: 'Ignite', href: 'https://www.ignitecornell.org/' },
    '.',
  ],
]
