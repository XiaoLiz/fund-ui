export default {
    title: 'vitePress',
    description: 'Vue3 components for learn',
    base: './',
    themeConfig:{
        smoothScroll: true,
        nav: [
            { text: '组件', link: '/components/button' },
        ],
        sidebar:{
            "/":[
                {   text:'通用组件',
                    items:[
                        { text:'Button', link:'/components/button' },
                    ]
                }
            ]
        },
        demoblock: {
            '/': {
                'hide-text': 'Hide',
                'show-text': 'Expand',
                'copy-button-text': 'Copy',
                'copy-success-text': 'Copy success'
            },
            '/zh': {
                'hide-text': '隐藏代码',
                'show-text': '显示代码',
                'copy-button-text': '复制代码片段',
                'copy-success-text': '复制成功'
            }
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