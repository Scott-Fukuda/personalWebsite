const milestones = [
  {
    year: "2022",
    label: "Built a prototype automatic curtain opener in high school robotics — first time code touched hardware.",
  },
  {
    year: "2023",
    label: "FRC robotics. Welding internship at Harbor Freight Tools for Schools. Started thinking in systems, not just code.",
  },
  {
    year: "2024",
    label: "Cornell CS. Joined CUAir and built a real-time drone livestream pipeline. CampusCares grew to 350+ users.",
  },
  {
    year: "2026",
    label: "Incoming autonomous vehicles research at NC State REU.",
  },
];

export default function Story() {
  return (
    <section
      className="py-20 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
      style={{ borderTop: '1px solid #1E1E1E' }}
    >
      <p
        className="font-mono text-xs text-muted mb-10"
        style={{ letterSpacing: '0.15em' }}
      >
        ORIGIN / SIGNAL SOURCE
      </p>

      <div className="grid md:grid-cols-4 gap-8">
        {milestones.map((m, i) => (
          <div key={i} className="relative">
            {/* Horizontal line for desktop, vertical for mobile */}
            <div
              className="hidden md:block absolute top-0 left-0 right-0 h-px"
              style={{ background: '#2A2A2A' }}
            />
            <div
              className="md:hidden absolute top-0 left-0 bottom-0 w-px"
              style={{ background: '#2A2A2A' }}
            />

            <div className="md:pt-5 pl-4 md:pl-0">
              <span
                className="font-mono text-xs block mb-2"
                style={{ color: '#C4872A', letterSpacing: '0.1em' }}
              >
                {m.year}
              </span>
              <p className="text-sm text-muted leading-relaxed">{m.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
