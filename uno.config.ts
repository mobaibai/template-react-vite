import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center'
    }
  ],
  theme: {
    colors: {
      primary: 'var(--theme-primary)'
    }
  }
})
