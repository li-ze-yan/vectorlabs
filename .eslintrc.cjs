/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  // 该配置项主要用于指示此.eslintrc文件是Eslint在项目内使用的根级别文件，并且 ESLint 不应在该目录之外搜索配置文件
  root: true,
  // 默认情况下，Eslint使用其内置的 Espree 解析器，该解析器与标准 JavaScript 运行时和版本兼容，而我们需要将ts代码解析为eslint兼容的AST，所以此处我们使用 @typescript-eslint/parser。
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  ignorePatterns: ['!**/.server', '!**/.client'],

  // Base config
  // 该配置项告诉eslint我们拓展了哪些指定的配置集，其中
  // eslint:recommended ：该配置集是 ESLint 内置的“推荐”，它打开一组小的、合理的规则，用于检查众所周知的最佳实践
  // @typescript-eslint/recommended：该配置集是typescript-eslint的推荐，它与eslint:recommended相似，但它启用了特定于ts的规则
  // @typescript-eslint/eslint-recommended ：该配置集禁用 eslint:recommended 配置集中已经由 typeScript 处理的规则，防止eslint和typescript之间的冲突。
  // prettier（即eslint-config-prettier）关闭所有可能干扰 Prettier 规则的 ESLint 规则，确保将其放在最后，这样它有机会覆盖其他配置集
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    // "prettier",
  ],

  // 该配置项指示要加载的插件，这里
  // @typescript-eslint 插件使得我们能够在我们的存储库中使用typescript-eslint包定义的规则集。
  // prettier插件（即eslint-plugin-prettier）将 Prettier 规则转换为 ESLint 规则
  // "prettier"
  plugins: ['@typescript-eslint'],

  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': {
          typescript: {},
        },
      },
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
    },

    // Node
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true,
      },
    },
  ],
}
