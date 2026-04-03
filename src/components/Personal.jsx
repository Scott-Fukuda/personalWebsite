const interests = [
  {
    tag: "HARDWARE",
    label: "Physical Systems",
    detail:
      "I got into CS because I wanted code to do things in the world, not just on a screen. From automatic curtain openers to drone cameras, the physical layer has always been the point.",
    photo: "/images/hardware.jpg",
    photo2: "/images/hardware2.jpg",
  },
  {
    tag: "LIVE PERFORMANCE",
    label: "Electric Guitar",
    detail:
      "I play electric guitar at Oceanside Christian Fellowship and Cru Cornell — performing for 150–400 people on a bimonthly basis. Music is a way for me to relax and connect with those around me.",
    photo: "/images/music1.JPG",
    photo2: "/images/music2.png",
  },
  {
    tag: "SERVICE",
    label: "Community & Giving Back",
    detail:
      "CampusCares came from a belief that tech should help people, not just impress them. I've been involved in service and community since high school and carry that into every project.",
    photo: "/images/service1.jpeg",
    photo2: "/images/service2.jpeg",
  },
  {
    tag: "LANGUAGE",
    label: "Learning Japanese",
    detail:
      "Studying Japanese in my free time as a way to connect with my culture!",
    photo: "/images/japanese.jpg",
    photo2: null,
  },
  {
    tag: "200 LBS",
    label: "Piper",
    detail:
      "I have a 200-pound dog named Piper. She is the largest thing in any room she enters and the friendliest.",
    photo: "/images/piper.jpg",
    photo2: null,
  },
];

export default function Personal() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 lg:px-24"
      style={{ borderTop: '1px solid #1E1E1E' }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="font-mono text-xs text-muted mb-2"
          style={{ letterSpacing: '0.15em' }}
        >
          BEYOND THE BUILD
        </p>
        <h2 className="font-grotesk text-3xl font-bold text-cream mb-4">
          About Me
        </h2>
        <p
          className="text-sm text-muted mb-10 max-w-xl"
          style={{ lineHeight: 1.7 }}
        >
          Hi! My name is Scott Fukuda, and I am a Cornell student passionate about creating real-time systems that help people. In my free time, I am involved in Christian community at Cru Cornell and LOVE playing guitar!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0">
          {interests.map((item, i) => (
            <div
              key={i}
              className="flex flex-col"
              style={{
                borderLeft: i === 0 ? 'none' : '1px solid #1E1E1E',
                borderTop: '1px solid #1E1E1E',
              }}
            >
              {/* Photos */}
              <div style={{ display: 'flex', height: 140, overflow: 'hidden' }}>
                {item.photo && (
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <img
                      src={item.photo}
                      alt={item.label}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        filter: 'brightness(0.75) saturate(0.8)',
                      }}
                    />
                  </div>
                )}
                {item.photo2 && (
                  <>
                    <div style={{ width: 1, background: '#0E0E0E', flexShrink: 0 }} />
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                      <img
                        src={item.photo2}
                        alt={`${item.label} 2`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          filter: 'brightness(0.75) saturate(0.8)',
                        }}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Text */}
              <div className="py-6 px-5 flex-1">
                <p
                  className="font-mono text-xs text-muted mb-3"
                  style={{ letterSpacing: '0.15em' }}
                >
                  {item.tag}
                </p>
                <h3 className="font-grotesk text-base font-semibold text-cream mb-3">
                  {item.label}
                </h3>
                <p className="text-sm text-muted" style={{ lineHeight: 1.7 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
