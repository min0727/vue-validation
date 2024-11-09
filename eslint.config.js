// 基本のESLint設定をインポート（JS用）
import js from '@eslint/js';

// VueファイルのためのESLintプラグインをインポート
import pluginVue from 'eslint-plugin-vue';

// npm install eslint-config-prettier --save-dev
import prettier from 'eslint-config-prettier';

export default [
  {
    // リント対象のファイルを指定
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'], // JS、Vue、JSXファイルを対象にする
  },
  {
    // 無視するファイルやフォルダを指定
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'], // ビルドとカバレッジのフォルダを無視
  },

  // JSの推奨ルールを適用
  js.configs.recommended,

  // Vueプラグインの推奨ルールを適用（フラット構造で）
  ...pluginVue.configs['flat/recommended'],

  prettier, // Prettierの競合を避けるために追加

  {
    // ECMAScript 2015（ES6）互換性のためのオプションを設定
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020を有効化
      sourceType: 'module', // ES6のモジュール構文をサポート
      globals: {
        module: 'writable', // moduleを定義してno-undefエラーを回避
      },
    },
    rules: {
      // インポート文の後に必ず空行を入れるルール
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
      ],
      // インデントはスペース2つに統一
      indent: ['error', 2],
      // セミコロンを常に使う
      semi: ['error', 'always'],
      // 文字列にはシングルクォートを使用
      quotes: ['error', 'single'],
      // 未使用の変数には警告を表示
      'no-unused-vars': ['warn'],

      // 推奨ルールの追加
      eqeqeq: ['error', 'always'], // 厳密等価演算子（=== と !==）を強制
      curly: ['error', 'all'], // 制御構文の波括弧を常に使用（コードの読みやすさ向上）
      'no-var': 'error', // `var`の使用を禁止し、`let`や`const`を推奨
      'prefer-const': 'error', // 再代入されない変数には`const`を使用
      'arrow-parens': ['error', 'always'], // アロー関数の引数に必ず括弧をつける（可読性向上）
      'no-console': 'warn', // `console`の使用を警告
      'vue/define-macros-order': 'error', // defineAsyncComponentなどの順序に関するエラーチェック
      'vue/require-prop-types': 'off', // プロパティの型定義を強制しない
    },
  },
];
