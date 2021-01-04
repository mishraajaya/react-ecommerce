module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  settings: {
    'import/resolver': 'webpack'
  },
  rules: {
    // 0 means off
    // 1 means warnings but not required
    // 2 means required
    'arrow-body-style': 0,
    'no-unused-vars': 2,
    'import/no-unresolved': 0,
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-var': 1,
    'prefer-destructuring': 2,
    'prettier/prettier': [
      2,
      {
        arrowParens: 'avoid',
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'import/extensions': [
      'error',
      {
        '.jsx': 'never'
      }
    ],
    'react/button-has-type': [
      0,
      {
        button: 0,
        submit: 0,
        reset: 0
      }
    ],
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-find-dom-node': 2,
    'react/no-unused-prop-types': 2,
    'react/no-unused-state': 2,
    'react/prop-types': 1,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 1,
    'react/display-name': 0
  }
}
