/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem'
      }
    },
    extend: {
      colors: {
        primary: "#002e5b",
        accent: "#3aade1",
        muted: "#666666",
        paper: "#ffffff",
        gold: "#C4A962"
      },
      fontFamily: {
        heading: ["Roboto", "sans-serif"],
        body: ["Open Sans", "sans-serif"]
      }
      ,
      fontSize: {
        // Hero and heading presets for visual consistency
        'hero': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'heading-lg': ['clamp(1.5rem, 3.2vw, 2.5rem)', { lineHeight: '1.06' }]
      }
    }
  },
  plugins: []
}
