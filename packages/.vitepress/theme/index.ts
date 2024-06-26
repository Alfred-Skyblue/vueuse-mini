import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', ElementPlusContainer)
  }
} as Theme
