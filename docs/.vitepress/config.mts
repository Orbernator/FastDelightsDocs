import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fast Delights Docs",
  base: '/fastdelightsdocs/',
  description: "Docs for Hungry People",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes/index' }
    ],

    sidebar: [
      {
        text: 'Items',
        link: "/items",
        items: [

        ]
      },
      {
        text: 'Contributing',
        link: "/contributing",
        items: [
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orbernator/fast-delights-docs' },
      { icon: 'email', link: 'mailto:orbernator@teamorbi.net'},
    ]
  }
})
