module.exports = {
    title: 'Hello VitePress',
    description: 'Just playing around.',
    themeConfig:{
        logo: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/element3.png',
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'API', link: '/api/' },
        ],
        sidebar:{
          "/":[
            {
                text: 'Guide',
                items: [
                  {
                    text: 'Why Vitest',
                    link: '/guide/why',
                  }
                ],
            },
            {
                text: 'API',
                items: [
                  {
                    text: 'API Reference',
                    link: '/api/',
                  },
                ],
            },
          ]
        }
    },
}