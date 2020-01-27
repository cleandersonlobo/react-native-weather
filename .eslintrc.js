module.exports = {
  root: true,
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true
  },
  "plugins": ["react-native", "jsx-a11y", "import", "prettier"],
  "extends": ["airbnb", "plugin:react-native/all", "prettier", "prettier/react", "plugin:prettier/recommended", "eslint-config-prettier"],
  "rules": {
    "react/jsx-props-no-spreading": 0,
    "camelcase": 0,
    "no-underscore-dangle": 0,
    "react/require-default-props": 0,
    "react/destructuring-assignment": 1,
    "react-native/no-color-literals": 1,
    "prettier/prettier": [
      "error",
      {
      "trailingComma": "es5",
      "singleQuote": true,
      "printWidth": 100
      }
    ],
    "react/no-unused-state": 0,
    "react-native/no-raw-text": 0,
    "react/prefer-stateless-function": [0, { "ignorePureComponents": 0 }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "global-require": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      },
      "babel-module": {}
    }
  },
  "globals": {
    "__DEV__": true
  }
};
