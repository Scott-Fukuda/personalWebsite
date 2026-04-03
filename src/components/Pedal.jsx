// CSS-rendered guitar pedal enclosure — no images, pure DOM + inline styles

const KNOB_ANGLES = [-30, 0, 30];

function Knob() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Body */}
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 32%, #555, #111)',
          border: '1px solid #444',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.9)',
          position: 'relative',
        }}
      >
        {/* Indicator line */}
        <div
          style={{
            position: 'absolute',
            width: 1.5,
            height: 6,
            background: '#999',
            top: 1,
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: 1,
          }}
        />
      </div>
    </div>
  );
}

export default function Pedal({ pedal, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'transform 0.12s ease',
        transform: isActive ? 'translateY(-5px)' : 'translateY(0)',
        display: 'inline-block',
      }}
      title={pedal.company}
    >
      {/* Enclosure */}
      <div
        style={{
          width: 96,
          height: 156,
          background: pedal.color,
          border: `1px solid ${isActive ? pedal.ledColor + '88' : 'rgba(0,0,0,0.5)'}`,
          borderRadius: 3,
          boxShadow: isActive
            ? `0 0 24px ${pedal.ledColor}44, 0 6px 20px rgba(0,0,0,0.7)`
            : '0 4px 14px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px 8px 8px',
          position: 'relative',
          transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
        }}
      >
        {/* Knobs row */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          {KNOB_ANGLES.map((_, i) => (
            <Knob key={i} />
          ))}
        </div>

        {/* LED */}
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: isActive ? pedal.ledColor : '#1a1a1a',
            boxShadow: isActive
              ? `0 0 6px ${pedal.ledColor}, 0 0 14px ${pedal.ledColor}88`
              : 'inset 0 1px 2px rgba(0,0,0,0.8)',
            border: `1px solid ${isActive ? pedal.ledColor : '#333'}`,
            transition: 'all 0.2s ease',
            marginBottom: 6,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.06em',
            color: isActive ? '#fff' : 'rgba(255,255,255,0.82)',
            textAlign: 'center',
            lineHeight: 1.3,
            marginBottom: 2,
            transition: 'color 0.2s ease',
          }}
        >
          {pedal.name}
        </div>

        {/* Type label */}
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 8,
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.38)',
            textAlign: 'center',
            marginBottom: 8,
          }}
        >
          {pedal.type}
        </div>

        {/* Footswitch */}
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 32%, #4a4a4a, #111)',
            border: '2px solid #222',
            boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.04)',
            marginBottom: 6,
          }}
        />

        {/* Jack dots */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingInline: 6 }}>
          {['IN', 'OUT'].map(label => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#111',
                  border: '1px solid #444',
                }}
              />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 5,
                  color: 'rgba(255,255,255,0.2)',
                  letterSpacing: '0.05em',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
