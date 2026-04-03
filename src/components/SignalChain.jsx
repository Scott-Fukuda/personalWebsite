import { useState, useRef, useEffect, useCallback } from "react";
import Pedal from "./Pedal";
import { pedals } from "../data/experiences";

// Row layout: [0,1,2] in row 1, [3,4] in row 2
const ROW_1 = pedals.slice(0, 3);
const ROW_2 = pedals.slice(3);

function getCablePath(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;

  if (Math.abs(dy) > 40) {
    // Cross-row cable: curves down then left
    const cx1 = x1 + 50;
    const cy1 = y1 + dy * 0.7;
    const cx2 = x2 - 30;
    const cy2 = y2 - 20;
    return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
  }
  // Same-row: standard S-curve
  const cp = dx * 0.45;
  return `M ${x1} ${y1} C ${x1 + cp} ${y1}, ${x2 - cp} ${y2}, ${x2} ${y2}`;
}

export default function SignalChain() {
  const [activePedal, setActivePedal] = useState(null);
  const [cables, setCables] = useState([]);
  const pedalRefs = useRef({});
  const boardRef = useRef(null);

  const updateCables = useCallback(() => {
    if (!boardRef.current) return;
    const boardRect = boardRef.current.getBoundingClientRect();
    const newCables = [];

    // Signal order: hsrobotics → cornell → cuair → campuscares → ncstate → guitar
    const order = ["hsrobotics", "cornell", "cuair", "campuscares", "ncstate", "guitar"];

    for (let i = 0; i < order.length - 1; i++) {
      const fromEl = pedalRefs.current[order[i]];
      const toEl = pedalRefs.current[order[i + 1]];
      if (!fromEl || !toEl) continue;

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      // From: right edge, vertical center
      const x1 = fromRect.right - boardRect.left;
      const y1 = fromRect.top + fromRect.height / 2 - boardRect.top;
      // To: left edge, vertical center
      const x2 = toRect.left - boardRect.left;
      const y2 = toRect.top + toRect.height / 2 - boardRect.top;

      newCables.push({
        path: getCablePath(x1, y1, x2, y2),
        color: pedals.find(p => p.id === order[i])?.ledColor ?? '#555',
      });
    }

    setCables(newCables);
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM has painted
    const timeout = setTimeout(updateCables, 50);
    window.addEventListener("resize", updateCables);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateCables);
    };
  }, [updateCables]);

  const activePedalData = pedals.find(p => p.id === activePedal);

  const handlePedalClick = (id) => {
    setActivePedal(prev => prev === id ? null : id);
  };

  return (
    <section
      id="signal-chain"
      className="py-20 px-6 md:px-16 lg:px-24"
      style={{ borderTop: '1px solid #1E1E1E' }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="font-mono text-xs text-muted mb-2"
          style={{ letterSpacing: '0.15em' }}
        >
          SIGNAL CHAIN
        </p>
        <h2 className="font-grotesk text-3xl font-bold text-cream mb-10">
          Experience
        </h2>

        {/* Pedalboard */}
        <div
          ref={boardRef}
          className="relative rounded-sm py-10 px-6 md:px-12"
          style={{
            // Velcro-like crosshatch background
            backgroundImage:
              'repeating-linear-gradient(45deg, #0d0d0d 0px, #0d0d0d 3px, #111 3px, #111 7px)',
            border: '2px solid #1E1E1E',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.6)',
          }}
        >
          {/* Pedalboard rail top */}
          <div
            className="absolute top-0 left-0 right-0 h-3 rounded-t-sm"
            style={{ background: 'linear-gradient(180deg, #2a2a2a, #1a1a1a)', borderBottom: '1px solid #333' }}
          />
          {/* Pedalboard rail bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-3 rounded-b-sm"
            style={{ background: 'linear-gradient(0deg, #2a2a2a, #1a1a1a)', borderTop: '1px solid #333' }}
          />

          {/* Input label */}
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted hidden md:block"
            style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)', letterSpacing: '0.1em' }}
          >
            INPUT ●
          </div>

          {/* Output label */}
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted hidden md:block"
            style={{ writingMode: 'vertical-rl', letterSpacing: '0.1em' }}
          >
            ● OUTPUT
          </div>

          {/* SVG cable overlay */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
            aria-hidden="true"
          >
            {cables.map((cable, i) => (
              <path
                key={i}
                d={cable.path}
                stroke={cable.color}
                strokeWidth="2.5"
                strokeOpacity="0.45"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>

          {/* Row 1: HS Robotics, Cornell, CUAir */}
          <div className="flex justify-around items-center mb-8">
            {ROW_1.map(pedal => (
              <div
                key={pedal.id}
                ref={el => { pedalRefs.current[pedal.id] = el; }}
              >
                <Pedal
                  pedal={pedal}
                  isActive={activePedal === pedal.id}
                  onClick={() => handlePedalClick(pedal.id)}
                />
              </div>
            ))}
          </div>

          {/* Row 2: CampusCares, NC State, Guitar */}
          <div className="flex justify-around items-center">
            {ROW_2.map(pedal => (
              <div
                key={pedal.id}
                ref={el => { pedalRefs.current[pedal.id] = el; }}
              >
                <Pedal
                  pedal={pedal}
                  isActive={activePedal === pedal.id}
                  onClick={() => handlePedalClick(pedal.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hint */}
        <p
          className="font-mono text-xs text-muted mt-3 text-center"
          style={{ letterSpacing: '0.1em' }}
        >
          — click a pedal to engage —
        </p>

        {/* Detail panel */}
        {activePedalData && (
          <div
            className="mt-6 p-6 rounded-sm"
            style={{
              background: '#111',
              border: `1px solid ${activePedalData.ledColor}33`,
              borderLeft: `3px solid ${activePedalData.ledColor}`,
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-grotesk text-xl font-semibold text-cream">
                  {activePedalData.company}
                </h3>
                <p
                  className="font-mono text-xs text-muted mt-1"
                  style={{ letterSpacing: '0.08em' }}
                >
                  {activePedalData.duration}
                </p>
              </div>
              <span
                className="font-mono text-xs px-2 py-1 rounded-sm"
                style={{
                  background: activePedalData.color + '33',
                  color: activePedalData.ledColor,
                  border: `1px solid ${activePedalData.color}55`,
                  letterSpacing: '0.1em',
                }}
              >
                {activePedalData.type}
              </span>
            </div>

            <p
              className="text-sm text-muted mb-5 italic"
              style={{ lineHeight: 1.6 }}
            >
              {activePedalData.description}
            </p>

            <ul className="space-y-2 mb-5">
              {activePedalData.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: activePedalData.ledColor }}
                  >
                    —
                  </span>
                  <span className="text-cream" style={{ lineHeight: 1.6 }}>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {activePedalData.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-0.5"
                  style={{
                    border: '1px solid #2A2A2A',
                    color: '#7A7268',
                    letterSpacing: '0.05em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
