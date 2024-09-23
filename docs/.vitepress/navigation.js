export default {
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Introduction', link: '/introduction' },
    { text: 'Live Example', link: '/example/' }
  ],

  sidebar: [
    {
      text: 'Guide',
      items: [{ text: 'Introduction', link: '/introduction' }]
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
    }
  ],

  socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
};
