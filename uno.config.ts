import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerAttributifyJsx } from 'unocss'

export default defineConfig({
  theme: {},
  shortcuts: {},
  safelist: [],
  rules: [['h-screen', { height: 'calc(100vh - var(--vh-offset, 0px))' }]],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { display: 'inline-block', 'vertical-align': 'middle' },
    }),
    presetTypography(),
  ],
  transformers: [transformerAttributifyJsx()],
})
