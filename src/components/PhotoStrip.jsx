const photos = [
  { src: "/images/ithaca1.jpeg", alt: "Ithaca" },
  { src: "/images/music3.jpg",   alt: "Guitar" },
  { src: "/images/adventure.jpeg", alt: "Adventure" },
  { src: "/images/ithaca2.jpeg", alt: "Ithaca" },
  { src: "/images/adventure2.jpeg", alt: "Adventure" },
];

export default function PhotoStrip() {
  return (
    <div
      style={{
        borderTop: '1px solid #1E1E1E',
        borderBottom: '1px solid #1E1E1E',
        display: 'flex',
        height: 220,
        overflow: 'hidden',
      }}
    >
      {photos.map((photo, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            overflow: 'hidden',
            borderLeft: i === 0 ? 'none' : '1px solid #0E0E0E',
            position: 'relative',
          }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'brightness(0.65) saturate(0.75)',
              transition: 'filter 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.filter = 'brightness(0.85) saturate(0.95)';
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.filter = 'brightness(0.65) saturate(0.75)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      ))}
    </div>
  );
}
