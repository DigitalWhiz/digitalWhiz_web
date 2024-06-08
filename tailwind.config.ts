module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        
// #070A60
// #F64994
// #FC78F4
// #C327E9
// #D038B3

        primary: "#F64994", // Rosa primario
        secondary: "#070A60", // Otro tono de azul como secundario
        accent: "#C327E9", // Purpura
        neutral: {
          100: "#f8f8f8", // Gris claro para fondo
          200: "#c9c9c9", // Gris medio para bordes y separadores
          300: "#454545", // Gris oscuro para texto principal
        },
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(180deg, #64b5f6 0%, #0072f5 100%)', // Gradiente sutil azul-claro a azul-oscuro
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@nextui-org/react').nextui({
      themes: {
        light: {
          colors: {
            primary: "#0072f5",
          }
        },
        dark: {
          colors: {
            primary: "#0072f5",
          }
        },
      },
    }),
  ],
};









// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
