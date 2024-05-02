import type { VitePWAOptions } from 'vite-plugin-pwa'
export const pwa: Partial<VitePWAOptions> = {
  mode: 'production',
  registerType: 'autoUpdate',
  base: '/',
  scope: '/',
  includeAssets: ['favicon.ico', 'robots.txt'],
  manifest: {
    name: 'EXAMPLE-PWA',
    short_name: 'EXAMPLE',
    display: 'standalone',
    description: 'This is a description for the EXAMPLE PWA',
    screenshots: [],
    theme_color: '#ffffff',
    lang: 'ja',
    start_url: '/',
    background_color: '#ffffff',
    orientation: 'any',
    scope: '/',
    related_applications: [],
    prefer_related_applications: false,
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png'
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  },
  workbox: {
    disableDevLogs: true,
    navigateFallback: null,
    globPatterns: ['**/*.{css,js,html,json}*'],
    runtimeCaching: [
      // {
      //   urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      //   handler: 'CacheFirst',
      //   options: {
      //     cacheName: 'google-fonts-cache',
      //     expiration: {
      //       maxEntries: 10,
      //       maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
      //     },
      //     cacheableResponse: {
      //       statuses: [0, 200]
      //     }
      //   }
      // },
      // {
      //   urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
      //   handler: 'CacheFirst',
      //   options: {
      //     cacheName: 'gstatic-fonts-cache',
      //     expiration: {
      //       maxEntries: 10,
      //       maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
      //     },
      //     cacheableResponse: {
      //       statuses: [0, 200]
      //     },
      //   }
      // },
      // {
      //   urlPattern: ({url}) => url.origin === 'https://api.example.com',
      //   handler: 'NetworkFirst',
      //   options: {
      //     cacheName: 'api-cache',
      //   },
      // },
      {
        urlPattern: ({ request }) => request.destination === 'image',
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'images-cache',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
          }
        }
      },
      {
        // font
        urlPattern: ({ request }) => request.destination === 'font',
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'fonts-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
          }
        }
      },
      {
        urlPattern: /\/_payload\.json(\?.*)?$/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'payload-json-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
          },
          matchOptions: {
            ignoreSearch: true // ignore query string
          }
        }
      }
    ]
  },
  devOptions: {
    enabled: process.env.NODE_ENV === 'production',
    type: 'module',
    navigateFallback: 'index.html'
  },
  disable: process.env.NODE_ENV === 'development'
}
