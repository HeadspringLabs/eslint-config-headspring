module.exports = {
  "extends": [
    "eslint-config-airbnb",
    "plugin:import/react",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  "plugins": [
    "react",
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true,
  },
  "rules": {
    'linebreak-style': ['off', 'windows'],
    'no-plusplus': 0,
    'max-len': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,

    // Enable a11y rules on per project basis
    'jsx-a11y/anchor-has-content': ['off', { components: [''] }],
    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/aria-props': 'off',
    'jsx-a11y/aria-proptypes': 'off',
    'jsx-a11y/aria-unsupported-elements': 'off',
    'jsx-a11y/href-no-hash': ['off', { components: ['a'] }],
    'jsx-a11y/img-has-alt': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/label-has-for': ['off', { components: ['label'] }],
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-access-key': 'off',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/onclick-has-focus': 'off',
    'jsx-a11y/role-has-required-aria-props': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',
    'jsx-a11y/heading-has-content': ['off', { components: [''] }],
    'jsx-a11y/html-has-lang': 'off',
    'jsx-a11y/lang': 'off',
    'jsx-a11y/no-marquee': 'off',
    'jsx-a11y/scope': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};
