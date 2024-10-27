import type { Config } from "tailwindcss";

const config: Config = {
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
        'dark-gray': '#1C1C1C',
        'primary': '#85CEE4',
      },
    },
    keyframes: {
      'move-sideways-1': {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(5px, 10px)' }, 
      },
      'move-sideways-2': {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '50%': { transform: 'translate(10px, 5px)' }, 
      },
    },
    animation: {
      'move-sideways-1': 'move-sideways-1 2s ease-in-out infinite',
      'move-sideways-2': 'move-sideways-2 2s ease-in-out infinite',
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
export default config;
