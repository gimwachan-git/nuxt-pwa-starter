import type { VitePWAOptions } from 'vite-plugin-pwa'

declare module 'nuxt/config' {
  interface NuxtConfig {
    pwa?: Partial<VitePWAOptions>
  }
}
