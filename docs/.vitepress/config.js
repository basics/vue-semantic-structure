// import { defineConfig } from 'vitepress';

// // https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: 'Vue Semantic Structure',
//   description: 'Helper for semantic HTML structure.',
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//   }
// });

import { fileURLToPath } from 'url';
import { defineConfig } from 'vitepress';
import markdownItInlineComments from 'markdown-it-inline-comments';
import navigation from './navigation.js';

// https://vitepress.dev/reference/site-config
export default defineConfig(() => ({
  markdown: {
    config: md => {
      md.use(markdownItInlineComments);
    }
  },

  base: getBaseUrl(),

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: fileURLToPath(new URL('../components/VPNavBarTitle.vue', import.meta.url))
        }
        // {
        //   find: /^.*\/VPNavBarMenu\.vue$/,
        //   replacement: fileURLToPath(new URL('../components/VPNavBarMenu.vue', import.meta.url))
        // },
        // {
        //   find: /^.*\/VPNavScreenMenu\.vue$/,
        //   replacement: fileURLToPath(new URL('../components/VPNavScreenMenu.vue', import.meta.url))
        // }
      ]
    }
  },

  srcDir: 'src',

  title: 'Vue Semantic Structure',
  description: 'Helper for semantic HTML structure.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logoComponent: true,

    ...navigation,

    socialLinks: [{ icon: 'github', link: 'https://github.com/basics/vue-semantic-structure' }]
  },

  sitemap: {
    hostname: 'https://basics.github.io/vue-semantic-structure/'
  }
}));

function getBaseUrl() {
  return process.env.npm_config_base_url || process.env.BASE_URL || '/';
}
