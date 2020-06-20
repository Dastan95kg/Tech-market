module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4],
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prop-types": 0,
        "eslint linebreak-style": 0,
        "eol-last": 0,
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "react/prefer-stateless-function": 0
    },
};
