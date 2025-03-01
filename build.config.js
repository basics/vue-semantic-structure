import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src',
      pattern: ['**/*.ts'],
      declaration: false,
      format: 'cjs',
      loaders: ['js'],
      ext: 'cjs'
    },
    { builder: 'mkdist', input: './src', pattern: ['**/*.ts'], format: 'esm', loaders: ['js'], ext: 'js' }
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
