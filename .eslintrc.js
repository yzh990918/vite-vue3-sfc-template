module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // disable the rule for all files
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  // overrides: [
  //   {
  //     // enable the rule specifically for TypeScript files
  //     files: ['*.js', '*.ts'],
  //     rules: {
  //       '@typescript-eslint/explicit-module-boundary-types': 'warn',
  //     },
  //   },
  // ],
};
