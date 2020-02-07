module.exports = {
  globals: {
    MyGlobal: true
  },
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true,
    'cypress/globals': true
  },
  parser: 'babel-eslint',
  plugins: ['react', 'babel', 'react-hooks', 'import', 'cypress'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 9,
    sourceType: 'module'
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    },
    propWrapperFunctions: ['forbidExtraProps']
  },
  rules: {
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],
    'no-unneeded-ternary': 2,
    'no-const-assign': 1,
    'no-this-before-super': 1,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unneeded-ternary': 2,
    'no-unused-vars': 1,
    'no-debugger': 1,
    'no-console': 0,
    'prefer-template': 2,
    'constructor-super': 1,
    'valid-typeof': 1,
    'react/display-name': 0,
    'react/jsx-uses-react': 1,
    'react/prop-types': 0,
    'react/require-default-props': 2,
    'react/jsx-no-useless-fragment': 2,
    'react/default-props-match-prop-types': 2,
    'react/jsx-key': 2,
    'react/jsx-fragments': [0, 'syntax'],
    'react/no-unused-prop-types': 2,
    'react-hooks/rules-of-hooks': 2,
    'no-async-promise-executor': 0
  }
}
