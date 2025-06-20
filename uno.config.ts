import { defineConfig, presetIcons, presetAttributify, presetTypography, toEscapedSelector, presetWind3 } from 'unocss'

export default defineConfig({
  rules: [
    [
      /^rainbow-(\w+)$/,
      ([, name], { rawSelector, currentSelector, variantHandlers, theme }) => {
        // console.log(name, rawSelector, currentSelector, variantHandlers)
        const selector = toEscapedSelector(rawSelector)
        const color = `var(--rb-brand${rawSelector.includes('dark:rainbow') ? '-dark' : ''})`
        if (name === 'text') {
          return `
            ${selector} {
              color: ${color};
            }
          `
        } else if (name === 'bgc') {
          return `
            ${selector} {
              background-color: ${color};
            }
          `
        } else if (name === 'a') {
          return `
            ${selector} a {
              color: ${color};
            }
          `
        }
      }
    ]
  ],
  presets: [presetWind3(), presetAttributify(), presetIcons(), presetTypography()],
  shortcuts: [
    {
      center: 'flex justify-center items-center'
    }
  ],
  theme: {
    colors: {
      primary: 'var(--theme-primary)'
    }
  }
})
