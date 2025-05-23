import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintIgnores from './eslint.ignores.js';
import tseslint from 'typescript-eslint';

export default [
  eslintIgnores,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser }
    },
    rules: {
      'prettier/prettier': 'error'
    }
  }
];
