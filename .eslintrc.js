module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },

  env: {
    browser: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    'prettier',
  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'react',

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'react/display-name': true,
    'react/no-children-prop': true,
    'react/no-danger-with-children': true,
    'react/no-deprecated': true,
    'react/no-direct-mutation-state': true,
    'react/no-find-dom-node': true,
    'react/no-is-mounted': true,
    'react/no-render-return-value': true,
    'react/no-string-refs': true,
    'react/no-unescaped-entities': true,
    'react/no-unknown-property': true,
    'react/prop-types': true,
    'react/react-in-jsx-scope': true,
    'react/require-render-return': true,
    'react/jsx-key': true,
    'react/jsx-no-comment-textnodes': true,
    'react/jsx-no-duplicate-props': true,
    'react/jsx-no-target-blank': true,
    'react/jsx-no-undef': true,
    '	react/jsx-uses-react': true,
  },
}
