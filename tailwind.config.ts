/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
     "./src/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-purple": {
          10: "#DCD0E1",
          20: "#C4B0CC",
          30: "#A789B3",
          40: "#8A629A",
          50: "#6C3A80",
          DEFAULT: "#4F1367", // Base color
          60: "#421056",
          70: "#350D45",
          80: "#280A34",
          90: "#1A0622",
          100: "#100415",
        },
        "burnt-orange": {
          10: "#FFE4D5",
          20: "#FFD3BA",
          30: "#FFBD97",
          40: "#FFA674",
          50: "#FF9052",
          DEFAULT: "#FF7A2F", // Base color
          60: "#D56627",
          70: "#AA511F",
          80: "#803D18",
          90: "#552910",
          100: "#331809",
        },
        lilac: {
          10: "#F0EAF7",
          20: "#E6DCF1",
          30: "#DACBEB",
          40: "#CDBAE4",
          50: "#C1A8DD",
          DEFAULT: "#B497D6", // Base color
          60: "#987EB2",
          70: "#78658F",
          80: "#5A4C6B",
          90: "#3C3247",
          100: "#241E2B",
        },
        white: {
          10: "#FFFFFF",
          20: "#FFFFFF",
          30: "#FFFFFF",
          40: "#FFFFFF",
          50: "#FFFFFF",
          DEFAULT: "#FFFFFF", // Base color
          60: "#D5D5D5",
          70: "#AAAAAA",
          80: "#808080",
          90: "#555555",
          100: "#333333",
        },
      },
    },
  },
  plugins: [],
};
