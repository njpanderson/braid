/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: getColours('primary'),
        accent: getColours('accent'),
        neutral: getColours('neutral'),
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // color: theme('colors.gray.700'),
            h1: {
              'font-weight': 600
            }
          },
        },
      }),
      fontFamily: {
        'lato': 'Lato, sans-serif'
      },
      boxShadow: {
        'frame': '-10px 0 30px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

function getColours(name) {
  let colours = {};

  for (let a = 100; a <= 900; a += 100) {
    colours[a] = `rgba(var(--color-${name}-${a}), <alpha-value>)`;
  }

  return colours;
}