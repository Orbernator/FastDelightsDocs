import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fast Delights Docs",
  description: "Docs for Hungry People",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes/index' }
    ],

    sidebar: [
      {
        text: 'Recipes',
        link: "/recipes/index",
        items: [
          { text: 'Beef Burgers', link: '/recipes/beef-burgers' },
          { text: 'Runtime API Examples', link: '/recipes/chicken-burgers' },
          { text: "Snack Foods", link: '/recipes/snack-foods'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orbernator/fast-delights-docs' }
    ]
  }
})
