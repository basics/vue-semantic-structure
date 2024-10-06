import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    {
      input: './src',
      builder: 'mkdist',
      pattern: ['**/*.vue'],
      addRelativeDeclarationExtensions: true,
      ext: 'js',
      esbuild: {
        jsxImportSource: 'vue',
        jsx: 'automatic',
        jsxFactory: 'h'
      }
    },
    { builder: 'mkdist', input: './src', pattern: ['**/*.js'], format: 'cjs', loaders: ['js'], ext: 'cjs' },
    { builder: 'mkdist', input: './src', pattern: ['**/*.js'], format: 'esm', loaders: ['js'], ext: 'js' }
  ],
  declaration: true,
  clean: true,
  externals: ['vue'],
  rollup: {
    esbuild: {
      target: 'esnext'
    },
    emitCJS: false,
    cjsBridge: true
  }
});
