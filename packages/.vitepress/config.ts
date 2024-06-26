import { defineConfig } from 'vitepress'
import sidebar from './sidebar.json'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VueUse',
  description: 'vueuse-mini',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
