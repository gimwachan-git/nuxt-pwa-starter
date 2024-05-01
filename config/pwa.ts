import type { VitePWAOptions } from 'vite-plugin-pwa'
export const pwa: Partial<VitePWAOptions> = {
  mode: 'production',
  registerType: 'autoUpdate',
  base: '/',
  scope: '/',
  includeAssets: ['favicon.ico', 'robots.txt'],
  manifest: {
    name: 'GIMWA-PWA',
    short_name: 'GIMWA',
    display: 'standalone',
    description: 'This is a description for the GIMWA PWA',
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
    globPatterns: [
      '**/*.{css,js,html,ico,txt,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,json}*',
      '**/*_payload.json*'
    ],
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|ico)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
          }
        }
      },
      {
        urlPattern:
          /(\.(css|js,html,ico,txt,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,json)|_payload\.json)(\?[a-zA-Z0-9-]+)?$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'assets',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 7 * 24 * 60 * 60 // 1 week
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
