export default {
    title: 'vitePress',
    description: 'Vue3 components for learn',
    base: './',
    themeConfig:{
      smoothScroll: true,
      nav: [
        { text: '组件', link: '/guide' },
      ],
      sidebar:{
        "/":[
          {text:'通用组件',items:[
            {text:'Button',link:'/components/button'},
          ]}
        ]
      }
    },
    markdown: {
      config: (md) => {
        const { demoBlockPlugin } = require('vitepress-theme-demoblock')
        console.log(demoBlockPlugin)
        md.use(demoBlockPlugin)

      }
    }
  }