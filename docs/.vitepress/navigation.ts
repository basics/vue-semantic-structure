export default {
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Introduction', link: '/introduction' },
    { text: 'Live Example', link: 'https://basics.github.io/vue-semantic-structure/playground/' }
  ],

  sidebar: [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/introduction' },
        { text: 'Setup', link: '/setup' },
        { text: 'Usage', link: '/usage' }
      ]
    },
    {
      text: 'Composables',
      items: [
        { text: 'useContentHeadline', link: '/composables/use-content-headline' },
        { text: 'useContentContainer', link: '/composables/use-content-container' }
      ]
    },
    {
      text: 'Components',
      items: [
        { text: 'ContentHeadline', link: '/components/content-headline' },
        { text: 'ContentContainer', link: '/components/content-container' }
      ]
    },
    {
      text: 'Integration',
      items: [{ text: 'Nuxt 3', link: '/integration/nuxt-3' }]
    }
  ],

  socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
};
