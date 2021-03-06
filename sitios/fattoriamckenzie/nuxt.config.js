export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  generate: {
    dir: '../../lafm_site'
  },

  

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Fattoria McKenzie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/../../components'
    ]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxt/image'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    dir: '../../content'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
/*
  pwa: {
    manifest: {
      name: 'My Awesome App',
      lang: 'en',
      useWebmanifestExtension: false
    }
  }*/
}
