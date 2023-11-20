import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        Auto1fr: 'auto 1fr',
        fluid: 'repeat(auto-fill, minmax(200px, 1fr))'
      },
      screens: {
        'xs': '530px',
        'sm': '732px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
