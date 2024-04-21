/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.js"
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            h1: {
              'font-weight': 600
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

