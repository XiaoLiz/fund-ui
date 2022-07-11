export default {
    title: 'vitePress',
    description: 'Vue3 components for learn',
    themeConfig:{
      logo: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/element3.png',
      nav: [
        { text: '组件', link: '/guide' },
      ],
      sidebar:{
        "/":[
          {text:'通用组件',items:[
            {text:'Button',link:''},
          ]}
        ]
      }
    },
    markdown: {
      config: (md) => {
        const { demoBlockPlugin } = require('vitepress-theme-demoblock')
        md.use(demoBlockPlugin)
      }
    }
  }