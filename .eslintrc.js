module.exports = {
  "env": {
    "node": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended"
  ],
  "globals": {
    "Exception": false,
    "window": false,
    "fetch": true,
    "document": true,
    "Blob": true,
    "expect": true,
    "__DEV__": true,
    "requestAnimationFrame": true,
    "Promise": true,
    "Set": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "classes": true,
      "jsx": true
    }
  },
  "plugins": ["jsx-a11y", "react", "import", "wyze", "lodash"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js"],
      },
      "react-native": { platform: "both" },
    },
  },
  "rules": {
    "no-console": "off",
    "no-await-in-loop": "error",
    "no-template-curly-in-string": "error",
    "array-callback-return": "error",
    "consistent-return": "error",
    "curly": ["error", "multi-line", "consistent"],
    "default-case": "error",
    "dot-notation": "error",
    "eqeqeq": ["error", "always"],
    "no-div-regex": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
    "no-useless-call": "error",
    "no-useless-concat": "warn",
    "no-useless-return": "error",
    "no-void": "error",
    "no-with": "error",
    "require-await": "error",
    "yoda": "error",
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false, "ignoreJSX": "all" }],
    "no-caller": "error",
    "no-empty-function": "warn",
    "no-implied-eval": "error",
    "no-throw-literal": "error",
    "no-else-return": "error",
    "no-new-wrappers": "error",
    "init-declarations": ["error", "always"],
    "no-catch-shadow": "error",
    "no-label-var": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef-init": "error",
    "no-use-before-define": ["error", { "functions": false }],
    "global-require": "error",
    "handle-callback-err": ["error", "^.*(e|E)rr"],
    "no-buffer-constructor": "error",
    "no-path-concat": "error",
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "always", { "objectsInArrays": false, "arraysInArrays": false }],
    "block-spacing": "error",
    "brace-style": "error",
    "camelcase": ["error", { "properties": "never" }],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
    "function-paren-newline": ["error", "consistent"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "indent": ["error", "tab", { "SwitchCase": 1 }],
    "key-spacing": ["error", { "beforeColon": false }],
    "keyword-spacing": ["error", { "before": true }],
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": ["error", "always"],
    "max-len": ["error", { "code": 140, "ignoreComments": true, "ignoreUrls": true, "ignoreTemplateLiterals": true }],
    "no-bitwise": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": ["warn", { "allowForLoopAfterthoughts": true }],
    "no-trailing-spaces": "error",
    "no-underscore-dangle": ["error", { "allow": ["_id", "_rev"] }],
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-newline": ["error"],
    "object-property-newline": [1, { "allowAllPropertiesOnSameLine": true }],
    "object-curly-spacing": ["error", "always", { "arraysInObjects": false, "objectsInObjects": false }],
    "padded-blocks": ["error", "never"],
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single"],
    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-no-undef": 2,
    "react/require-default-props": 0,
    "react/no-access-state-in-setstate": 2,
    "react/react-in-jsx-scope": 2,
    "react/jsx-max-props-per-line": [1, { "maximum": 1, "when": "multiline" }],
    "react/jsx-first-prop-new-line": ["error"],
    "semi": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "switch-colon-spacing": "error",
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "generator-star-spacing": ["error", { "before": false, "after": true }],
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "warn",
    "rest-spread-spacing": ["error", "never"],
    "yield-star-spacing": ["error", "after"],
    "prefer-object-spread": ["error"],
    "import/no-unresolved": 2,
    "import/no-mutable-exports": 2,
    "wyze/newline-after-export": 2,
    "padding-line-between-statements": ["error", {
      blankLine: "always", prev: "*", next: "return"
    }],
    "lodash/prefer-immutable-method": ["error"],
    "lodash/prefer-find": ["error"],
    "lodash/prefer-map": ["error"],
    "lodash/prefer-get": ["error"],
    "lodash/prefer-includes": ["error"],
    "lodash/prefer-some": ["error"],
    "lodash/import-scope": [2, "method"],
  },
  "overrides": [
    {
      "files": ["test/**", "**/*Spec.js", "**/*spec.js"],
      "globals": {
        "sinon": false,
        "expect": true,
        "should": false,
        "request": false,
      },
      "rules": {
        "max-len": 0,
        "no-unused-expressions": 0,
      }
    }
  ]
}
