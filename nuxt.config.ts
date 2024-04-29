// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { pwa } from './config/pwa'

// console.log('nuxt.config.ts', process.env.NODE_ENV)

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#326CB3' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', href: `/favicon.ico`, sizes: '48x48' },
        { rel: 'apple-touch-icon', href: `/apple-touch-icon-180x180.png` }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // pwa not working with nuxt dev server
  // devServer: {
  //   host: '0.0.0.0'
  // },
  modules: ['@vite-pwa/nuxt', '@pinia/nuxt'],
  pwa,
  devtools: { enabled: true }
})
