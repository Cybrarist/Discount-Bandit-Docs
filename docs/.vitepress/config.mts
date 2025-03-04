import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discount Bandit",
  description: "Track Your Favourite Products Across Multiple Stores | Self Hosted",
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },
  head: [
      [
        'link', { rel: 'stylesheet', href: "/css/custom.css" }
      ],
      [
        'link', { rel: 'icon', href: '/favicon.ico' }
      ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-5J19D8NYPY' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5J19D8NYPY');`
    ]
    ],
  themeConfig: {
    siteTitle: "Discount Bandit",
    logo : "images/bandit.png",
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Features', link: '/features' },
      {
        text: "Installation",
        items: [
          { text: 'Directly On OS ', link: '/installation/operating_system' },
          { text: 'Docker', link: '/installation/docker' },
          { text: 'Portainer', link: '/installation/portainer' },
          { text: 'Docker Compose', link: '/installation/docker-compose' },
          { text: 'Environments', link: '/installation/environments' },
        ]
      },
      { text: 'Extension', link: '/extension' },
      { text: 'FAQs', link: '/faqs' },
      { text: 'Contribution', link: '/contribution' },

    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Features', link: '/features' },
          {
            text: "Installation",
            collapsed: true ,
            items: [
              { text: 'Operating System', link: "/installation/operating_system" },
              { text: 'Docker' , link: '/installation/docker' },
              { text: 'Portainer' , link: '/installation/portainer' },
              { text: 'Docker Compose' , link: '/installation/docker-compose' },
              { text: 'Environments', link: '/installation/environments' },

            ]
          },
          { text: 'Extension', link: '/extension' },
          { text: 'FAQs', link: '/faqs' },
          { text: 'Contribution', link: '/contribution' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cybrarist/discount-bandit' },
      { icon: 'instagram', link: 'https://instagram.com/cybrarist' },
      { icon: 'discord', link: 'https://discord.gg/VBMHvH8tuR' }
    ]
  },
  sitemap: {
    hostname: "https://discount-bandit.cybrarist.com"
  }
})
