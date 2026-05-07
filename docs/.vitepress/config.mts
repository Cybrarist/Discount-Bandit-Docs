import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Discount Bandit",
  description: "Track Your Favourite Products Across Multiple Stores | Self Hosted",
  cleanUrls: true,
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

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
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
          { text: 'FAQs', link: '/faqs' },
          { text: 'v3', items: [
                  { text: 'Features', link: '/v3/features' },
                  {
                      text: "Installation",
                      items: [
                          { text: 'Directly On OS ', link: '/v3/installation/operating_system' },
                          { text: 'Docker', link: '/v3/installation/docker' },
                          { text: 'Portainer', link: '/v3/installation/portainer' },
                          { text: 'Docker Compose', link: '/v3/installation/docker-compose' },
                          { text: 'Environments', link: '/v3/installation/environments' },
                      ]
                  },
                  { text: 'FAQs', link: '/v3/faqs' },
          ] },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Getting Started', link: '/getting-started' },
              { text: 'Features', link: '/features' },
              {
                text: "Installation",
                collapsed: true,
                items: [
                  { text: 'Operating System', link: "/installation/operating_system" },
                  { text: 'Docker', link: '/installation/docker' },
                  { text: 'Portainer', link: '/installation/portainer' },
                  { text: 'Docker Compose', link: '/installation/docker-compose' },
                  { text: 'Environments', link: '/installation/environments' },
                ]
              },
              { text: 'FAQs', link: '/faqs' },
              { text: 'v3',
                  collapsed: true,
                  items: [
                      { text: 'Features', link: '/v3/features' },
                      {
                          text: "Installation",
                          items: [
                              { text: 'Directly On OS ', link: '/v3/installation/operating_system' },
                              { text: 'Docker', link: '/v3/installation/docker' },
                              { text: 'Portainer', link: '/v3/installation/portainer' },
                              { text: 'Docker Compose', link: '/v3/installation/docker-compose' },
                              { text: 'Environments', link: '/v3/installation/environments' },
                          ]
                      },
                      { text: 'FAQs', link: '/v3/faqs' },
                  ]
              },
            ]
          }
        ],
      }
    },

    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      link: '/ar/',
      themeConfig: {
        outline: {
          label: 'في هذه الصفحة'
        },
        docFooter: {
          prev: 'الصفحة السابقة',
          next: 'الصفحة التالية'
        },
        nav: [
          { text: 'الرئيسية', link: '/ar/' },
          { text: 'البداية', link: '/ar/getting-started' },
          { text: 'الميزات', link: '/ar/features' },
          {
            text: 'التثبيت',
            items: [
              { text: 'نظام التشغيل', link: '/ar/installation/operating_system' },
              { text: 'Docker', link: '/ar/installation/docker' },
              { text: 'Portainer', link: '/ar/installation/portainer' },
              { text: 'Docker Compose', link: '/ar/installation/docker-compose' },
              { text: 'البيئات', link: '/ar/installation/environments' },
            ]
          },
          { text: 'الأسئلة الشائعة', link: '/ar/faqs' },
        ],
        sidebar: [
          {
            text: 'مقدمة',
            items: [
              { text: 'البداية', link: '/ar/getting-started' },
              { text: 'الميزات', link: '/ar/features' },
              {
                text: 'التثبيت',
                collapsed: true,
                items: [
                  { text: 'نظام التشغيل', link: '/ar/installation/operating_system' },
                  { text: 'Docker', link: '/ar/installation/docker' },
                  { text: 'Portainer', link: '/ar/installation/portainer' },
                  { text: 'Docker Compose', link: '/ar/installation/docker-compose' },
                  { text: 'البيئات', link: '/ar/installation/environments' },
                ]
              },
              { text: 'الأسئلة الشائعة', link: '/ar/faqs' },
            ]
          }
        ],
      }
    },
  },

  themeConfig: {
    siteTitle: "Discount Bandit",
    logo: "/bandit.png",
    search: {
      provider: 'local'
    },
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
