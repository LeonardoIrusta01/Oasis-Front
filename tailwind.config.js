/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        oasisGradient: {
          black: "#2B2845",
          white: "#FFFFFF",
          antiFlashWhite: "#EBEBEB",
          rust: "#A0522D",
          russet: "#804D29",
          chamoisee: "#A3704C",
          seaGreen: "#2E8B57",
          seaGreen2: "#3D8C66",
          castletonGreen: "#1E5940",
          cambridgeBlue: "#6FA17D",
          lightGreen: "#87F6B2",
        },
      },
      backgroundColor: {
        oasisGradient: {
          black: "#2B2845",
          white: "#FFFFFF",
          antiFlashWhite: "#EBEBEB",
          rust: "#A0522D",
          russet: "#804D29",
          chamoisee: "#A3704C",
          seaGreen: "#2E8B57",
          seaGreen2: "#3D8C66",
          castletonGreen: "#1E5940",
          cambridgeBlue: "#6FA17D",
          lightGreen: "#87F6B2",
        },
      },
      fontSize: {
        8: "32px",
      },
      spacing: {
        "1/10": "10%",
        "1.5/10": "15%",
        5.5: "1.375rem",
        "59%": "59%",
        "44%": "44%",
        "15.5%": "15.5%",
        "21.95%": "21.95%",
        "7/10": "70%",
      },
      width: {
        "screen/90": "90vw",
      },
      animation: {
        "slide-top": "slide-top 0.7s ease-in-out both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100px)",
          },
        },
      },
    },
    plugins: [],
  },
};
