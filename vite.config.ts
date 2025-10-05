import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/seminole-innovators.github.io',  // <-- match the repo name you're deploying from
})
