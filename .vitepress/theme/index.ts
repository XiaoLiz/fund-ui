import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css';

import FundUI from '../../src/';
console.log(FundUI, 'FundUI')

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FundUI)
  }
}

