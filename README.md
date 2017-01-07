A standard ESLint config for Headspring projects, but with ESLint itself and all the necessary shareable config, plugins and parser as dependencies.

Inspired by: [Turning duplicated configuration into installable tooling: ESLint edition](https://medium.com/@jbscript/config-tools-eslint-c85b6d48f7e2#.vp7g0lf5y)

Provides an `eslint` command which runs the real ESLint with this config's `.eslintrc` in the context of this module's dependencies, so it will be able to find the plugins and parser it depends on without having to manage these dependencies individially in every project.

Installing an `eslint` command means tools which look for `node_modules/.bin/eslint` will find and run what is effectively a preconfigured version - for example, [VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) will successfully lint with this config just by having it installed in a project.

## MIT Licensed