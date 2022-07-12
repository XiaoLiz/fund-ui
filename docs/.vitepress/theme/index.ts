import DefaultTheme from 'vitepress/theme'
// import 'vitepress-theme-demoblock/theme/styles/index.css';
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

import FundUI from '../../../src/';
console.log(FundUI)
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FundUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}

