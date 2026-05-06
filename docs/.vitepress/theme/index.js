import DefaultTheme from 'vitepress/theme'
import { onMounted, watchEffect } from 'vue'
import { useRoute } from 'vitepress'

function applyDocumentDirection(path) {
  if (typeof document === 'undefined') {
    return
  }

  const isArabicRoute = path === '/ar/' || path.startsWith('/ar/')
  const html = document.documentElement

  html.lang = isArabicRoute ? 'ar' : 'en-US'
  html.dir = isArabicRoute ? 'rtl' : 'ltr'
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    DefaultTheme.enhanceApp?.({ app })
  },
  setup() {
    const route = useRoute()

    onMounted(() => {
      watchEffect(() => {
        applyDocumentDirection(route.path)
      })
    })
  }
}
