import { defineConfig } from '@playwright/test'
const previewBase = process.env.PREVIEW_BASE
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 45000,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: previewBase ? `http://127.0.0.1:4173${previewBase}` : 'http://127.0.0.1:5173',
    browserName: 'chromium',
    channel: 'msedge',
    headless: true,
  },
  webServer: {
    command: previewBase
      ? `npm.cmd run preview -- --port 4173 --strictPort --base ${previewBase}`
      : 'npm.cmd run dev -- --port 5173 --strictPort',
    url: previewBase ? `http://127.0.0.1:4173${previewBase}` : 'http://127.0.0.1:5173',
    reuseExistingServer: !previewBase && !process.env.CI,
  },
})
