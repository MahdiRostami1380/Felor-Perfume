/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DaniloCatalina: "DaniloCatalina",
        SatoshiVariable: "SatoshiVariable",
      },
      backgroundImage: {
        RadialGradient:
          "radial-gradient(circle at 40% 50%, #21201F, black 30%)",
        RadialGradientOurValues:
          "radial-gradient(circle at 70% 40%, #21201F, black 25%)",
        RadialGradientBestSell:
          "radial-gradient(circle at 50% 50%, rgba(33, 32, 31, 0.3), rgba(0, 0, 0, 0.4) 50%)",
        LinearGradientProductCard:
          "linear-gradient(to bottom left, #222, black)",
      },
    },
  },
  plugins: [],
};
