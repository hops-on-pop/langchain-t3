/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  bracketSpacing: true,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  overrides: [
    {
      files: 'Routes.*',
      options: {
        printWidth: 999,
      },
    },
  ],
  plugins: [require('prettier-plugin-tailwindcss')],
}

module.exports = config
