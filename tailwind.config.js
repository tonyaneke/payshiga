/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bold: ["ShigaB"],
        medium: ["ShigaM"],
        regular: ["ShigaR"],
      },
      colors: {
        primary: {
          dark: "#171819",
          light: "#f0f0f0",
          background: "#0F0F10",
        },
        secondary: {
          gray: "#232425",
          deepGray: "#171819",
          bgGray: "#454647",
        },
        subText: "#6F6F6F",
        accent: {
          primary: "#727AE4",
          success: "#A6FFB5",
          errorBg: "#2F1D1C",
          error: "#FF453A",
          disabledBtn: "rgba(114, 122, 228, 0.4)",
          placeholder: "#2E302E",
          inputField: "#1E1F20",
          iconContainer: "#232425",
        },
      },
    },
  },
  plugins: [],
};
