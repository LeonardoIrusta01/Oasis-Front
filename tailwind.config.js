/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        oasisGradient: {
          white: '#FFFFFF',
          antiFlashWhite: '#EBEBEB',
          rust: '#A0522D',
          russet: '#804D29',
          chamoisee: '#A3704C',
          seaGreen: '#2E8B57',
          seaGreen2: '#3D8C66',
          castletonGreen: '#1E5940',
          cambridgeBlue: '#6FA17D',
          lightGreen: '#87F6B2',
        }
      },
      backgroundColor: {
        oasisGradient: {
          white: '#FFFFFF',
          antiFlashWhite: '#EBEBEB',
          rust: '#A0522D',
          russet: '#804D29',
          chamoisee: '#A3704C',
          seaGreen: '#2E8B57',
          seaGreen2: '#3D8C66',
          castletonGreen: '#1E5940',
          cambridgeBlue: '#6FA17D',
          lightGreen: '#87F6B2',
        }
      },
    },
  },
  plugins: [],
}
