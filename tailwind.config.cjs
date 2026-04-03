/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0E0E0E',
        surface: '#1A1A1A',
        'surface-2': '#252525',
        frame: '#2A2A2A',
        cream: '#E8E0D0',
        muted: '#7A7268',
        amber: '#C4872A',
        sage: '#8BA888',
        brick: '#B85C4A',
        metal: '#3D3D3D',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
