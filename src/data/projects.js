export const projects = [
  {
    title: "CampusCares",
    description: "Full-stack social impact platform connecting Cornell students with local volunteer opportunities. Launched the entire product: React frontend, Flask API, PostgreSQL relational models, Firebase storage. Scaled to 350+ active users.",
    stack: ["React", "Flask", "PostgreSQL", "Firebase", "JWT", "AWS"],
    link: "https://campuscares.us",
    highlight: "350+ students · 390 volunteer hours in 3 months",
    status: "live",
  },
  {
    title: "CUAir Livestream Pipeline",
    description: "Real-time video pipeline streaming live camera footage from unmanned aircraft to a ground control interface. Cross-compiled C-based plane system code to ARM using Docker for Raspberry Pi deployment.",
    stack: ["GStreamer", "MediaMTX", "Docker", "ARM", "C", "Linux"],
    link: null,
    highlight: "Live video from aircraft · ARM cross-compilation · Hardware integration",
    status: "active",
  },
  {
    title: "Encrypted Messaging System",
    description: "Terminal-based end-to-end encrypted messaging using Diffie–Hellman key exchange. Asynchronous client–server architecture in OCaml with Lwt for concurrent, non-blocking I/O.",
    stack: ["OCaml", "Lwt", "Diffie-Hellman", "Async I/O", "Cryptography"],
    link: null,
    highlight: null,
    status: "completed",
  },
];
